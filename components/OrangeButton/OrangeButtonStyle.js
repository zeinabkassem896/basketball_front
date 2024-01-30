import { StyleSheet } from 'react-native';
// import {BACKGROUND_COLOR, ORANGE_COLOR, RED_COLOR} from '@env';

const ORANGE_COLOR = process.env.ORANGE_COLOR



    export const OrangeButtonStyle = StyleSheet.create({
    orangeButton:{
        backgroundColor: ORANGE_COLOR,
        height: 40,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        border: '1px solid red'
    },
    orangeButton2:{
      backgroundColor: 'transparent',
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: ORANGE_COLOR
    },
    orangeButtonText:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    orangeButtonText2:{
        color: ORANGE_COLOR,
    },
    gray_button:{
      borderColor: '#999'
    },
    gray_buttonText:{
      color: '#999'
    }
});