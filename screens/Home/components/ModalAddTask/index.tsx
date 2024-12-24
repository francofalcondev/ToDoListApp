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
const ModalAddTask = ({ isVisible, setIsVisible }: ModalAddTaskProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const textInputRef = useRef<any>(null);

  const onModalShow = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  useEffect(() => {
    if (isVisible) {
      Keyboard.dismiss();
      Keyboard.isVisible();
    }
  }, [isVisible]);

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="slide"
      onShow={onModalShow}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.overlay}
      >
        <View style={styles.modalContainer}>
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
          <Pressable onPress={() => setIsVisible(false)}>
            <Text>X</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ModalAddTask;
