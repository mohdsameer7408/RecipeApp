import React, { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";
import Filter from "../components/Filter";

import RecipeHeaderButton from "../components/RecipeHeaderButton";
import { updateFilters } from "../features/recipeSlice";

const FiltersScreen = ({ navigation }) => {
  const [filters, setFilters] = useState({
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: false,
  });
  const dispatch = useDispatch();

  const filtersChangeHandler = (id) => {
    setFilters((prevFilters) => ({ ...prevFilters, [id]: !prevFilters[id] }));
  };

  const filtersSaveHandler = useCallback(() => {
    dispatch(updateFilters(filters));
    Alert.alert("Success", "Your filters were updated!", [
      { text: "ok", onPress: navigation.goBack },
    ]);
  }, [filters, dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={RecipeHeaderButton}>
          <Item title="Save" iconName="ios-save" onPress={filtersSaveHandler} />
        </HeaderButtons>
      ),
    });
  }, [navigation, filtersSaveHandler]);

  return (
    <View style={styles.filtersScreen}>
      <Text style={styles.filtersTitle}>All filters</Text>
      <Filter
        label="Gluten Free"
        state={filters.isGlutenFree}
        onChange={() => filtersChangeHandler("isGlutenFree")}
      />
      <Filter
        label="Vegan"
        state={filters.isVegan}
        onChange={() => filtersChangeHandler("isVegan")}
      />
      <Filter
        label="Vegetarian"
        state={filters.isVegetarian}
        onChange={() => filtersChangeHandler("isVegetarian")}
      />
      <Filter
        label="Lactose Free"
        state={filters.isLactoseFree}
        onChange={() => filtersChangeHandler("isLactoseFree")}
      />
    </View>
  );
};

export default FiltersScreen;

const styles = StyleSheet.create({
  filtersScreen: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  filtersTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
