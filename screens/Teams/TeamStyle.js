import { StyleSheet } from 'react-native';
// import {ORANGE_COLOR, BACKGROUND_COLOR, RED_COLOR} from '@env';


const ORANGE_COLOR = process.env.ORANGE_COLOR
const BACKGROUND_COLOR = process.env.BACKGROUND_COLOR



    export const TeamStyle = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        flex: 1,
    },
    playerTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10
      },
    inputInnerDiv:{
        alignItems: "center", 
        justifyContent: "flex-start",
        flexDirection: "row",
        backgroundColor: BACKGROUND_COLOR,
        borderRadius: 12,
        height: 50,
        width: '100%',
        paddingLeft: 20,
        marginBottom: 20,
      },
      input: {
        height: 40,
        margin: 12,
        padding: 10,
        backgroundColor: BACKGROUND_COLOR,
        width: '50%',
        marginLeft: 0,
        width: '90%'
      },
      icon:{
        color: '#999',
      },
      teamView:{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderRadius: 10,
        marginBottom: 10
      },
      teamsOrangeView:{
        width: 20,
        height: '100%',
        backgroundColor: ORANGE_COLOR,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
      },
      teamsInnerView:{
        marginLeft: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        width: '70%'
      },
      image_size:{
        width: 30,
        height: 30,
      }
  });