import { Alert, Pressable, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TaskItemProps } from "./types";
import { styles } from "./styles";
import { LucideCalendarDays } from "lucide-react-native";
import { useTaskContext } from "@/context";
import { formatToMMDD } from "./utils/formatToMMDD";
import { format, isToday, parseISO } from "date-fns";

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

  const formatDueDate = (dueDate: Date | undefined) => {
    if (!dueDate) return ""; // Si no hay fecha, no muestra nada
    if (isToday(dueDate)) return "Today"; // Verifica si es hoy
    return format(dueDate, "MM/dd/yyyy"); // Formatea la fecha si no es hoy
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

        <View style={styles.containerTaskInfo}>
          <View style={styles.containerTaskDate}>
            <LucideCalendarDays color="gray" size={20} />
            <Text style={styles.textDate}>
              {format(task.createdAt, "MM/dd/yyyy")}
            </Text>
            <Text>
              {" "}
              {task.dueDate ? `Due date: ${formatDueDate(task.dueDate)}` : ""}
            </Text>
          </View>
          <View style={styles.containerCategoryPriority}>
            <Text style={styles.textPriority}>{task.priority}</Text>
            <Text style={styles.textCategory}>
              {(task.category as string) === "No category"
                ? undefined
                : task.category}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};
