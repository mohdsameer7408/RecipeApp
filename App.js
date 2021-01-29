import "react-native-gesture-handler";
import React from "react";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";

import RecipeNavigator from "./app/navigations/RecipeNavigator";
import store from "./app/features/store";

enableScreens();

export default function App() {
  return (
    <Provider store={store}>
      <RecipeNavigator />
    </Provider>
  );
}
