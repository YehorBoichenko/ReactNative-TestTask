import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { clearFavorites } from "../redux/characters/charactersActions";
import { styles } from "../Styles/Header.styles";

/**
 * Header component to show the number of fans for each gender and a button to clear favorites.
 */
const Header = (): JSX.Element => {
  const count = useAppSelector((state) => state.characters.genderCount);
  const dispatch = useAppDispatch();

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Fans</Text>
        <TouchableOpacity
          style={styles.clearBtn}
          onPress={() => dispatch(clearFavorites())}
        >
          <Text style={styles.clearBtnText}>Clear fans</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.genderBoxes}>
        <View style={[styles.genderBox, styles.elevation]}>
          <Text style={styles.genderNumber}>{count.female}</Text>
          <Text style={styles.genderName}>Female </Text>
        </View>
            <View style={[styles.genderBox, styles.elevation]}>
          <Text style={styles.genderNumber}>{count.male}</Text>
          <Text style={styles.genderName}>Male </Text>
        </View>
        <View style={[styles.genderBox, styles.elevation]}>
          <Text style={styles.genderNumber}>{count.others}</Text>
          <Text style={styles.genderName}>Others</Text>
        </View>
      </View>
    </>
  );
};

export default Header;
