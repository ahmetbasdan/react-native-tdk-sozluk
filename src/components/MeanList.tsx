import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Space from "./Space";

interface IMeanList {
  data?: string[];
}
const MeanList: React.FC<IMeanList> = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <>
      {data.map((item, index) => (
        <View key={index}>
          <Text key={index} style={styles.text}>
            {index + 1}. {item}
          </Text>
          <Space s12 />
        </View>
      ))}
    </>
  );
};

export default MeanList;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
});
