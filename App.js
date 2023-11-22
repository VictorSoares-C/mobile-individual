import React from 'react';
import { View } from 'react-native';
import Routes from './src/routes';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar'; // Importe StatusBar do pacote correto

export default function App() {

  const [fontsLoaded] = useFonts({
    'whitneybold': require('./assets/Fonts/whitneybold.otf'),
    'whitneymedium': require('./assets/Fonts/whitneymedium.otf'),
  });

  if (!fontsLoaded) {
    return null;
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Routes />
    </View>
  );
}
