import { StyleSheet } from 'react-native';
// import {BACKGROUND_COLOR, ORANGE_COLOR, RED_COLOR} from '@env';

const ORANGE_COLOR = process.env.ORANGE_COLOR




    export const SmallCardStyle = StyleSheet.create({
    smallCardDiv:{
      width:'100%',
      alignItems: 'center',
    },
    smallCardInnerDiv:{
      backgroundColor: 'white',
      width: '90%',
      borderRadius: 10,
      padding: 15,
      height: 150,
      marginVertical: 7,
      flexDirection: 'row',
    },
    smallCardText:{
      width: '65%',
    },
    smallCardArticle:{
      color: ORANGE_COLOR,
      fontSize: 13,
      fontWeight: 'bold',
      flex: 1
    },
    smallCardTitle:{
      fontWeight: 'bold',
      fontSize: 17,
      flex: 4
    },
    smallCardDate:{
      color: '#999999',
      flex: 1,
      },
    homeImg:{
      width: '36%',
      height: '100%',
      borderRadius: 10,
      objectFit: 'cover'
    }
    });