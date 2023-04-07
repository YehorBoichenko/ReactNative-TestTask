import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {
  addFavorite,
  removeFavorite,
} from "../redux/characters/charactersActions";
import {s}  from "../Styles/Homescreen.styles";

const Characters = ({ data, onPress }) => {
  const favList = useAppSelector((state) => state?.characters?.favorites);
  const { name, birth_year, gender, homeworld, species } = data;
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (favList.some((el) => el.name === name)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  });

  return (
    <View style={s.row}>
      {isFavorite ? (
        <TouchableOpacity
          style={s.icon}
          onPress={() => dispatch(removeFavorite({ name, gender }))}
        >
          <AntDesign name="heart" size={16} color="red" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={s.icon}
          onPress={() => dispatch(addFavorite({ name, gender }))}
        >
          <AntDesign name="hearto" size={16} color="red" />
        </TouchableOpacity>
      )}
      <TouchableOpacity style={s.title} onPress={onPress}>
        <View style={[s.ceil, s.name]}>
          <Text style={s.text}>{name}</Text>
        </View>
        <View style={[s.ceil, s.birthYear]}>
          <Text style={s.text}>{birth_year || "unknown"}</Text>
        </View>
        <View style={[s.ceil,s.gender]}>
          <Text style={s.text}>{gender || "n/a"}</Text>
        </View>
        <View style={[s.ceil, s.homeWorld]}>
          <Text style={s.text}>{homeworld || ""}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Characters;
