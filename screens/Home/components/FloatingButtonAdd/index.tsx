import { Pressable} from "react-native"
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import {FloatingButtonAddProps} from "./types"

const FloatingButtonAdd = ({onPress} : FloatingButtonAddProps) => {
    return(
        <Pressable style={styles.floatingButtonAdd} onPress={onPress}>
            <Ionicons name="add" size={30} color="white"/>            
        </Pressable>
    )
}



export default FloatingButtonAdd;