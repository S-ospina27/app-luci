// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import Toast from "react-native-toast-message";
import { AppNavigation } from "./src/navigation/AppNavigation";
import AuthContext from "./src/validation/AuthContext";
export default function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <AuthContext.Provider value={{ token, setToken }}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </AuthContext.Provider>
      <Toast visibilityTime={3000} />

    </>
  );
}
