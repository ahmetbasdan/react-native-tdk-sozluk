import { View, Image, StyleSheet } from "react-native";
import React from "react";
import Space from "./Space";

const WIDTH = 123;
const HEIGHT = 88;

interface ISingLanguageList {
  word?: string;
}

const SingLanguageList: React.FC<ISingLanguageList> = ({ word = "" }) => {
  if (!word) {
    return null;
  }
  const charArray = word.split("");
  return (
    <>
      {charArray.map((item, index) => (
        <View key={index}>
          <View style={styles.container}>
            <Image
              source={{
                uri: `https://sozluk.gov.tr/assets/img/isaret/${item.toLowerCase()}.gif`,
              }}
              style={styles.signExpression}
            />
          </View>
          <Space s6 />
        </View>
      ))}
    </>
  );
};

export default SingLanguageList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: WIDTH,
    height: HEIGHT,
    marginLeft: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  signExpression: {
    height: HEIGHT * 0.8,
    width: WIDTH * 0.8,
    alignSelf: "stretch",
    borderRadius: 12,
  },
});
