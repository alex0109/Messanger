import { ThemeProvider } from "@shared/lib/providers/ThemeProvider";
import { persistor, store } from "@shared/lib/store/store";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Root from "@/Root";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <Root />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
