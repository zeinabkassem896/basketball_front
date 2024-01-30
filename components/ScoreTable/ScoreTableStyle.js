import { StyleSheet } from 'react-native';
// import {BACKGROUND_COLOR, ORANGE_COLOR, RED_COLOR} from '@env';


    export const ScoreTableStyle = StyleSheet.create({
    
    StandardWhiteDiv:{
      backgroundColor: 'white',
      paddingHorizontal: 10,
    },
    headerFlex:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: '4%',
        paddingVertical: 10,
    },
    headerText:{
        fontSize: 14,
        fontWeight: 'bold',
        width: '16%'
    },
    innerTable:{
        borderBottomColor: '#E4E4E4',
        borderBottomWidth: 1,
        marginHorizontal: '4%',
        paddingHorizontal: 0
    },
    PosWidth:{
        width: '12%'
    },
    ClubWidth:{
        width: '44%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    nameText:{
        textTransform: 'capitalize'
    },
    GameImg:{
      height: 35,
      width: 35,
    }
  })