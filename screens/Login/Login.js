import React, { useState, useEffect, useContext } from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  Pressable,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import { LoginStyle } from "./LoginStyle";

import { GRAY_COLOR } from '@env';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { AuthContext } from "../../Context/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope, faLock, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
// import Checkbox from 'expo-checkbox';


const Login = ({navigation}) => {

  const {login, responseMessage, responseStatus, setResponseMessage, setResponseStatus} = useContext(AuthContext)

    const [hidePass, setHidePass] = useState(true)
    // const [isChecked, setChecked] = useState(false);
    const [CheckInputs, setCheckInputs] = useState(false);
    const [Email, setEmail] = useState(null);
    const [Password, setPass] = useState(null);

    const handleSubmit = ()=>{
      if(Email != null && Password!= null ){
        login(Email.toLowerCase().trim(), Password)
      }
      else{
        setCheckInputs(true)
      }
    }

    const signUpNavigate = ()=>{
      setEmail(null);
      setPass(null);
      setResponseMessage(null);
      setResponseStatus(null);
      navigation.navigate('Register')
    }

    useEffect(()=>{
     if(responseStatus !== null && responseStatus === 400){
        setEmail(null),
        setPass(null),
        setCheckInputs(true)
      }
    },[responseMessage])

  return (
    <>
    {/* <Loader/> */}

    <KeyboardAwareScrollView style={LoginStyle.container}>
        <ImageBackground source={require('../../assets/Login.png')} resizeMode="cover" style={LoginStyle.image}>
            {/* <Pressable onPress={()=> console.log("backkkk")} style={LoginStyle.backIcon}>
                <Image source={require('../../assets/wave-arrow-left.png')}/>
            </Pressable> */}
        </ImageBackground>
        <Text style={LoginStyle.title}>Login to Your Account</Text>
        <View style={LoginStyle.inputDiv}>
            <View style={[LoginStyle.inputInnerDiv,CheckInputs && (Email === null || (Email !== null && Email.length === 0)) ? LoginStyle.Redinput : '']}>
                <FontAwesomeIcon icon={ faEnvelope } style={LoginStyle.icon}/>
                <TextInput style={LoginStyle.input} keyboardType="email-address" placeholder="Email" placeholderTextColor={GRAY_COLOR} onChangeText={(text)=> setEmail(text)} value={Email}/>
            </View>
            <View style={[LoginStyle.inputInnerDiv,CheckInputs && (Password === null || (Password !== null && Password.length ===0)) ? LoginStyle.Redinput : '']}>
                <FontAwesomeIcon icon={ faLock } style={LoginStyle.icon}/>
                <TextInput style={[LoginStyle.input, LoginStyle.inputPassword]} secureTextEntry={hidePass} placeholder="Password" placeholderTextColor={GRAY_COLOR} onChangeText={(text)=> setPass(text)} value={Password}/>
                <Pressable onPress={()=> setHidePass(!hidePass)} style={LoginStyle.divIcon}>
                    <FontAwesomeIcon icon={ hidePass ? faEyeSlash : faEye } style={LoginStyle.icon}/>
                </Pressable>
            </View>
            {/* <View style={LoginStyle.checkboxDiv}>
                <Checkbox onValueChange={setChecked} style={LoginStyle.checkboxIcon} tintColors={{ true: 'red', false: 'yellow' }} value={isChecked}/>
                <Text style={LoginStyle.rememberMe}>Remember me</Text>
            </View> */}
            {responseMessage !== null ?
                <View style={LoginStyle.responseMessageStyle}>
                  <Text style={LoginStyle.responseMessageStyleText}>{responseMessage}</Text>
                </View>
                : null}
            <View style={LoginStyle.buttonDiv}>
                <TouchableOpacity style={LoginStyle.button} onPress={handleSubmit}>
                    <Text style={LoginStyle.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
            {/* <Text style={LoginStyle.forgetPass}>Forget the password?</Text> */}
            <View style={LoginStyle.lastText}>
              <Text style={LoginStyle.grayText}>Don't have an account? </Text>
              <TouchableOpacity onPress={signUpNavigate}>
                <Text style={LoginStyle.orangeText}>Sign Up</Text>
              </TouchableOpacity>
            </View>

        </View>
    </KeyboardAwareScrollView>
    </>
  );
};

export default Login;