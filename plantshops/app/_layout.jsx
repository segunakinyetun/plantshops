import {useFonts} from 'expo-font';



export default function RootLayout() {

const [loaded, error] = useFonts({
  'medium' : require('../assets/fonts/Manrope/Manrope/static/Manrope-Medium.ttf'),
  'semibold' : require('../assets/fonts/Manrope/Manrope/static/Manrope-SemiBold.ttf'),
  'extrabold' : require('../assets/fonts/Manrope/Manrope/static/Manrope-ExtraBold.ttf'),
  'bold' : require('../assets/fonts/Manrope/Manrope/static/Manrope-Bold.ttf')
})

  return (
    <Stack screenOptions={{ headerShown : false}}/>  )}

  



