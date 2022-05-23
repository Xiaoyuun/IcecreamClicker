import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { isWhiteSpaceLike } from "typescript";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    marginBottom: 700,
    textAlign: "center"
  },
  column: {
    flex: 1,
    flexDirection: "column",
    
  },
  title: {
    flex: 1,
    fontSize: 50,
    alignSelf: "center",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 3,
    borderColor: "black",
    marginLeft: 5,
    marginRight: 5,
  },
  cell: {
    display: "flex",
    flex: 1,
    fontSize: 30,
    marginLeft: 20,
    marginRight: 20,
    fontFamily: "Gill Sans",
  },
});

export default styles;