import { ThemeProvider } from "@shared/lib/providers/ThemeProvider";
import { store } from "@shared/lib/store/store";
import React from "react";

import { Provider } from "react-redux";

import Root from "@/Root";
import { AuthContextProvider } from "@/shared/lib/providers/AuthProvider";

export default function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeProvider>
          <Root />
        </ThemeProvider>
      </AuthContextProvider>
    </Provider>
  );
}
