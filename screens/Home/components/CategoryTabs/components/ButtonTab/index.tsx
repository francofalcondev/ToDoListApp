import { Text, TouchableOpacity } from "react-native";
import { ButtonTabProps } from "./types";
import { styles } from "./styles";
import { TaskCategory } from "@/context/TaskContentx/types";

export const ButtonTab = ({
  title,
  isSelected,
  setFilterSelected,
}: ButtonTabProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        isSelected && styles.buttonContainerActive,
      ]}
      onPress={() => setFilterSelected(title as TaskCategory)}
    >
      <Text style={[styles.buttonText, isSelected && styles.buttonTextActive]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
