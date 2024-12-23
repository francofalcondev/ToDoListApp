import { FlatList, ListRenderItemInfo } from 'react-native'
import { TaskListProps } from './types'
import { TaskItem } from './components'
import {Task} from '../../types'


const TaskList = ({task}: TaskListProps) => {
    return (
        <FlatList data={task} keyExtractor={item => item.id} renderItem={({ item } : ListRenderItemInfo<Task>) => (
            <TaskItem task={item}/>
        )}/>
        
    )
}


export default TaskList