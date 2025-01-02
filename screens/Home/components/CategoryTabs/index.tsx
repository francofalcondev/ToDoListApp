import { FlatList, View } from "react-native";
import { ButtonTab } from "./components";
import { styles } from "./styles";
import { useState } from "react";
export const CategoryTabs = () => {
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>("1");
  const tabs = [
    { id: "1", title: "All" },
    { id: "2", title: "Personal" },
    { id: "3", title: "Finance" },
    { id: "4", title: "Fitness" },
    { id: "5", title: "Shopping" },
    { id: "6", title: "Family" },
    { id: "7", title: "Study" },
    { id: "8", title: "Work" },
  ];

  const handleTabPress = (id: string) => {
    setSelectedCategoryTab(id);
  };

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={tabs}
        renderItem={({ item }) => (
          <ButtonTab
            title={item.title}
            isSelected={item.id === selectedCategoryTab}
            onPress={() => handleTabPress(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        ItemSeparatorComponent={() => (
          <View style={styles.CategoryTabseparator} />
        )}
      />
    </View>
  );
};
