import {
  KeyboardAvoidingView,
  Modal,
  TextInput,
  View,
  Platform,
  Keyboard,
  Pressable,
  Text,
} from "react-native";
import { styles } from "./styles";
import { ModalAddTaskProps } from "./types";
import { useEffect, useRef, useState } from "react";
import { CheckCheck } from "lucide-react-native";

const ModalAddTask = ({
  isModalAddTaskOpen,
  setIsModalAddTaskOpen,
}: ModalAddTaskProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const textInputRef = useRef<any>(null);

  const onModalShow = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
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
              autoFocus={true}
              placeholder="Input new task here"
            />
            <Pressable style={styles.buttonAddTask}>
              <CheckCheck color="#ffff" />
            </Pressable>
          </View>

          <Pressable onPress={() => setIsModalAddTaskOpen(false)}>
            <Text>X</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ModalAddTask;
