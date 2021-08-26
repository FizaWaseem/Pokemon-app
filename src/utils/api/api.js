import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/";
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
const POKEMON = "pokemon/";
export const SearchData = async (data) => {
  try {
    let result = await axiosInstance.get(`${POKEMON}${data}`);
    return result;
  } catch (error) {
    return error.response.data;
  }
};
export const PokemonDetail = async (id) => {
  try {
    let result = await axiosInstance.get(`${POKEMON}${id}`);
    return result;
  } catch (error) {
    return error.response.data;
  }
};
