import { StyleSheet } from 'react-native';
// import {BACKGROUND_COLOR, ORANGE_COLOR, RED_COLOR} from '@env';



    export const CardStyle = StyleSheet.create({
    cardDiv:{
      width:250,
      height: 350,
      marginRight: 15,
      marginVertical: 20,
      borderRadius: 10,
      backgroundColor: 'white',
    },
    cardImg:{
      width: '100%',
      height: '80%',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      objectFit: 'cover'
    },
    cardTitle:{
      padding: 15,
      paddingBottom: 5,
      fontSize: 16,
      fontWeight: 'bold',
      maxHeight: 70,
      textTransform: 'capitalize'
    },
    cardArticle:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-end',
      padding: 10,
      paddingLeft: 15
    },
    cardArticleDate:{
      color: '#999999'
    },
    cardArticleType:{
      textTransform: 'capitalize',
      paddingRight: 10
    }
  
  });