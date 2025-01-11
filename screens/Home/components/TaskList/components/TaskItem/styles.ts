import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerTaskItemMain: {
    flex: 1,
    paddingBottom: 12,
    paddingTop: 12,
    paddingLeft: 10,
    backgroundColor: "rgba(240, 240, 240, 0.5)",
    borderRadius: 10,
  },
  containerTaskInfo: {
    flex: 1,
    gap: 3,
    paddingLeft: 35,
  },

  containerTaskDate: {
    flexDirection: "row",
    gap: 5,
  },

  textDate: {
    fontSize: 14,
  },

  containerCategoryPriority: {
    flexDirection: "row",
    gap: 10,
  },
  textCategory: {
    color: "#8bc4eb",
    fontWeight: "600",
    textTransform: "capitalize",
  },

  textPriority: {
    color: Colors.colorPrimaryBlue,
    fontWeight: "600",
    textTransform: "capitalize",
  },
});
