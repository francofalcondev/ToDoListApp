import React from "react";
import { View } from "react-native"
import { FloatingButtonAdd,TaskList } from "./components";
import { styles } from "./styles";
import { useTaskManager } from "./hooks";


const Home  = () => {
    
    const {tasks} = useTaskManager()

    const handlePress = () => {
        console.log("se presiono")
    }






    return (
        
        <View style={styles.container}>
            <TaskList task={tasks}/>
            <FloatingButtonAdd onPress={handlePress}/>
        </View>
    );
};


export default Home;