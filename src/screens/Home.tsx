import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  View,
  StyleSheet,
} from "react-native";
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
import { PRİMARY_COLOR } from "../helpers/colorHelpers";

const { width } = Dimensions.get("window");

const CONTENT_WIDTH = width * 0.9;

const Home = () => {
  const [word, setWord] = useState("");
  const [response, setResponse] = useState<MeanType>({
    madde: "",
    anlamlarListe: [],
  });
  const [loading, setLoading] = useState(false);

  const fetchMeans = async (word: string = "") => {
    try {
      setLoading(true);
      const response = await axios.get<MeanType[]>(
        `https://sozluk.gov.tr/gts?ara=${word}`
      );
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("");
        }, 1000);
      });

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
    } finally {
      setLoading(false);
    }
  };

  const onSearch = () => fetchMeans(word);
  
  return (
    <>
      <Header />
      <Space s8 />
      <SearchBox
        onEndEditing={onSearch}
        searchOnPress={onSearch}
        onChangeText={(e) => setWord(e)}
        containerStyle={styles.searchBox}
      />
      <Space s3 />
      <ScrollView>
        <View style={styles.content}>
          <Space s8 />
          {loading && <ActivityIndicator color={PRİMARY_COLOR} size="large" />}
          {!loading && (
            <>
              {response.anlamlarListe.length > 0 ? (
                <MeanList
                  data={response.anlamlarListe.map((item) => item.anlam)}
                />
              ) : (
                <>
                  <Space s12 />
                  <NotFound />
                </>
              )}
            </>
          )}
        </View>
        {!loading && (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <SingLanguageList word={response.madde} />
          </ScrollView>
        )}
        <Space />
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  searchBox: {
    width: CONTENT_WIDTH,
    alignSelf: "center",
  },
  content: {
    width: CONTENT_WIDTH,
    alignSelf: "center",
  },
});
