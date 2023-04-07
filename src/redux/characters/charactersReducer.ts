/**
 * @fileoverview Characters reducer file with typescript support
 * @typedef {import("./charactersTypes").IData} IData
 * @typedef {import("./charactersTypes").IPage} IPage
 * @typedef {import("./charactersTypes").IFavorite} IFavorite
 * @typedef {Object} GenderCount
 * @property {number} female - The count of female characters in the favorite list
 * @property {number} male - The count of male characters in the favorite list
 * @property {number} others - The count of characters with other gender in the favorite list
 * @typedef {Object} CharactersState
 * @property {?IData} charactersData - The data of characters
 * @property {IPage} page - The pagination info for characters list
 * @property {IFavorite[]} favorites - The favorite characters list
 * @property {GenderCount} genderCount - The gender count in favorite characters list
 * @property {?string} error - The error message when API requests fail
 * @property {boolean} isLoading - The loading state of characters
 * @typedef {Object} Action
 * @property {string} type - The type of action
 * @property {?any} payload - The payload of action
 */
import {
  GET_CHARACTERS,
  SET_CHARACTERS,
  SET_PAGE,
  CHANGE_PAGE,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  CLEAR_FAVORITES,
  SET_ERROR,
  SKIP_ERROR,
} from "../types";

/** The initial gender count for favorite characters list */
const initialGenderCount = {
  female: 0,
  male: 0,
  others: 0,
};
/** The initial state of characters reducer */
const initialState = {
  charactersData: null,
  page: { current: 1, total: 1 },
  favorites: [],
  genderCount: initialGenderCount,
  error: null,
  isLoading: false,
};

export const charactersReducer = (state = initialState, { type, payload }) => {
  const newCount = { ...state.genderCount };
  switch (type) {
    case GET_CHARACTERS:
      return { ...state, isLoading: true };
    case SET_CHARACTERS:
      return { ...state, error: null, charactersData: payload, isLoading: false };
    case SET_PAGE:
      return { ...state, page: payload };
    case CHANGE_PAGE:
      return {
        ...state,
        page: { ...state.page, current: payload },
      };
    case ADD_FAVORITE:
      if (payload.gender === "female") {
        newCount.female += 1;
      } else if (payload.gender === "male") {
        newCount.male += 1;
      } else {
        newCount.others += 1;
      }
      return {
        ...state,
        favorites: [...state.favorites, payload],
        genderCount: { ...newCount },
        isLoading: false,
      };
    case REMOVE_FAVORITE:
      if (payload.gender === "female") {
        newCount.female -= 1;
      } else if (payload.gender === "male") {
        newCount.male -= 1;
      } else {
        newCount.others -= 1;
      }
      return {
        ...state,
        favorites: state.favorites.filter((el) => el.name !== payload.name),
        genderCount: { ...newCount },
        isLoading: false,
      };
    case CLEAR_FAVORITES:
      return { ...state, favorites: [], genderCount: initialGenderCount };
    case SET_ERROR:
      return { ...state, error: payload, isLoading: false };
    case SKIP_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};
