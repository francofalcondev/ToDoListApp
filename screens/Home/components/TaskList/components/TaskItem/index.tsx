import { Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TaskItemProps } from "./types";
import { styles } from "./styles";
import { LucideCalendarDays } from "lucide-react-native";
import { formatDate } from "./utils/formattedDate";

export const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <View style={styles.containerTaskItemMain}>
      <BouncyCheckbox
        size={20}
        iconStyle={{ marginTop: 5 }}
        isChecked={task.completed}
        innerIconStyle={{ borderWidth: 2 }}
        fillColor="gray"
        text={task.title}
        textStyle={{ color: "black", fontSize: 20 }}
      />
      <View style={styles.containerTaskItemDate}>
        <LucideCalendarDays color="gray" size={20} />
        <Text style={styles.textDate}>{formatDate(task.createdAt)}</Text>
      </View>
    </View>
  );
};
