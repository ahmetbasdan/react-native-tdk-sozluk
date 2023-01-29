import { Dimensions, Image, StyleSheet } from "react-native";
import React from "react";
import { LOGO } from "../constants/images";

const { width } = Dimensions.get("window");

const LOGO_SIZE = width * 0.8;

const NotFound = () => {
  return <Image source={LOGO} style={styles.container} />;
};

export default NotFound;

const styles = StyleSheet.create({
  container: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    opacity: 0.1,
    alignSelf: "center",
  },
});
