import { StyleSheet } from 'react-native';
import {ORANGE_COLOR} from '@env';


    export const MoreStyle = StyleSheet.create({
    moreBackground:{
      height: '95%'
    },
    more_view:{
      paddingTop: 20,
      paddingHorizontal: 30,
    },
    more_text:{
      fontSize: 25,
      fontWeight: 'bold',
      lineHeight: 60
    },
    more_flex:{
      marginTop: 40,
      paddingVertical: 20,
      borderBottomColor: ORANGE_COLOR,
      borderBottomWidth: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: 20
    }

  });