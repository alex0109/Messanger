import { ThemeProvider } from "@shared/lib/providers/ThemeProvider";
import { store } from "@shared/lib/store/store";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { connect } from "socket.io-client";

import Root from "@/Root";

//                     "http://192.168.27.169:3000"
//                     "10.0.2.2"
const socket = connect("http://10.0.2.2:3000");

export default function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected", socket.id);
    });
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <Root />
      </ThemeProvider>
    </Provider>
  );
}
