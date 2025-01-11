import { FlatList, View } from "react-native";
import { ButtonTab } from "./components";
import { styles } from "./styles";
import { useTaskContext } from "@/context";
import { filters } from "@/data/filtersTab";
import { TaskCategory } from "@/context/TaskContentx/types";

export const CategoryTabs = () => {
  const { filterSelected, setFilterSelected } = useTaskContext();

  const handleSetFilter = (filter: string) => {
    const transformedFilter = filter === "All" ? "No category" : filter;
    setFilterSelected(transformedFilter as TaskCategory);
  };

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={filters}
        renderItem={({ item }) => (
          <ButtonTab
            title={item}
            isSelected={item === filterSelected}
            setFilterSelected={handleSetFilter}
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
