import React, { useState } from "react";
import { FlatList } from "react-native";

import CategoryCard from "../components/CategoryCard";
import { CATEGORIES } from "../data/dummyData";

const CategoriesScreen = ({ navigation }) => {
  const [categories, setCategories] = useState(CATEGORIES);

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => (
        <CategoryCard
          title={item.title}
          color={item.color}
          onCardPress={() => navigation.navigate("RecipesScreen", item)}
        />
      )}
    />
  );
};

export default CategoriesScreen;
