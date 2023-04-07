import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import AppStack from "./src/components/AppStack";

export default function App() {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
}
