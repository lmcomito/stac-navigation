
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";

import Home from "./src/screens/Home";
import Barbas from "./src/screens/Barbas";
import Combos from "./src/screens/Combos";
import Cortes from "./src/screens/Cortes";
import Perfil from "./src/screens/Perfil";


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component =
        {Home}
        options={{
          title: "Tela Inicial",
          headerStyle: {
            backgroundColor: "#0D214F",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          // headerShown: false,
        }}
      /> 
        <Stack.Screen 
        name="Perfil" 
        component=
        {Perfil} 
        options={{
          title: "Perfil",
          headerStyle: {
            backgroundColor: "#483D83",
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          // headerShown: false,
        }}
      />
        <Stack.Screen 
        name="Cortes" 
        component=
        {Cortes}
        options={{
          title: "Cortes",
          headerStyle: {
            backgroundColor: "106ebe",
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          // headerShown: false,
        }}
       />
        <Stack.Screen 
        name="Barbas" 
        component=
        {Barbas} 
        options={{
          title: "Barbas",
          headerStyle: {
            backgroundColor: "#0078D4",
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          // headerShown: false,
        }}
      />
        <Stack.Screen 
        name="Combos" 
        component={Combos} 
        options={{
          title: "Combos",
          headerStyle: {
            backgroundColor: "#E0E0E0",
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          // headerShown: false,
        }}
      />

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}