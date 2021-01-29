import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipeSlice";

export default configureStore({
  reducer: {
    recipe: recipeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }),
});
