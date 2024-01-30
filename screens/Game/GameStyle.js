import { StyleSheet } from 'react-native';
// import {BACKGROUND_COLOR, ORANGE_COLOR, RED_COLOR} from '@env';


    export const GameStyle = StyleSheet.create({
    container:{
      backgroundColor: '#F2F2F0',
      flex: 1,
      width: '100%',
      position: 'relative'
    },
    ImgDiv:{
      width: '100%',
      alignItems: 'center',
      marginTop: 20,
    },
    GameImg:{
      borderRadius: 20
    },
    GamesButtonFlex:{
      marginVertical: 20,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingHorizontal: '3%',
    },
    gamesLeague:{
      marginHorizontal: 10,
      marginBottom: 15,
      zIndex:2000
    },
    dropdownFlex:{
      position:'relative',
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'space-around',
      zIndex: 1000,
    },
    
    dropdownItem:{
      width: '45%',
      zIndex:10000000
    },
    textInBetween:{
      paddingHorizontal: '3%',
      color: '#555555',
      marginTop: 25,
    },
    filterDiv:{
      paddingBottom: 10
    },
    scrollview_div:{
      zIndex:-1
    }
  });