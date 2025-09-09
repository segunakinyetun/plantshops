import { TouchableOpacity, Text } from "react-native";


const customTextButton = (text, onPress) => {

    return (

        <view>
             <TouchableOpacity onPress = {onPress} style = {styles.input}>

            <Text style = {styles.label}> {text} </Text>

        </TouchableOpacity>

        </view>

                   

    )
}
export default customTextButton;

const styles = StyleSheet.create ({
input : { 
    borderColor : 'white',
    borderRadius : 25, 
    height : 58, 
    padding : 18, 
    justifyContent : 'center'
},
label : {
    colour : 'black', 
    fontFamily : 'semibold', 
    fontSize : 16, 
    textAlign: 'center',
}
})


