import {
  TextInput,
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
  View,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  ViewStyle,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { XS_SHADOW } from "../helpers/shadowHelpers";

const SEARCHBOX_HEIGHT = 50;

interface ISearchBox {
  onEndEditing?:
    | ((e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void)
    | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  searchOnPress?: ((event: GestureResponderEvent) => void) | undefined;
  containerStyle?: ViewStyle;
  placeholder?: string;
}

const SearchBox: React.FC<ISearchBox> = ({
  onChangeText,
  onEndEditing,
  searchOnPress,
  containerStyle,
  placeholder = "Kelime Arama...",
}) => {
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        returnKeyType="search"
        onSubmitEditing={onEndEditing}
        onChangeText={onChangeText}
      />

      <TouchableOpacity
        activeOpacity={1}
        onPress={searchOnPress}
        style={styles.iconContainer}
      >
        <Feather name="search" size={18} color="grey" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    height: SEARCHBOX_HEIGHT,
    backgroundColor: "#fff",
    borderRadius: 16,
    width: "100%",
    justifyContent: "center",
    ...XS_SHADOW,
  },
  input: {
    fontSize: 17,
    paddingHorizontal: 12,
  },
  iconContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
