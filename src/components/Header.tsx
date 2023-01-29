import {
  Dimensions,
  Image,
  ImageStyle,
  View,
  ViewProps,
  ViewStyle,
  StyleSheet,
} from "react-native";
import React from "react";
import { LOGO } from "../constants/images";
import { PRİMARY_COLOR } from "../helpers/colorHelpers";

const { width } = Dimensions.get("window");

const HEADER_HEIGHT = 60;
const LOGO_SIZE = 45;

interface IHeader extends ViewProps {
  style?: ViewStyle;
  logoStyle?: ImageStyle;
}

const Header: React.FC<IHeader> = ({ style, logoStyle, ...rest }) => {
  return (
    <View
      {...rest}
      style={{
        ...styles.container,
        ...style,
      }}
    >
      <Image source={LOGO} style={{ ...styles.logo, ...logoStyle }} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    width: width,
    backgroundColor: PRİMARY_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: LOGO_SIZE,
    width: LOGO_SIZE,
  },
});
