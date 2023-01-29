import { Dimensions, ScrollView, View } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import {
  Header,
  MeanList,
  NotFound,
  SearchBox,
  SingLanguageList,
  Space,
} from "../components";

const { width } = Dimensions.get("window");

const Home = () => {
  const [word, setWord] = useState("");
  const [response, setResponse] = useState<MeanType>({
    madde: "",
    anlamlarListe: [],
  });

  const fetchMeans = async (word: string = "") => {
    try {
      const response = await axios.get<MeanType[]>(
        `https://sozluk.gov.tr/gts?ara=${word}`
      );
      if (Array.isArray(response.data)) {
        setResponse(response.data[0]);
      } else {
        setResponse({
          madde: "",
          anlamlarListe: [],
        });
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <View>
      <Header />
      <View style={{ width, paddingHorizontal: 12 }}>
        <Space s12 />
        <SearchBox
          onEndEditing={(e) => fetchMeans(word)}
          onChangeText={(e) => setWord(e)}
        />
        <Space s12 />
        {response.anlamlarListe.length > 0 ? (
          <MeanList data={response.anlamlarListe.map((item) => item.anlam)} />
        ) : (
          <>
            <Space s12 />
            <NotFound />
          </>
        )}
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <SingLanguageList word={response.madde} />
      </ScrollView>
    </View>
  );
};

export default Home;
