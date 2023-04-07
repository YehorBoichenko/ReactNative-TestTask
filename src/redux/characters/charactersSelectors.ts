/**
 * @fileoverview Selector functions for characters state management
 * @typedef {import("./charactersTypes").IState} IState
 * @typedef {import("./charactersTypes").IData} IData
 * @typedef {import("./charactersTypes").IPage} IPage
 * @typedef {import("./charactersTypes").IFavorite} IFavorite
 * @typedef {Object} GenderCount
 * @property {number} female - The count of female characters in the favorite list
 * @property {number} male - The count of male characters in the favorite list
 * @property {number} others - The count of characters with other gender in the favorite list
 */

import { IData, IFavorite, IGenderCount, IPage, IState } from "./charactersTypes";

/**
 * Selector function to get characters data
 * @param {IState} state - The current state of characters
 * @returns {?IData} - The data of characters
 */
export const getCharacters = (state: IState): IData | null => state.characters.charactersData;

/**
 * Selector function to get pagination info for characters list
 * @param {IState} state - The current state of characters
 * @returns {IPage} - The pagination info for characters list
 */
export const getPage = (state: IState): IPage => state.characters.page;

/**
 * Selector function to get favorite characters list
 * @param {IState} state - The current state of characters
 * @returns {IFavorite[]} - The favorite characters list
 */
export const getFavorites = (state: IState): IFavorite[] => state.characters.favorites;

/**
 * Selector function to get gender count in favorite characters list
 * @param {IState} state - The current state of characters
 * @returns {IGenderCount} - The gender count in favorite characters list
 */
export const getGenderCount = (state: IState): IGenderCount => state.characters.genderCount;

/**
 * Selector function to get loading state of characters
 * @param {IState} state - The current state of characters
 * @returns {boolean} - The loading state of characters
 */
export const getIsLoading = (state: IState): boolean => state.characters.isLoading;
