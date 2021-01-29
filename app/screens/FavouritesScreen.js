import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import RecipeList from "../components/RecipeList";
import {
  selectAllRecipes,
  selectFavouriteRecipes,
  setFavoritesAsync,
} from "../features/recipeSlice";

const FavouritesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const allRecipes = useSelector(selectAllRecipes);
  const favouriteRecipes = useSelector(selectFavouriteRecipes);
  const recipes = allRecipes.filter(
    (recipe) => favouriteRecipes.indexOf(recipe.id) >= 0
  );

  useEffect(() => {
    dispatch(setFavoritesAsync());
  }, []);

  return recipes.length ? (
    <RecipeList recipes={recipes} navigation={navigation} />
  ) : (
    <View style={styles.fallbackContainer}>
      <Text>No favourites yet! add some...</Text>
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
