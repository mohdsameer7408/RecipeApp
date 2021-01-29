import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";

import CategoriesScreen from "../screens/CategoriesScreen";
import RecipesScreen from "../screens/RecipesScreen";
import RecipeScreen from "../screens/RecipeScreen";
import Colors from "../constants/Colors";
import RecipeHeaderButton from "../components/RecipeHeaderButton";
import {
  addToFavoritesAsync,
  removeFromFavoritesAsync,
  selectFavouriteRecipes,
} from "../features/recipeSlice";

const Stack = createStackNavigator();

const RecipeStack = ({ navigation }) => {
  const favoriteRecipes = useSelector(selectFavouriteRecipes);
  const dispatch = useDispatch();

  return (
    <Stack.Navigator
      initialRouteName="CategoriesScreen"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primaryColor },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          headerTitle: "Categories",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={RecipeHeaderButton}>
              <Item
                title="Menu"
                iconName="md-menu"
                onPress={navigation.openDrawer}
              />
            </HeaderButtons>
          ),
        }}
      />
      <Stack.Screen
        name="RecipesScreen"
        component={RecipesScreen}
        options={({ route }) => ({ headerTitle: route.params.title })}
      />
      <Stack.Screen
        name="RecipeScreen"
        component={RecipeScreen}
        options={({ route }) => ({
          headerTitle: route.params.title,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={RecipeHeaderButton}>
              {favoriteRecipes.indexOf(route.params.id) >= 0 ? (
                <Item
                  title="Star"
                  iconName="md-star"
                  onPress={() =>
                    dispatch(removeFromFavoritesAsync(route.params.id))
                  }
                />
              ) : (
                <Item
                  title="Star"
                  iconName="md-star-outline"
                  onPress={() => dispatch(addToFavoritesAsync(route.params.id))}
                />
              )}
            </HeaderButtons>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default RecipeStack;
