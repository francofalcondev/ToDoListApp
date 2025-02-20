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
import { TaskCategory, Taskpriority } from "@/context/TaskContentx/types";

const ModalAddTask = ({
  isModalAddTaskOpen,
  setIsModalAddTaskOpen,
  addTask,
}: ModalAddTaskProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const initialTaskData = {
    title: "",
    category: "No category" as TaskCategory,
    priority: "Medium" as Taskpriority,
    dueDate: undefined as Date | undefined,
  };
  const [taskData, setTaskData] = useState<{
    title: string;
    category: TaskCategory;
    priority: Taskpriority;
    dueDate: Date | undefined;
  }>(initialTaskData);

  const textInputRef = useRef<any>(null);
  const isButtonEnabled: boolean = taskData.title.length > 2;

  const onModalShow = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  const handleOnSubmitData = () => {
    const { category, title, dueDate, priority } = taskData;
    if (!isButtonEnabled) return;
    addTask(title, category, priority, dueDate);
    setTaskData(initialTaskData);
    setIsModalAddTaskOpen(false);
  };

  const handleOnChangeInput = (title: string) => {
    setTaskData((prev) => ({
      ...prev,
      title: title,
    }));
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
              onChangeText={handleOnChangeInput}
              autoFocus={true}
              placeholder="Input new task here"
            />
            <TouchableOpacity
              disabled={!isButtonEnabled}
              style={[
                styles.buttonAddTask,
                isButtonEnabled && styles.buttonAddTaskEnabled,
              ]}
              onPress={handleOnSubmitData}
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
