import React from "react";
import { FlatList } from "react-native";

import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, navigation }) => {
  return (
    <FlatList
      data={recipes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <RecipeCard
          title={item.title}
          imageUrl={item.imageUrl}
          onRecipePress={() =>
            navigation.navigate("RecipeScreen", {
              id: item.id,
              title: item.title,
            })
          }
        />
      )}
    />
  );
};

export default RecipeList;
