import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { charactersReducer } from "./characters/charactersReducer";
import rootSaga from "./saga";

const rootReducer = combineReducers({
  characters: charactersReducer,
});

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Set up the store with the rootReducer and middleware
export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

// Run the rootSaga to start the middleware
sagaMiddleware.run(rootSaga);

// Define the types for the Redux store and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
