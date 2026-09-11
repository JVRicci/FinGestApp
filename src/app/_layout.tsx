import "@/global.css";

import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { Provider as PaperProvider } from 'react-native-paper';
import { pt, registerTranslation } from 'react-native-paper-dates';

registerTranslation('pt', pt)

export default function Layout() {
  return (
      <PaperProvider>
        <StatusBar 
          backgroundColor="#f4511e"
          barStyle="dark-content"
        />
        <Stack screenOptions={{ headerShown: false,  }} />
      </PaperProvider>
  )
}
