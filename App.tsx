import { StatusBar } from 'react-native';
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
          <StatusBar backgroundColor={light.COLORS.STATUS_BAR}/>
          <Routes/>
        </ContainerMain>
      
    </ThemeProvider>
    
    
  );
}