import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Home from "./src/screens/Home";
import Constants from "expo-constants";
import { PRİMARY_COLOR, STATUSBAR_COLOR } from "./src/helpers/colorHelpers";

export default function App() {
  return (
    <>
      <StatusBar style="auto" backgroundColor={STATUSBAR_COLOR} />
      <View style={styles.container}>
        <Home />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    marginTop: Constants.statusBarHeight,
  },
});
