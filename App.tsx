import { StatusBar } from 'expo-status-bar';
import {Routes} from './src/routes'
import {Main} from './src/components/Main'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

export default function App() {

const [hasLoadedFonts] = useFonts({
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
})

if(!hasLoadedFonts) return null

  return (
    <Main>
      <StatusBar backgroundColor='white'/>
      <Routes/>
    </Main>
    
  );
}