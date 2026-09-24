import "@/global.css";
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { Stack } from "expo-router";
import { openDatabaseSync } from "expo-sqlite";
import { ActivityIndicator, LogBox, StatusBar, Text, useColorScheme, View } from "react-native";
import { MD3DarkTheme, MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';
import { pt, registerTranslation } from 'react-native-paper-dates';

// Silencia o aviso específico do InteractionManager
LogBox.ignoreLogs(['InteractionManager has been deprecated']);

import migrations from '../../drizzle/migrations';

// Initialize database connection with expo
const expoDb = openDatabaseSync('FinGestDb.db');
export const db = drizzle(expoDb)

registerTranslation('pt', pt)

export default function Layout() {
  const colorScheme = useColorScheme();

  const paperTheme = colorScheme === 'dark' ? MD3DarkTheme : MD3LightTheme;

  // auto execute the initialization queries
  const { success, error } = useMigrations(db, migrations)

    if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Erro na migração do banco: {error.message}</Text>
      </View>
    );
  }

  if (!success) {
    // Exibe um carregamento na tela enquanto as tabelas estão sendo criadas
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Configurando banco de dados...</Text>
      </View>
    );
  }

  return (
      <PaperProvider 
        // theme={paperTheme}
        theme = {MD3LightTheme}
      >
        <StatusBar 
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Stack screenOptions={{ headerShown: false,  }} />
      </PaperProvider>
  )
}
