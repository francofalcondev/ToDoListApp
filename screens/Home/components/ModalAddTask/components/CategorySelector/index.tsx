import { FlatList, View, Text, TouchableOpacity } from "react-native";
import Popover from "react-native-popover-view";
import { styles } from "./styles";
export const CategorySelector = () => {
  const categories = [
    { id: "1", name: "All" },
    { id: "2", name: "Personal" },
    { id: "3", name: "Finance" },
    { id: "4", name: "Fitness" },
    { id: "5", name: "Shopping" },
    { id: "6", name: "Family" },
    { id: "7", name: "Study" },
    { id: "8", name: "Work" },
  ];

  return (
    <Popover
      popoverStyle={styles.popoverContainer}
      arrowSize={{ width: 0, height: 0 }}
      from={
        <TouchableOpacity style={styles.popoverButton}>
          <Text style={styles.popoverButtonText}>No Category</Text>
        </TouchableOpacity>
      }
    >
      <FlatList
        data={categories}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </Popover>
  );
};
