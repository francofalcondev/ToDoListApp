import { FlatList, View, Text, TouchableOpacity } from "react-native";
import Popover from "react-native-popover-view";
import { styles } from "./styles";
import { SetStateAction, useRef, useState } from "react";
import { CategorySelectorProps } from "./types";

export const CategorySelector = ({ setTaskData }: CategorySelectorProps) => {
  const categories = [
    { id: "1", name: "No Category" },
    { id: "2", name: "Personal" },
    { id: "3", name: "Finance" },
    { id: "4", name: "Fitness" },
    { id: "5", name: "Shopping" },
    { id: "6", name: "Family" },
    { id: "7", name: "Study" },
    { id: "8", name: "Work" },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const popoverRef = useRef<Popover>(null);
  const handleCategorySelect = (
    category: SetStateAction<{ id: string; name: string }>,
  ) => {
    setSelectedCategory(category);
    setTaskData((prev) => ({
      ...prev,
      category: category.name,
    }));
    if (popoverRef.current) {
      popoverRef.current.requestClose();
    }
  };

  return (
    <Popover
      ref={popoverRef}
      popoverStyle={styles.popoverContainer}
      arrowSize={{ width: 0, height: 0 }}
      from={
        <TouchableOpacity style={styles.popoverButton}>
          <Text style={styles.popoverButtonText}>{selectedCategory.name}</Text>
        </TouchableOpacity>
      }
    >
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCategorySelect(item)}>
            <Text
              style={
                selectedCategory.id === item.id && styles.textCategoryActive
              }
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </Popover>
  );
};
