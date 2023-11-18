import Routes from './src/routes';
import { useFonts } from 'expo-font'

export default function App() {
  const [fontsLoaded] = useFonts({
    'whitneybold': require('./assets/Fonts/whitneybold.otf'),
    'whitneymedium': require('./assets/Fonts/whitneymedium.otf'),
  });

  return <Routes />
  
}

