import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderRadius: 10,
    backgroundColor: Colors.colorPrimaryLight,
  },
  buttonText: {
    color: Colors.black,
    fontSize: 15,
    paddingLeft: 6,
    paddingRight: 6,
  },

  buttonContainerActive: {
    backgroundColor: Colors.colorPrimaryBlue,
  },
  buttonTextActive: {
    color: Colors.white,
  },
});
