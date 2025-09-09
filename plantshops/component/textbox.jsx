import { Text, TextInput } from "react-native";

const MyTextInput = () => {

    return (

    <view>

         <TextInput style = {styles.input}/>


    </view>
           


    )
}
export default MyTextInput;


const styles = StyleSheet.create ({
input : { 
    backgroundColor : 'red', 
    borderRadius : 28, 
    height : 58, 
    padding : 18, 
    justifyContent : 'center',
}
})
