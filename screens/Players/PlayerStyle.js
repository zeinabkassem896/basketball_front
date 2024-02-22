import { StyleSheet } from 'react-native';

    export const PlayerStyle = StyleSheet.create({
    scrollView:{
      marginVertical: 20,
    },
    playerView:{
      marginHorizontal: 20,
      flex: 1
    },
    playerTitle:{
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 10
    },
    playerFlex:{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 5,
      marginBottom: 10
    },
    image_size:{
      width: 40,
      height: 40
    },
    teamsFlex:{
      display: 'flex',
      flexDirection:'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      rowGap: 20,
      marginBottom: 10
    },
    teamDiv:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minWidth: "25%",
      rowGap: 10,
      paddingVertical: 5,
      borderColor: '#F2F2F0',
      borderWidth: 1,
      borderRadius: 10
    },
    teamActiveDiv:{
      borderColor: '#FF7A00',
    },
    flexButton:{
      display: 'flex',
      gap: 10
    },
    inputInnerDiv:{
      alignItems: "center", 
      justifyContent: "flex-start",
      flexDirection: "row",
      backgroundColor: '#E6E6E6',
      borderRadius: 12,
      height: 50,
      width: '100%',
      paddingLeft: 20
    },
    input: {
      height: 40,
      margin: 12,
      padding: 10,
      backgroundColor: '#E6E6E6',
      width: '50%',
      marginLeft: 0,
      width: '90%'
    },
    icon:{
      color: '#999',
    },
    filterDiv:{
      display: 'flex',
      alignItems: 'flex-end',
      marginBottom: 10
    },
    filterButton:{
      borderColor: '#999',
      borderWidth: 1,
      borderRadius: 5,
      width: 90,
      height: 30,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
      marginTop: 10,
    },
    filterText:{
      color: '#999',
      fontSize: 14,
      fontWeight: 'bold'
    }
    });