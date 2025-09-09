import { Text, View, Dimensions, Image, TextInput, TouchableOpacity } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";


import  customButton from "../component/botton";
import customTextButton from "../coponent/mytextopac";
import MyTextInput from "../component/textbox";



const {width, height} = Dimensions.get('screen');

console.log(width, height);


const Signin = () => {

  return (
    <SafeAreaView>
     <View>
      <Image source = {require ('../assets/images/plantshop.png')}/>
     </View>
    

    <View>
      <Button/>
      <MyTextInput/>
      <customTextButton/>
      
    </View>


    <customTextButton/>


    </SafeAreaView>
  )
};


export default Signin;