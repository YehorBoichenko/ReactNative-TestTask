import { StyleSheet } from "react-native";
export const s = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
 fontFamily: "Roboto",
    backgroundColor: "white",

  },
inputContainer: {
  width: "100%",
},
  input: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    height: 50,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
table: {},
row: {
  height: 50,
  flexDirection: "row",
  borderWidth: 1,
  borderColor: "gray",
},
icon: {
  width: "10%",
  alignItems: "center",
  justifyContent: "center",
},
title: {
  flexDirection: "row",
  flexGrow: 1,
},
ceil: {
  alignItems: "flex-start",
  justifyContent: "center",
  padding: 8,
},
headCeil: {
  borderLeftWidth: 1,
  borderLeftColor: "gray",
  backgroundColor: "#bad7ff",
},
name: {
  width: "35%",
  flexShrink: 1,
},
birthYear: {
  width: "20%",
  paddingHorizontal: 4,
},
gender: {
  width: "15%",
  paddingHorizontal: 4,
},
homeWorld: {
  width: "30%",
  paddingHorizontal: 4,
},
text: {
  fontSize: 11.5,
},
inputText: {
  marginLeft: 10,
  fontSize: 18,
  color: "black",
  flex: 1,
},
  statsBlock: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  statsBlockCell: {
    width: "50%",
  },
  statsBlockCellText: {
    textAlign: "center",
    fontSize: 18,
    paddingVertical: 10,
  },
  listHeader: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    backgroundColor: "#bad7ff",
  },
  list: {
    backgroundColor: "white",
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    borderBottomWidth: 1,
  },
  listItemText: {
    fontSize: 15,
  },
  listItemYear: {
    width: 65,
    textAlign: "center",
    marginRight: 30,
  },
  listItemGender: {
    width: 55,
    marginRight: 10,
    textAlign: "center",
  },
  listItemFavorite: {
    width: 22,
    height: 20,
    fill: "red",
  },
  listItemNotFavorite: {
    width: 22,
    height: 20,
    stroke: "red",
    strokeWidth: 2,
  },

  listPaginationBlock: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  listPaginationButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: "#0004ff",
  },
  listPaginationButtonText: {
    fontSize: 19,
    color: "white",
  },
  listPaginationText: {
    fontSize: 16,
  },
  
 });
