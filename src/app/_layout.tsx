import "@/global.css";

import { Stack } from "expo-router";
import { Provider as PaperProvider } from 'react-native-paper';
import { pt, registerTranslation } from 'react-native-paper-dates';

registerTranslation('pt', pt)

export default function Layout() {
  return (
      <PaperProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </PaperProvider>
  )
}
