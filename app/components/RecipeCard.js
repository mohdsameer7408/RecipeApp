import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const RecipeCard = ({ imageUrl, title, onRecipePress }) => {
  return (
    <View style={styles.recipeCard}>
      <TouchableOpacity style={{ flex: 1 }} onPress={onRecipePress}>
        <ImageBackground
          style={styles.recipeCardContainer}
          source={{ uri: imageUrl }}
          resizeMode="cover"
        >
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  recipeCard: {
    flex: 1,
    height: 200,
    margin: 12,
    overflow: "hidden",
    borderRadius: 12,
  },
  recipeCardContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  textContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    alignItems: "center",
  },
  titleText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
