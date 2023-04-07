import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listHead: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderBottomWidth: 1,
    alignItems: "center"
  },
 listItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
  },
  category: {
    fontSize: 19,
    textAlign: "center",
    width: "50%",
    borderRightWidth: 1,
    borderRightColor: "black",
  },
  data: {
    fontSize: 19,
    width: "50%",
    textAlign: "center",
  },
  favoriteButton: {
 marginLeft: "auto",
    padding: 20,
  },

  listItemFavorite: {
    height: 25,
    width: 25,
    fill: "red",
    borderRadius: 50,
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  listItemNotFavorite: {
    height: 25,
    width: 27,
    stroke: "red",
    strokeWidth: 2,
    borderRadius: 50,
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
    icon: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10, 
  },
});

