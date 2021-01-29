import React from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";

import Card from "../components/Card";
import Colors from "../constants/Colors";
import { RECIPES } from "../data/dummyData";

const RecipeScreen = ({ navigation, route }) => {
  const recipe = RECIPES.find((recipe) => recipe.id === route.params.id);

  return (
    <View style={styles.recipeScreen}>
      <ScrollView>
        <Card style={styles.imageContainer}>
          <Image
            source={{ uri: recipe.imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.recipeTitle}>{recipe.title}</Text>
        </Card>
        <Text style={[styles.recipeTitle, styles.contentTitle]}>
          Ingredients
        </Text>
        <Card style={styles.cardContainer}>
          {recipe.ingredients.map((ingredient) => (
            <Text key={ingredient} style={styles.ingredientText}>
              {ingredient}
            </Text>
          ))}
        </Card>
        <Text style={[styles.recipeTitle, styles.contentTitle]}>Steps</Text>
        <Card style={styles.cardContainer}>
          {recipe.steps.map((step, index) => (
            <Text key={step} style={styles.ingredientText}>
              {`Step ${index + 1} - ${step}`}
            </Text>
          ))}
        </Card>
        <Text
          style={[
            styles.recipeTitle,
            styles.contentTitle,
            { marginBottom: 20 },
          ]}
        >
          Duration: {recipe.duration} minutes
        </Text>
      </ScrollView>
    </View>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({
  recipeScreen: {
    flex: 1,
    backgroundColor: Colors.secondaryColor,
  },
  imageContainer: {
    width: "100%",
    height: 340,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "80%",
  },
  recipeTitle: {
    marginTop: 12,
    color: Colors.textColor,
    fontSize: 23,
    fontWeight: "bold",
  },
  contentTitle: {
    marginLeft: 5,
  },
  cardContainer: {
    backgroundColor: Colors.cardColor,
    margin: 12,
    padding: 12,
    borderRadius: 8,
  },
  ingredientText: {
    fontSize: 16,
  },
});
