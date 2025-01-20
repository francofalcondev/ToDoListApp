import React, { useState } from "react";
import { View, Text } from "react-native";
import {
  CategoryTabs,
  FloatingButtonAdd,
  ModalAddTask,
  TaskList,
} from "./components";
import { styles } from "./styles";
import { useTaskContext } from "@/context";

const Home = () => {
  const [isModalAddTaskOpen, setIsModalAddTaskOpen] = useState<boolean>(false);
  const { filteredTask, addTask } = useTaskContext();

  return (
    <View style={styles.container}>
      <CategoryTabs />
      <Text style={styles.titleHome}>Task Board</Text>
      <TaskList task={filteredTask} />
      <FloatingButtonAdd
        onPress={() => setIsModalAddTaskOpen((prev) => !prev)}
      />
      <ModalAddTask
        addTask={addTask}
        isModalAddTaskOpen={isModalAddTaskOpen}
        setIsModalAddTaskOpen={setIsModalAddTaskOpen}
      />
    </View>
  );
};

export default Home;
