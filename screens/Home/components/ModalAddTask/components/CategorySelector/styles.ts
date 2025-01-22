import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  popoverContainer: {
    padding: 15,
    width: 165,
  },

  popoverButton: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(192, 189, 189, 0.26)",
    borderRadius: 15,
  },

  popoverButtonText: {
    color: Colors.buttonColorPrimary,
    fontSize: 12,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },

  textCategory: {
    fontSize: 20,
  },

  textCategoryActive: {
    color: Colors.buttonColorPrimary,
    fontWeight: 600,
  },

  separator: {
    height: 1,
    marginVertical: 7,
  },
});
