import {useFonts} from 'expo-font';
import { Stack } from 'expo-router';



export default function RootLayout() {

const [loaded, error] = useFonts({
  'medium' : require('../assets/fonts/Manrope/Manrope/static/Manrope-Medium.ttf'),
  'semibold' : require('../assets/fonts/Manrope/Manrope/static/Manrope-SemiBold.ttf'),
  'extrabold' : require('../assets/fonts/Manrope/Manrope/static/Manrope-ExtraBold.ttf'),
  'bold' : require('../assets/fonts/Manrope/Manrope/static/Manrope-Bold.ttf')
})

  return (
    <Stack screenOptions={{ headerShown : false}}> 
    
    <Stack screenOptions= "index"/>


    <Stack screenOptions= "profile"/>    
    
    
    
    </Stack>  )}

  



