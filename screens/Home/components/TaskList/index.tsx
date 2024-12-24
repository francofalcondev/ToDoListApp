import { FlatList, ListRenderItemInfo, View } from 'react-native'
import { TaskListProps } from './types'
import { TaskItem } from './components'
import {Task} from '../../types'
import { styles } from './styles'

const TaskList = ({task}: TaskListProps) => {
    return (
        <FlatList data={task} keyExtractor={item => item.id}  
        renderItem={({ item } : ListRenderItemInfo<Task>) => (
            <TaskItem task={item}/>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator}/>}
        />
        
    )
}


export default TaskList