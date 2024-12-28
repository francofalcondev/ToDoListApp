import React, { useState } from "react";
import { View, Text } from "react-native";
import { FloatingButtonAdd, ModalAddTask, TaskList } from "./components";
import { styles } from "./styles";
import { useTaskContext } from "@/context";

const Home = () => {
  const [isModalAddTaskOpen, setIsModalAddTaskOpen] = useState<boolean>(false);
  const { tasks } = useTaskContext();
  return (
    <View style={styles.container}>
      <Text style={styles.titleHome}>Todo List</Text>
      <TaskList task={tasks} />
      <FloatingButtonAdd
        onPress={() => setIsModalAddTaskOpen((prev) => !prev)}
      />
      <ModalAddTask
        isModalAddTaskOpen={isModalAddTaskOpen}
        setIsModalAddTaskOpen={setIsModalAddTaskOpen}
      />
    </View>
  );
};

export default Home;
