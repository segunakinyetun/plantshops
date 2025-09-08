import { Text, View, Dimensions, TouchableOpacity, TextInput, Image} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";


import  Button from "../component/botton";
import Bextbox from "../component/textbox";


const {width, height} = Dimensions.get('screen');
console.log(width, height);



const Index = () => {

  return (
    <SafeAreaView>

      <View>

        <Image source = {require ('../assets/images/plantshop.png')}/>

      </View>

      <Button/>
      <Textbox/>
      

    </SafeAreaView>




  );
}

export default Index;
