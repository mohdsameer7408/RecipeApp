import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import RecipeStack from "./RecipeStack";
import FavouriteStack from "./FavouriteStack";
import Colors from "../constants/Colors";

const Tab = createBottomTabNavigator();

const RecipeTab = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="RecipeStack"
      tabBarOptions={{
        tabStyle: { backgroundColor: Colors.textColor },
        inactiveTintColor: "#f8f8f8",
        activeTintColor: Colors.activeIconColor,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "RecipeStack") {
            iconName = "ios-grid";
          } else if (route.name === "FavouriteStack") {
            iconName = "md-star";
          }

          return <Ionicons name={iconName} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen
        name="RecipeStack"
        component={RecipeStack}
        options={{ tabBarLabel: "Categories" }}
      />
      <Tab.Screen
        name="FavouriteStack"
        component={FavouriteStack}
        options={{ tabBarLabel: "Favorites" }}
      />
    </Tab.Navigator>
  );
};

export default RecipeTab;
