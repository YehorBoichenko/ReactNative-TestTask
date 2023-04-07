import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Platform,
} from "react-native";
import * as Font from 'expo-font';
import { setPage, changePage } from "../redux/characters/charactersActions";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { AntDesign } from "@expo/vector-icons";
import Header from "../components/Header";
import Characters from "../components/Characters";
import { Loader } from "../components/Loader";
import { ICharacter } from "../redux/characters/charactersTypes";
import { s } from "../Styles/Homescreen.styles";

const HomeScreen = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [sortByName, setSortByName] = useState(false);
  const [sortByBirthYear, setSortByBirthYear] = useState(false);
  const [sortByHomeWorld, setSortByHomeWorld] = useState(false);
  const data = useAppSelector((state) => state?.characters?.charactersData);
  const page = useAppSelector((state) => state?.characters?.page);
  const isLoading = useAppSelector((state) => state?.characters?.isLoading);
  const dispatch = useAppDispatch();

  const onNextPage = () => {
    setIsBtnDisabled(true);
    dispatch(changePage(page.current + 1));
  };

  const onPrevPage = () => {
    setIsBtnDisabled(true);
    dispatch(changePage(page.current - 1));
  };

  useEffect(() => {
    dispatch(setPage(page?.current || 1));
  }, []);

  useEffect(() => {
    if (data?.length) {
      const filtered = data.filter((character: ICharacter) =>
        character.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
      setIsBtnDisabled(false);
    }
  }, [query, data]);
  
const loadFonts = async () => {
  await Font.loadAsync({
    'Roboto': require('../../assets/Roboto-Regular.ttf'),
  });
  };
  
useEffect(() => {
  loadFonts();
}, []);

  const onSortByName = () => {
    setSortByName(!sortByName);
    const sorted = data.sort((a: { name: string; }, b: { name: string; }) => sortByName ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    setFilteredData([...sorted]);
  };

  const onSortByBirthYear = () => {
    setSortByBirthYear(!sortByBirthYear);
    const sorted = data.sort((a: { birth_year: string; }, b: { birth_year: string; }) => sortByName ? a.birth_year.localeCompare(b.birth_year) : b.birth_year.localeCompare(a.birth_year));
    setFilteredData([...sorted]);
  };

  const onSortByHomeWorld = () => {
    setSortByHomeWorld(!sortByHomeWorld);
    const sorted = data.sort((a: { homeworld: string; }, b: { homeworld: string; }) => sortByName ? a.homeworld.localeCompare(b.homeworld) : b.homeworld.localeCompare(a.homeworld));
    setFilteredData([...sorted]);
  };

  if (!data?.length) {
    return <Loader />;
  } else {
    return (
      <SafeAreaView
        style={{
          ...s.container,
          paddingTop: Platform.OS === "ios" ? 40 : 30,
        }}
      >
        {(isLoading || isBtnDisabled) && <Loader />}
        <Header />
        <View style={s.inputContainer}>
          <View style={s.input}>
            <AntDesign name="search1" size={24} color="black" />
            <TextInput
              style={s.inputText}
              placeholder="Search"
              placeholderTextColor={"grey"}
              value={query}
              onChangeText={(value) => setQuery(value)}
            />
    </View>
        </View>
        
        <ScrollView style={s.table}>

          <View style={s.row}>
            <View style={[s.icon, s.headCeil]}>
              <AntDesign name="heart" size={16} color="black" />
            </View>
            <View style={s.title}>
              <TouchableOpacity
                 onPress={onSortByName}
                style={[s.ceil, s.headCeil, s.name]}
                >
                <Text style={s.text}>Name</Text>
              </TouchableOpacity>
              <TouchableOpacity   onPress={onSortByBirthYear} style={[s.ceil, s.headCeil]}>
                <Text style={s.text}>Birth Year</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[s.ceil, s.headCeil]}>
                <Text style={s.text}>Gender</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={onSortByHomeWorld} style={[s.ceil, s.headCeil]}>
                <Text style={s.text}>Home World</Text>
              </TouchableOpacity>
            </View>
          </View>
          {!filteredData.length
            ? null
            : filteredData.map((el: ICharacter) => {
                return (
                  <Characters
                    key={el.name}
                    data={el}
                    onPress={() => navigation.navigate("CharacterInfo", el)}
                  />
                );
              })}
        </ScrollView>
          <View style={s.listPaginationBlock}>
            <TouchableOpacity
              onPress={onPrevPage}
              disabled={page.current - 1 <= 0}
              style={{
                ...s.listPaginationButton,
                backgroundColor: page.current - 1 <= 0 ? "#d8d8d8" : "#0004ff",
              }}
            >
              <Text style={s.listPaginationButtonText}>Prev</Text>
            </TouchableOpacity>
            <Text style={s.listPaginationText}>
              {`Page ${page.current} of ${page.total}`}
            </Text>
            <TouchableOpacity
              style={{
                ...s.listPaginationButton,
                backgroundColor:  page.current === page.total ? "#d8d8d8" : "#0004ff",
              }}
              onPress={onNextPage}
              disabled={page.current === page.total}
            >
              <Text style={s.listPaginationButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
      </SafeAreaView>
    );
  }
};

export default HomeScreen;


