
import { Text, View, } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"
import {TaskItemProps} from "./types"
import {styles} from  "./styles"
export const TaskItem = ({task}: TaskItemProps) => {
    return (
        <View style={styles.containerTaskItem}>
            <BouncyCheckbox isChecked={task.completed}/>
            <Text>{task.title}</Text>
            <Text>{task.createdAt.toDateString()}</Text>


        </View>
    )
}