import { FlatList, ListRenderItemInfo, View, Text } from "react-native";
import { TaskListProps } from "./types";
import { TaskItem } from "./components";
import { styles } from "./styles";
import { Task } from "@/context/TaskContentx/types";
import CompleteIcon from "@/assets/SVG/CompleteIcon";
const TaskList = ({ task }: TaskListProps) => {
  return (
    <FlatList
      data={task}
      keyExtractor={(item) => item.id}
      renderItem={({ item }: ListRenderItemInfo<Task>) => (
        <TaskItem task={item} />
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={
        <View style={styles.emptyComponentContainer}>
          <CompleteIcon width={350} height={350} />
          <Text style={styles.textEmptyComponent}>
            You have no tasks right now. Relax or add something new.
          </Text>
        </View>
      }
    />
  );
};

export default TaskList;
