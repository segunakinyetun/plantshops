import { Text, View, Dimensions, TouchableOpacity, TextInput, Image} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";


import  customButton from "../component/botton";
import MyTextInput from "../component/textbox";
import customTextButton from "../coponent/mytextopac";

const {width, height} = Dimensions.get('screen');
console.log(width, height);



const Index = () => {

  return (
    <SafeAreaView>

      <View>

        <Image source = {require ('../assets/images/plantshop.png')}/>

      </View>

      <Button/>
      <TextInput/>
      <customTextButton/>

    </SafeAreaView>




  );
}

export default Index;
