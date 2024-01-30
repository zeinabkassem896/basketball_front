import { StyleSheet } from 'react-native';
// import {BACKGROUND_COLOR, ORANGE_COLOR, RED_COLOR} from '@env';


const RED_COLOR = process.env.RED_COLOR


export const CardScoreStyle = StyleSheet.create({
    CardScoreDiv:{
      zIndex: 100
    },
      container:{
          backgroundColor: 'white',
          height: 120,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          gap:10,
          marginTop: -60
      },
      finalText:{
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase'
      },
      stadiumText:{
        color: '#555555',
        fontSize: 14,
        textTransform: 'capitalize'
      },
      scoreBox:{
        flexDirection: 'row',
        height: 45,
        width: 100,
        borderRadius: 5,
        padding: 1,
      },
      scoreBoxNm:{
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
      },
      scoreBoxNmL:{
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
      },
      scoreBoxNmR:{
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
      },
      scoreBoxText:{
        fontSize: 28,
        fontWeight: 'bold'
      },
      container2:{
        top: 15,
        zIndex: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: '5%',
       
      },
      innerContainer2:{
        alignItems: 'center',
  
      },
      ImgDiv:{
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: RED_COLOR,
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 5,
        backgroundColor: 'white'
      },
      ImgText:{
        fontWeight: 'bold',
        marginTop: 5,
        textTransform: 'capitalize'
      },
      image_size:{
        height: '85%',
        width: '85%'
      }
    });