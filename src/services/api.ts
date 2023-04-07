/**

A module that provides functions to retrieve character data from the Star Wars API.
@remarks
This module uses Axios for HTTP requests and provides two functions: getCharactersApi() and getCharactersApiByPage(page).
@packageDocumentation
*/
import axios from "axios";
import { IData, IString } from "../redux/characters/charactersTypes";
const BASE_URL = "https://swapi.dev/api";
/**

Retrieve the name of a character's homeworld from its API endpoint.
@param homeworld - The URL of the homeworld API endpoint.
@returns The name of the homeworld as a string.
*/
const getHomeworld = async (homeworld: string) => {
  try {
    const { data } = await axios.get<IString>(`${homeworld}`);
    return data.name;
  } catch (error) {
    console.log("error: ", error.message);
  }
};
/**

Retrieve the name of a character's species from its API endpoint.
@param species - The URL of the species API endpoint.
@returns The name of the species as a string.
*/
const getSpecies = async (species: string) => {
  try {
    const { data } = await axios.get<IString>(`${species}`);
    return data.name;
  } catch (error) {
    console.log("error: ", error.message);
  }
};

/**

Retrieve all characters from the Star Wars API and resolve homeworld and species data for each character.
@returns An object with count, next, previous, and results properties, where results is an array of character objects with homeworld and species names.
*/
export const getCharactersApi = () => async () => {
  try {
    const { data } = await axios.get<IData>(`${BASE_URL}/people`);
      const characters = await Promise.all(
      data.results.map(async (el) => {
        let homeworld = !el.homeworld ? null : await getHomeworld(el.homeworld);
        let species = !el.species.length ? null : await getSpecies(el.species);
        const character = await { ...el, homeworld, species };
        return character;
      })
    );
    return { ...data, results: characters };
  } catch (error) {
    console.log("error: ", error.message);
  }
};
/**

Retrieve a specific page of characters from the Star Wars API and resolve homeworld and species data for each character.
@param page - The page number of characters to retrieve.
@returns An object with count, next, previous, and results properties, where results is an array of character objects with homeworld and species names.
*/
export const getCharactersApiByPage = (page: number) => async () => {
  try {
    const { data } = await axios.get<IData>(`${BASE_URL}/people/?page=${page}`);
    const characters = await Promise.all(
      data.results.map(async (el) => {
        let homeworld = !el.homeworld ? null : await getHomeworld(el.homeworld);
        let species = !el.species.length ? null : await getSpecies(el.species);
        const character = await { ...el, homeworld, species };
        return character;
      })
    );
    return { ...data, results: characters };
  } catch (error) {
    console.log("error: ", error.message);
  }
};