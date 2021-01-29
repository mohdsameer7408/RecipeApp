import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-community/async-storage";

import { RECIPES } from "../data/dummyData";

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    allRecipes: RECIPES,
    filteredRecipes: RECIPES,
    favouriteRecipes: [],
  },
  reducers: {
    setFavourites: (state, action) => {
      state.favouriteRecipes = action.payload;
    },
    addToFavorites: (state, action) => {
      state.favouriteRecipes = [...state.favouriteRecipes, action.payload];
    },
    removeFromFavorites: (state, action) => {
      state.favouriteRecipes = state.favouriteRecipes.filter(
        (recipe) => recipe !== action.payload
      );
    },
    updateFilters: (state, action) => {
      const {
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree,
      } = action.payload;

      state.filteredRecipes = RECIPES.filter((recipe) => {
        if (isGlutenFree && !recipe.isGlutenFree) {
          return false;
        }
        if (isVegan && !recipe.isVegan) {
          return false;
        }
        if (isVegetarian && !recipe.isVegetarian) {
          return false;
        }
        if (isLactoseFree && !recipe.isLactoseFree) {
          return false;
        }
        return true;
      });
    },
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  setFavourites,
  updateFilters,
} = recipeSlice.actions;

export const setFavoritesAsync = () => async (dispatch) => {
  try {
    const favourites = await AsyncStorage.getItem("favourites");
    dispatch(setFavourites(favourites ? JSON.parse(favourites) : []));
  } catch (error) {
    console.log(error);
  }
};

export const addToFavoritesAsync = (favouriteId) => async (
  dispatch,
  getState
) => {
  const favourites = getState().recipe.favouriteRecipes;
  try {
    await AsyncStorage.setItem(
      "favourites",
      JSON.stringify([...favourites, favouriteId])
    );
    dispatch(addToFavorites(favouriteId));
  } catch (error) {
    console.log(error);
  }
};

export const removeFromFavoritesAsync = (favouriteId) => async (
  dispatch,
  getState
) => {
  const favourites = getState().recipe.favouriteRecipes;
  try {
    const newFavourites = favourites.filter((recipe) => recipe !== favouriteId);
    await AsyncStorage.setItem("favourites", JSON.stringify(newFavourites));
    dispatch(removeFromFavorites(favouriteId));
  } catch (error) {
    console.log(error);
  }
};

export const selectAllRecipes = (state) => state.recipe.allRecipes;
export const selectFilteredRecipes = (state) => state.recipe.filteredRecipes;
export const selectFavouriteRecipes = (state) => state.recipe.favouriteRecipes;

export default recipeSlice.reducer;
