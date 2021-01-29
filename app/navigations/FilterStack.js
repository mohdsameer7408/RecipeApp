import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import RecipeHeaderButton from "../components/RecipeHeaderButton";
import FiltersScreen from "../screens/FiltersScreen";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const FilterStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="FiltersScreen"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primaryColor },
        headerTintColor: "#fff",
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
    >
      <Stack.Screen
        name="FiltersScreen"
        component={FiltersScreen}
        options={{ headerTitle: "Filters" }}
      />
    </Stack.Navigator>
  );
};

export default FilterStack;
