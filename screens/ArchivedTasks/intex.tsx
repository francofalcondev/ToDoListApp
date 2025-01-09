import { useTaskContext } from "@/context";
import { Text, View, FlatList, ListRenderItemInfo } from "react-native";
import { Task } from "@/context";
const ArchivedTasks = () => {
  const { tasks } = useTaskContext();
  const arhivedTasks = tasks.filter((tasks) => tasks.archived);
  return (
    <View>
      <Text>All Task complete</Text>

      <FlatList
        data={arhivedTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: ListRenderItemInfo<Task>) => <Text>{}</Text>}
      />
    </View>
  );
};

export default ArchivedTasks;
