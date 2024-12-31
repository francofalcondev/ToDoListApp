import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 3,
    paddingHorizontal: 3,
    borderRadius: 10,
    backgroundColor: Colors.colorPrimaryLight,
  },
  buttonText: {
    color: Colors.black,
    fontSize: 11,
    paddingLeft: 3,
    paddingRight: 3,
  },

  buttonContainerActive: {
    backgroundColor: Colors.colorPrimaryBlue,
  },
  buttonTextActive: {
    color: Colors.white,
  },
});
