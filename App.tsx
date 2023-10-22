import { ThemeProvider } from "@shared/lib/providers/ThemeProvider";
import { store } from "@shared/lib/store/store";
import React from "react";

import { Provider } from "react-redux";

import Root from "@/Root";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Root />
      </ThemeProvider>
    </Provider>
  );
}
