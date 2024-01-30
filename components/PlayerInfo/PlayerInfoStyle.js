import { StyleSheet } from 'react-native';
// import {BACKGROUND_COLOR, ORANGE_COLOR, RED_COLOR} from '@env';

const RED_COLOR = process.env.RED_COLOR




    export const PlayerInfoStyle = StyleSheet.create({
    playerInfoDiv:{
        borderRadius: 10,
        height: 60,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10
    },
    playerInfoInnerDiv:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '70%',
    },
    playerInfoText:{
      justifyContent: 'space-between',
      width: '100%',
      paddingLeft: 10,
    },
    text16:{
      fontSize: 16,
      fontWeight: 'bold',
    },
    text14:{
      fontSize: 14,
    },
    playerImage:{
      borderColor: RED_COLOR,
      borderWidth: 2,
      borderRadius: 5,
      width: 40,
      height: 45,
      backgroundColor: 'white'
    }
});