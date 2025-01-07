import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  popoverCalendar: {
    padding: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginVertical: 10,
    width: "90%",
  },
  buttonItem: {
    borderRadius: 7,
    marginBottom: 10,
    backgroundColor: "#D0D3D4",
    padding: 6,
  },
  buttonItemActive: {
    borderRadius: 7,
    marginBottom: 10,
    padding: 6,
    backgroundColor: Colors.colorPrimaryBlue,
  },
  buttonTextActive: {
    color: Colors.white,
    fontSize: 13,
  },
  buttonText: {
    color: Colors.black,
    fontSize: 13,
  },

  footerContainer: {
    marginVertical: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 20,
  },
  footerButtonDone: {
    color: Colors.colorPrimaryBlue,
    fontWeight: 800,
  },
  footerButtonCancel: {
    color: "#8bc4eb",
    fontWeight: 800,
  },
});
