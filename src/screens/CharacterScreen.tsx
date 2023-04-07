import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {
  addFavorite,
  removeFavorite,
} from "../redux/characters/charactersActions";
import { Loader } from "../components/Loader";
import { styles } from "../Styles/CharacterScreen.styles";

const CharacterInfo = ({ route }) => {
  const data = route.params;
  const {
    name,
    birth_year,
    gender,
    skin_color,
    eye_color,
    hair_color,
    height,
    mass,
  } = data;
  const favList = useAppSelector((state) => state.characters.favorites);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkIfFavorite = async () => {
      if (favList.some((el) => el.name === name)) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
      // Add a small delay to show the loader for a short time
      setTimeout(() => setIsLoading(false), 500);
    };

    checkIfFavorite();
  }, [favList, name]);

  const handleAddFavorite = async () => {
    setIsLoading(true);
    await dispatch(addFavorite({ name, gender }));
    setIsFavorite(true);
    setIsLoading(false);
  };

  const handleRemoveFavorite = async () => {
    setIsLoading(true);
    await dispatch(removeFavorite({ name, gender }));
    setIsFavorite(false);
    setIsLoading(false);
  };
  return (
    <View>
      {isLoading && <Loader />} 
      <View style={{ ...styles.listHead }}>
        <Text style={styles.data}>{name}</Text>
        {isFavorite ? (
          <TouchableOpacity
            style={styles.icon}
            onPress={handleRemoveFavorite}
          >
            <AntDesign name="heart" size={24} color="red" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.icon}
            onPress={handleAddFavorite}
          >
            <AntDesign name="hearto" size={24} color="red" />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.listItem}>
        <Text style={styles.category}>Gender</Text>
        <Text style={styles.data}>{gender || "Unknown"}</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.category}>Birth Year</Text>
        <Text style={styles.data}>{birth_year || "Unknown"}</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.category}>Height</Text>
        <Text style={styles.data}>{height || "Unknown"}</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.category}>Mass</Text>
        <Text style={styles.data}>{mass || "Unknown"}</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.category}>Skin Color</Text>
        <Text style={styles.data}>{skin_color || "Unknown"}</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.category}>Hair Color</Text>
        <Text style={styles.data}>{hair_color || "Unknown"}</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.category}>Eye Color</Text>
        <Text style={styles.data}>{eye_color || "Unknown"}</Text>
      </View>
    </View>
  );
};

export default CharacterInfo;
