import { TouchableOpacity, Text } from "react-native";

const TextInput = (text) => {

    return (

        <view>
             <TouchableOpacity style = {{backgroundColor : 'green', borderRadius : 25, height : 58, padding : 18, justifyContent : 'center',}}>

            <Text style = {{colour : 'white', fontFamily : 'semibold', fontSize : 16, textAlign: 'center',}}> {text} </Text>

        </TouchableOpacity>

        </view>

                   

    )
}
export default TextInput;

