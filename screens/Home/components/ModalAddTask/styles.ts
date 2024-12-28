import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    height: "25%",
    width: "100%",
    backgroundColor: "#ffff",
    padding: 18,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.41)",
  },
  inputAddTask: {
    height: 60,
    fontSize: 17,
    width: "100%",
    borderWidth: 0,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f4f4f4",
    color: "gray",
    textDecorationLine: "none",
  },

  inputAddTaskFocused: {
    borderColor: "red",
  },

  containerTextInput: {
    position: "relative",
  },

  buttonAddTask: {
    position: "absolute",
    backgroundColor: "gray",
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    top: 30,
    right: 0,
    width: 65,
    height: 65,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3.56,
  },
});
