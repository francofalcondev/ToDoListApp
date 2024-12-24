import { Pressable } from "react-native";
import { styles } from "./styles";
import { FloatingButtonAddProps } from "./types";
import { Plus } from "lucide-react-native";

const FloatingButtonAdd = ({ onPress }: FloatingButtonAddProps) => {
  return (
    <Pressable style={styles.floatingButtonAdd} onPress={onPress}>
      <Plus size={30} color="white" />
    </Pressable>
  );
};

export default FloatingButtonAdd;
