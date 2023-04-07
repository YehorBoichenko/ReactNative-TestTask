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
  SET_LOADING,
} from "../types";
import { IData, IPage, IFavorite } from "./charactersTypes";

/**
 * Action creator for fetching characters from the API
 * @param page - The page number to fetch
 */
export function getCharacters(page: number) {
  return {
    type: GET_CHARACTERS,
    payload: page,
  } as const;
}

/**
 * Action creator for setting the fetched characters in the state
 * @param charactersData - The data for the fetched characters
 */
export function setCharacters(charactersData: IData) {
  return {
    type: SET_CHARACTERS,
    payload: charactersData,
  } as const;
}

/**
 * Action creator for setting the current page in the state
 * @param page - The page object to set
 */
export function setPage(page: IPage) {
  return {
    type: SET_PAGE,
    payload: page,
  } as const;
}

/**
 * Action creator for changing the current page in the state
 * @param page - The page number to change to
 */
export function changePage(page: number) {
  return {
    type: CHANGE_PAGE,
    payload: page,
  } as const;
}

/**
 * Action creator for adding a favorite character to the state
 * @param favorite - The favorite character to add
 */
export function addFavorite(favorite: IFavorite) {
  return {
    type: ADD_FAVORITE,
    payload: favorite,
  } as const;
}

/**
 * Action creator for removing a favorite character from the state
 * @param favorite - The favorite character to remove
 */
export function removeFavorite(favorite: IFavorite) {
  return {
    type: REMOVE_FAVORITE,
    payload: favorite,
  } as const;
}

/**
 * Action creator for clearing all favorite characters from the state
 */
export function clearFavorites() {
  return {
    type: CLEAR_FAVORITES,
  } as const;
}

/**
 * Action creator for setting an error message in the state
 * @param error - The error message to set
 */
export function setError(error: string) {
  return {
    type: SET_ERROR,
    payload: error,
  } as const;
}

/**
 * Action creator for skipping the current error message in the state
 */
export function skipError() {
  return {
    type: SKIP_ERROR,
  } as const;
}

/**
 * Action creator for setting the loading state in the state
 * @param isLoading - The loading state to set
 */
export function setLoading(isLoading: boolean) {
  return {
    type: SET_LOADING,
    payload: isLoading,
  } as const;
}

// Type for all possible actions of the characters reducer
export type CharactersActions = typeof getCharacters | typeof setCharacters;
