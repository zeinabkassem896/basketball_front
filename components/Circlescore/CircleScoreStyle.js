import { StyleSheet } from 'react-native';

    export const CircleScoreStyle = StyleSheet.create({
    scoreBox:{
        padding: 1,
        borderRadius: 50,
        width: 102,
        marginBottom: 20
    },
    scoreBoxInner:{
        backgroundColor: 'blue',
        height: 100,
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scoreBoxText:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    scoreBoxText2: {
      fontSize: 10,
      textTransform: 'uppercase'
    }
});