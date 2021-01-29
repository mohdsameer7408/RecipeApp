import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "react-native";

import RecipeTab from "./RecipeTab";
import FilterStack from "./FilterStack";
import DrawerContent from "../components/DrawerContent";
import Colors from "../constants/Colors";

const Drawer = createDrawerNavigator();

const RecipeNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar
        translucent
        animated
        backgroundColor="rgba(0, 0, 0, 0.15)"
        barStyle="light-content"
      />
      <Drawer.Navigator
        initialRouteName="RecipeTab"
        drawerContent={(props) => <DrawerContent {...props} />}
        drawerContentOptions={{
          activeBackgroundColor: Colors.activeIconColor,
          activeTintColor: Colors.textColor,
        }}
      >
        <Drawer.Screen
          name="RecipeTab"
          component={RecipeTab}
          options={{ drawerLabel: "Categories" }}
        />
        <Drawer.Screen
          name="FilterStack"
          component={FilterStack}
          options={{ drawerLabel: "Filters" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RecipeNavigator;
