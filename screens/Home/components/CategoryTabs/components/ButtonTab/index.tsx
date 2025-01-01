import { Text, TouchableOpacity } from "react-native";
import { ButtonTabProps } from "./types";
import { styles } from "./styles";

export const ButtonTab = ({ title, isSelected, onPress }: ButtonTabProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        isSelected && styles.buttonContainerActive,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, isSelected && styles.buttonTextActive]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
