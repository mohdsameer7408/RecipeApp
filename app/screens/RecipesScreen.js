import React from "react";
import { useSelector } from "react-redux";

import RecipeList from "../components/RecipeList";
import { selectFilteredRecipes } from "../features/recipeSlice";

// {} => categoryIds.some => categoryId === c1

const RecipesScreen = ({ navigation, route }) => {
  const filteredRecipes = useSelector(selectFilteredRecipes);

  const recipes = filteredRecipes.filter((recipe) =>
    recipe.categoryIds.some((categoryId) => categoryId === route.params.id)
  );

  return <RecipeList recipes={recipes} navigation={navigation} />;
};

export default RecipesScreen;
