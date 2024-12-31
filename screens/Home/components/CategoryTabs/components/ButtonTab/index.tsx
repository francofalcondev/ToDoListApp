import { Text, TouchableOpacity } from "react-native";
import { ButtonTabProps } from "./types";
import { styles } from "./styles";

export const ButtonTab = ({ title }: ButtonTabProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
