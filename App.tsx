import { ThemeProvider } from "@shared/lib/providers/ThemeProvider";
import { store } from "@shared/lib/store/store";
import React from "react";

import { Provider } from "react-redux";

import Root from "@/Root";
import { UserProvider } from "@/shared/lib/providers/UserProvider";

export default function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <ThemeProvider>
          <Root />
        </ThemeProvider>
      </UserProvider>
    </Provider>
  );
}
