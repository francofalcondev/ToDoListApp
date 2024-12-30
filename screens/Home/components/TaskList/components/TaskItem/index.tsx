import { Alert, Pressable, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TaskItemProps } from "./types";
import { styles } from "./styles";
import { LucideCalendarDays } from "lucide-react-native";
import { formatDate } from "./utils/formattedDate";
import { useTaskContext } from "@/context";

export const TaskItem = ({ task }: TaskItemProps) => {
  const { deleteTask } = useTaskContext();

  const handleDeleteLongPress = () => {
    Alert.alert("Delete task", "Are you sure you want to delete the task?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          deleteTask(task.id);
        },
      },
    ]);
  };

  return (
    <View style={styles.containerTaskItemMain}>
      <Pressable onLongPress={handleDeleteLongPress}>
        <BouncyCheckbox
          size={20}
          iconStyle={{ marginTop: 5 }}
          isChecked={task.completed}
          innerIconStyle={{ borderWidth: 2 }}
          fillColor="gray"
          onPress={() =>
            setTimeout(() => {
              deleteTask(task.id);
            }, 800)
          }
          text={task.title}
          textStyle={{ color: "black", fontSize: 20 }}
        />
        <View style={styles.containerTaskItemDate}>
          <LucideCalendarDays color="gray" size={20} />
          <Text style={styles.textDate}>{formatDate(task.createdAt)}</Text>
        </View>
      </Pressable>
    </View>
  );
};
