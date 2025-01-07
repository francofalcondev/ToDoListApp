import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  popoverContainer: {
    padding: 10,
    width: 120,
  },
  popoverButton: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(192, 189, 189, 0.5)",
    borderRadius: 15,
  },
  popoverButtonText: {
    color: Colors.buttonColorPrimary,
    fontSize: 11,
    paddingVertical: 4,
    paddingHorizontal: 7,
  },
  textPriorityActive: {
    color: Colors.buttonColorPrimary,
  },
  separator: {
    height: 1,
    marginVertical: 4,
  },
});
