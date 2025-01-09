import {
  KeyboardAvoidingView,
  Modal,
  TextInput,
  View,
  Platform,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { ModalAddTaskProps } from "./types";
import { useEffect, useRef, useState } from "react";
import { CheckCheck } from "lucide-react-native";
import {
  CategorySelector,
  DueDatePicker,
  PrioritySelector,
} from "./components";

const ModalAddTask = ({
  isModalAddTaskOpen,
  setIsModalAddTaskOpen,
  addTask,
}: ModalAddTaskProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [newTask, setNewTask] = useState("");
  const [taskData, setTaskData] = useState<{
    title: string;
    category: string;
    priority: string;
    description: string;
    dueDate: Date | undefined;
  }>({
    title: "",
    category: "No category",
    priority: "low",
    description: "",
    dueDate: undefined,
  });

  console.log(taskData);
  const textInputRef = useRef<any>(null);
  const isButtonEnabled: boolean = newTask.length > 2;

  const onModalShow = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  const handleAddTaskInput = (title: string) => {
    if (!isButtonEnabled) return;
    if (newTask.trim().length > 3) {
      addTask(newTask);
      setNewTask("");
      setIsModalAddTaskOpen(false);
    }
  };

  useEffect(() => {
    if (isModalAddTaskOpen) {
      Keyboard.dismiss();
      Keyboard.isVisible();
    }
  }, [isModalAddTaskOpen]);

  return (
    <Modal
      transparent={true}
      visible={isModalAddTaskOpen}
      animationType="slide"
      onShow={onModalShow}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.overlay}
      >
        <View style={styles.modalContainer}>
          <View style={styles.containerTextInput}>
            <TextInput
              style={[
                styles.inputAddTask,
                isFocused && styles.inputAddTaskFocused,
              ]}
              ref={textInputRef}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChangeText={setNewTask}
              autoFocus={true}
              placeholder="Input new task here"
            />
            <TouchableOpacity
              disabled={!isButtonEnabled}
              style={[
                styles.buttonAddTask,
                isButtonEnabled && styles.buttonAddTaskEnabled,
              ]}
              onPress={() => handleAddTaskInput(newTask)}
            >
              <CheckCheck color="#ffff" />
            </TouchableOpacity>
            <View style={styles.OptionSelectionView}>
              <CategorySelector setTaskData={setTaskData} />
              <PrioritySelector setTaskData={setTaskData} />
              <DueDatePicker setTaskData={setTaskData} />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ModalAddTask;
