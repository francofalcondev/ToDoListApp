import { FlatList, View } from "react-native";
import { ButtonTab } from "./components";
import { styles } from "./styles";
import { useState } from "react";
export const CategoryTabs = () => {
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>("1");
  const tabs = [
    { id: "1", title: "Work" },
    { id: "2", title: "Personal" },
    { id: "3", title: "Wishlist" },
    { id: "4", title: "Sport" },
    { id: "5", title: "No Category" },
  ];

  const handleTabPress = (id: string) => {
    setSelectedCategoryTab(id);
  };

  return (
    <View>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <ButtonTab
            title={item.title}
            isSelected={item.id === selectedCategoryTab}
            handleTabPress={() => handleTabPress(item.id)}
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
