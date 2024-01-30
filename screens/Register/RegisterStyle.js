import { StyleSheet } from 'react-native';
// import {BACKGROUND_COLOR, ORANGE_COLOR, RED_COLOR} from '@env';



const ORANGE_COLOR = process.env.ORANGE_COLOR
const RED_COLOR = process.env.RED_COLOR
const BACKGROUND_COLOR = process.env.BACKGROUND_COLOR

    export const RegisterStyle = StyleSheet.create({
    container: {
      backgroundColor: '#F2F2F2',
      marginBottom: 20
    },
    image:{
      height: 350,
    },
    backIcon:{
      paddingTop: '15%',
      paddingLeft: '5%'
    },
    title: {
      textAlign: 'center',
      fontSize: 27,
      fontWeight: 'bold',
      marginBottom: 30,
      marginTop: '5%'
    },
    inputDiv:{
      alignItems: "center", 
      justifyContent: "center",
      flexDirection: "column",
      gap: 20,
      height: 100,
    },
    subTitle:{
      width: '85%',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'left',
      width: '80%',
      marginTop: '8%',
      marginBottom: 10
    },
    inputInnerDiv:{
      alignItems: "center", 
      justifyContent: "flex-start",
      flexDirection: "row",
      backgroundColor: BACKGROUND_COLOR,
      borderRadius: 12,
      height: 50,
      width: '85%',
      paddingLeft: 20,
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
    inputPassword:{
      width: '78%'
    },
    divIcon:{
      width: 30,
      height: 30,
      alignItems: "center", 
      justifyContent: "center",
    },
    icon:{
      color: '#999',
    },
    buttonDiv:{
      marginTop: '-7%',
      width: '100%',
      marginLeft: '15%'
    },
    button:{
      backgroundColor: ORANGE_COLOR,
      borderRadius: 60,
      height: 50,
      alignItems: "center", 
      justifyContent: "center",
    },
    buttonText:{
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
    },
    forgetPass:{
      textAlign: 'center',
      fontSize: 14,
      fontWeight: 'bold',
    },
    lastText:{
      color: '#999',
      marginTop: '13%',
      paddingBottom: '8%',
    },
    LoginTextView:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginVertical: 10
    },
    orangeText:{
      color: ORANGE_COLOR,
      fontSize: 14,
      fontWeight: 'bold',
    },
    grayText:{
      color: '#999'
    },
    grayDiv:{
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      // marginTop: -15,
      // marginBottom: 15,
      flex: 1
    },
    subtitle2:{
      textAlign: 'left',
      color: '#555',
      fontSize: 16,
      width: '80%',
      marginHorizontal: '9%',
      marginTop: '8%',
      marginBottom: '7%'
    },
    icon:{
      color: '#999999',
    },
    inputDiv:{
      alignItems: "center", 
      justifyContent: "center",
      flexDirection: "column",
    },
    inputInnerDiv:{
      alignItems: "center", 
      justifyContent: "flex-start",
      flexDirection: "row",
      backgroundColor: BACKGROUND_COLOR,
      borderRadius: 12,
      height: 50,
      width: '85%',
      paddingLeft: 20,
      marginBottom: '7%'
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
    whiteDiv2:{
      backgroundColor: 'white',
      borderRadius: 20,
      justifyContent:'flex-start',
      alignItems: 'center',
      height: '15%',
      width: '100%',
      zIndex: 100
    },
    button:{
      backgroundColor: ORANGE_COLOR,
      borderRadius: 60,
      height: 50,
      alignItems: "center", 
      justifyContent: "center",
      width: '85%',
      marginTop: 30
    },
    buttonText:{
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
    },
    flatContainer:{
      width: '100%',
      height: '100%',
      flexGrow: 1
    },
    flatContainerDiv:{
      justifyContent: 'center',
      alignItems: 'center',
    },
    row: {
      height: 60,
      padding: 10,
      width: '85%',
      borderBottomWidth: 1,
      borderBottomColor: '#E4E4E4',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',
    },
    Redinput:{
      borderColor: RED_COLOR,
      borderWidth: 1
    },
    teamImage:{
      width: 40,
      height: 40
    },
    favoriteTeamView:{
      backgroundColor: ORANGE_COLOR,
      borderRadius: 10,
    },
    favoriteTeamText: {
      color: 'white'
    },
    responseMessageStyle:{
      borderColor: RED_COLOR,
      borderWidth: 1,
      borderRadius: 12,
      width: '85%',
      paddingLeft: 20,
      height: 50,
      display: 'flex',
      justifyContent: 'center',
      marginTop: '-5%'
    },
    responseMessageStyleText:{
      color: RED_COLOR,
      textTransform: 'capitalize'
    },

  });