import { Text, View, Dimensions, Image, TextInput, TouchableOpacity } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";


import Button  from "../component/botton";
import Textbox  from "../component/textbox";


const {width, height} = Dimensions.get('screen');

console.log(width, height);


const Profile = () => {

  return (
    <SafeAreaView>
     <View>
      <Image source = {require ('../assets/images/plantshop.png')}/>
     </View>
    

    <View>
      <Button/>
      <Textbox/>
    </View>

    </SafeAreaView>
  );
}

export default Profile;