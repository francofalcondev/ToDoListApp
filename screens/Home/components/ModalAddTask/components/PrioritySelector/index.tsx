import { useRef, useState } from "react";
import { TouchableOpacity, Text, FlatList, View } from "react-native";
import Popover from "react-native-popover-view";
import { styles } from "./styles";
import { PriotitySelectorProps } from "./types";
import { Taskpriority } from "@/context/TaskContentx/types";
export const PrioritySelector = ({ setTaskData }: PriotitySelectorProps) => {
  const prioritys: { id: string; name: Taskpriority }[] = [
    { id: "1", name: "High" },
    { id: "2", name: "Medium" },
    { id: "3", name: "Low" },
  ];
  const [selectedPriority, setSelectedPriority] = useState(prioritys[1]);

  const popoverRef = useRef<Popover>(null);
  const handlePrioritySelect = (selected: {
    id: string;
    name: Taskpriority;
  }) => {
    setSelectedPriority(selected);
    setTaskData((prev) => ({
      ...prev,
      priority: selected.name,
    }));
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
        data={prioritys}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePrioritySelect(item)}>
            <Text
              style={[
                styles.textPriority,
                selectedPriority.id === item.id && styles.textPriorityActive,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </Popover>
  );
};
