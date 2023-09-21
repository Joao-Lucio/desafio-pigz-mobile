import { StatusBar } from 'expo-status-bar';
import {Routes} from './src/routes'
import {ContainerMain} from './src/components/ContainerMain'
import { ThemeProvider } from 'styled-components/native';
import light from './src/theme/light';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import { SafeAreaView } from 'react-native';

export default function App() {

const [hasLoadedFonts] = useFonts({
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
})

if(!hasLoadedFonts) return null

  return (
    <ThemeProvider theme={light}>
        <ContainerMain>
          <StatusBar backgroundColor='white'/>
          <Routes/>
        </ContainerMain>
      
    </ThemeProvider>
    
    
  );
}