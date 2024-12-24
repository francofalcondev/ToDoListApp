import React, { useState } from "react";
import { View, Text } from "react-native";
import { FloatingButtonAdd, ModalAddTask, TaskList } from "./components";
import { styles } from "./styles";
import { useTaskManager } from "./hooks";

const Home = () => {
  const { tasks } = useTaskManager();
  const [isVisible, setIsVisible] = useState(false);

  const handlePress = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleHome}>Todo List</Text>
      <TaskList task={tasks} />
      <FloatingButtonAdd onPress={handlePress} />
      <ModalAddTask isVisible={isVisible} setIsVisible={setIsVisible} />
    </View>
  );
};

export default Home;
