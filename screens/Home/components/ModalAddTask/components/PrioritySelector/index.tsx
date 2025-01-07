import { SetStateAction, useRef, useState } from "react";
import { TouchableOpacity, Text, FlatList, View } from "react-native";
import Popover from "react-native-popover-view";
import { styles } from "./styles";

export const PrioritySelector = () => {
  const priority = [
    { id: "1", name: "High" },
    { id: "2", name: "Medium" },
    { id: "3", name: "Low" },
  ];

  const [selectedPriority, setSelectedPriority] = useState(priority[0]);
  const popoverRef = useRef<Popover>(null);
  const handlePrioritySelect = (
    priority: SetStateAction<{ id: string; name: string }>,
  ) => {
    setSelectedPriority(priority);
    if (popoverRef.current) {
      popoverRef.current.requestClose();
    }
  };

  return (
    <Popover
      popoverStyle={styles.popoverContainer}
      ref={popoverRef}
      arrowSize={{ width: 0, height: 0 }}
      from={
        <TouchableOpacity style={styles.popoverButton}>
          <Text style={styles.popoverButtonText}>{selectedPriority.name}</Text>
        </TouchableOpacity>
      }
    >
      <FlatList
        data={priority}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePrioritySelect(item)}>
            <Text
              style={
                selectedPriority.id === item.id && styles.textPriorityActive
              }
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </Popover>
  );
};
