import { FlatList, View, Text, TouchableOpacity } from "react-native";
import Popover from "react-native-popover-view";
import { styles } from "./styles";
import { useRef, useState } from "react";
import { CategorySelectorProps } from "./types";
import { TaskCategory } from "@/context/TaskContentx/types";
import { categories } from "@/data/categories";

export const CategorySelector = ({ setTaskData }: CategorySelectorProps) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const popoverRef = useRef<Popover>(null);

  const handleCategorySelect = (category: {
    id: string;
    name: TaskCategory;
  }) => {
    setSelectedCategory(category);
    setTaskData((prev) => ({
      ...prev,
      category: category.name as TaskCategory,
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
          <TouchableOpacity
            onPress={() =>
              handleCategorySelect({
                id: item.id,
                name: item.name as TaskCategory,
              })
            }
          >
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
