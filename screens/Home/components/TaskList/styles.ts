import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  separator: {
    height: 1,
    marginVertical: 5,
  },
  emptyComponentContainer: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textEmptyComponent: {
    color: Colors.colorPrimaryBlue,
    fontSize: 17,
    textAlign: "center",
  },
});
