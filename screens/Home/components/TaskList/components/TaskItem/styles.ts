import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerTaskItemMain: {
    flex: 1,
    padding: 5,
    backgroundColor: "rgba(240, 240, 240, 0.5)",
    borderRadius: 10,
  },
  containerTaskItemDate: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    paddingLeft: 40,
  },

  textDate: {
    fontSize: 14,
  },
});
