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

const ModalAddTask = ({
  isModalAddTaskOpen,
  setIsModalAddTaskOpen,
  addTask,
}: ModalAddTaskProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [newTask, setNewTask] = useState("");
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
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ModalAddTask;
