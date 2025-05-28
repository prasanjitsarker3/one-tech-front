"use client";
import React, { ReactNode } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import store, { persistor } from "@/redux/store";

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster position="top-right" richColors />
        {children}
      </PersistGate>
    </Provider>
  );
};

export default GlobalProvider;
