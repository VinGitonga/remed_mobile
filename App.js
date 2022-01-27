import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import HomeScreen from "./screens/HomeScreen";
import DoctorDash from "./screens/dashboard/DoctorDash";
import { theme } from "./utils/Theme";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={DoctorDash} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
