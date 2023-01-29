import {
  TextInput,
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
  View,
  StyleSheet,
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
  placeholder?: string;
}

const SearchBox: React.FC<ISearchBox> = ({
  onChangeText,
  onEndEditing,
  placeholder = "Kelime Arama...",
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        returnKeyType="search"
        onEndEditing={onEndEditing}
        onChangeText={onChangeText}
      />
      <Feather name="search" size={18} style={styles.icon} color="grey" />
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
  icon: {
    position: "absolute",
    right: 16,
  },
});
