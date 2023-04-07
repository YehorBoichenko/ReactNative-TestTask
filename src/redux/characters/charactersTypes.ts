import { GET_CHARACTERS, SET_ERROR } from "../types";

/**
 * The shape of the data returned from the API.
 */
export interface IData {
  results: any[];
}

/**
 * An interface representing a string.
 */
export interface IString {
  name: string;
}

/**
 * An interface representing a character.
 */
export interface ICharacter {
  name: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  species: string[];
}

/**
 * An interface representing the current and total page number.
 */
export interface IPage {
  current: number;
  total: number;
}

/**
 * An interface representing a favorite character.
 */
export interface IFavorite {
  name: string;
  gender: string;
}

/**
 * An interface representing the number of characters by gender.
 */
export interface IGenderCount {
  female: number;
  male: number;
  others: number;
}

/**
 * The shape of the character-related data stored in the state.
 */
export interface IStateCharacter {
  isLoading: boolean;
  charactersData: IData;
  page: IPage;
  favorites: IFavorite[];
  genderCount: IGenderCount;
  error: string | null;
}

/**
 * The shape of the entire state of the app.
 */
export interface IState {
  characters: IStateCharacter;
}

/**
 * The shape of the action that gets characters.
 */
export interface IGetCharacters {
  type: typeof GET_CHARACTERS;
  payload: IData;
}

/**
 * The shape of the action that sets an error message.
 */
export interface IError {
  type: typeof SET_ERROR;
  error: string;
}
