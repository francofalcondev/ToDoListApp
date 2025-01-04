import { FlatList, View } from "react-native";
import { ButtonTab } from "./components";
import { styles } from "./styles";
import { useTaskContext } from "@/context";
export const CategoryTabs = () => {
  const { filterSelected, setFilterSelected } = useTaskContext();
  const filters = [
    "All",
    "Personal",
    "Finance",
    "Fitness",
    "Shopping",
    "Family",
    "Study",
    "Work",
  ] as const;

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={filters}
        renderItem={({ item }) => (
          <ButtonTab
            title={item}
            isSelected={item.toLowerCase() === filterSelected}
            setFilterSelected={setFilterSelected}
          />
        )}
        keyExtractor={(item) => item}
        horizontal
        ItemSeparatorComponent={() => (
          <View style={styles.CategoryTabseparator} />
        )}
      />
    </View>
  );
};
