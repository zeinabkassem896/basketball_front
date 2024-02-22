import React, { useState, useEffect, useContext } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  Pressable,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';

import { RegisterStyle } from "./RegisterStyle";
import { HomeStyle } from "../Home/HomeStyle";

import Header from "../../components/Header/Header";

import axios from "axios";
import { useIsFocused } from "@react-navigation/native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faCalendarAlt, faEarthAsia, faLock, faEyeSlash, faEye, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {API_LINK, GRAY_COLOR } from '@env';
import { AuthContext } from "../../Context/AuthContext";



const Register = ({navigation},props) => {

  const isFocused = useIsFocused();
  const {register, responseMessage, responseStatus, teamsArray, setResponseMessage} = useContext(AuthContext)

    const [hidePass, setHidePass] = useState(true)
    const [hideRepeatPass, setHideRepeatPass] = useState(true);
    const [FavoriteDisplay, setFavoriteDisplay] = useState(false);
    const [CheckInputs, setCheckInputs] = useState(false);

    const [searchValue, setSearchValue] = useState('');
    const [filterItem, setFilterItem] = useState([]);

    const [FirstName, setFirstName] = useState(null);
    const [LastName, setLastName] = useState(null);
    const [Country, setCountry] = useState(null);
    const [City, setCity] = useState(null);
    const [Email, setEmail] = useState(null);
    const [Password, setPass] = useState(null);
    const [RepeatPass, setRepeatPass] = useState(null);
    const [FavoriteTeam, setFavoriteTeam] = useState(null);
    

    const handleSubmit = ()=>{
      if(FirstName !== null && LastName !== null && Email !== null && Password !== null && RepeatPass !== null && Password === RepeatPass){
        checkExistingEmail(Email);
        if(responseMessage === "well done"){
          setFavoriteDisplay(true);
          setResponseMessage(null);
        }
        else{
          setFavoriteDisplay(false);
        }
      }
      else{
        setCheckInputs(true)
        setFavoriteDisplay(false);
      }
     
    }

    const checkExistingEmail = async(email)=>{
      try{
          await axios.post(`${API_LINK}/api/auth/checkemail`,{
          email
      }).then(res=>{
          setResponseMessage(res.data.message);
      })
      }catch(e){
          console.log(`error log in ${e}`)
      }
  }

    useEffect(()=>{
      if(searchValue === '')
        setFilterItem(teamsArray)
      else{
        setFilterItem(teamsArray.filter(each=>each.name.toLowerCase().includes(searchValue.toLowerCase())))

      }
        
    },[searchValue])


  useEffect(()=>{
    setFavoriteDisplay(false)
    setCheckInputs(false)
    setFilterItem(teamsArray)
  },[props, isFocused])

  useEffect(()=>{
    if(responseStatus !== null && responseStatus === 200){
      navigation.navigate('Home');
    }
    else if(responseStatus !== null && responseStatus === 400){
      setEmail(null),
      setPass(null);
      setCheckInputs(true)
      setFavoriteDisplay(false)
    }
  },[responseMessage])


  return (
    <>
    {filterItem === 0 ?
      <View style={HomeStyle.ImgDiv}>
        <Image style={HomeStyle.ImgLogo} source={require('../../assets/logo1.png')} />
      </View>
    :
    <>
    {FavoriteDisplay ? <Header title={ 'Favorite Team'}/> : ''}
        {!FavoriteDisplay ? 
          <KeyboardAwareScrollView>
            <ScrollView style={RegisterStyle.container}>
              <View style={RegisterStyle.firstDiv}>
                <ImageBackground source={require('../../assets/Signup.png')} resizeMode="cover" style={RegisterStyle.image}>
                  <Pressable 
                  onPress={()=> navigation.navigate('Login')} 
                    style={RegisterStyle.backIcon}>
                      <Image source={require('../../assets/wave-arrow-left.png')}/>
                  </Pressable>
                </ImageBackground>
              </View>
              <View>
                <View style={RegisterStyle.inputDiv}>
                  <Text style={RegisterStyle.title}>Create New Account</Text>
                    {/* About You */}
                    <Text style={RegisterStyle.subTitle}>About You</Text>
                    <View style={[RegisterStyle.inputInnerDiv,CheckInputs && (FirstName === null || (FirstName !== null && FirstName.length === 0)) ? RegisterStyle.Redinput : '']}>
                        <FontAwesomeIcon icon={ faUser } style={RegisterStyle.icon}/>
                        <TextInput style={RegisterStyle.input} placeholder="First Name" placeholderTextColor={GRAY_COLOR} onChangeText={(text)=> setFirstName(text)} value={FirstName}/>
                    </View>
                    <View style={[RegisterStyle.inputInnerDiv,CheckInputs && (LastName === null || (LastName !== null && LastName.length === 0)) ? RegisterStyle.Redinput : '']}>
                        <FontAwesomeIcon icon={ faUser } style={RegisterStyle.icon}/>
                        <TextInput style={RegisterStyle.input} placeholder="Last Name" placeholderTextColor={GRAY_COLOR} onChangeText={(text)=> setLastName(text)} value={LastName}/>
                    </View>
                    <View style={RegisterStyle.inputInnerDiv}>
                        <FontAwesomeIcon icon={ faCalendarAlt } style={RegisterStyle.icon}/>
                        {/* <DatePicker
                                modal
                                open={open}
                                date={date}
                                format="DD-MM-YYYY"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                  dateIcon: {
                                    display: 'none',
                                  },
                                  dateInput: {
                                    alignItems: "flex-start",
                                    borderWidth: 0,
                                    marginLeft: 10
                                  },
                                  }}
                                onConfirm={(date) => {
                                  setOpen(false)
                                  setDate(date)
                                }}
                                onCancel={() => {
                                  setOpen(false)
                                }}
                              /> */}
                    </View>
                    {/* Your location */}
                    <Text style={RegisterStyle.subTitle}>Your Location</Text>
                    <View style={RegisterStyle.inputInnerDiv}>
                        <FontAwesomeIcon icon={ faEarthAsia } style={RegisterStyle.icon}/>
                        <TextInput placeholderTextColor={GRAY_COLOR} style={RegisterStyle.input} placeholder="Country (optinal)" onChangeText={(text)=> setCountry(text)} value={Country}/>
                    </View>
                    <View style={RegisterStyle.inputInnerDiv}>
                        <Image source={require('../../assets/city.png')} />
                        <TextInput placeholderTextColor={GRAY_COLOR} style={RegisterStyle.input} placeholder="City (optional)" onChangeText={(text)=> setCity(text)} value={City}/>
                    </View>
                      {/* Sign up */}
                      <Text style={RegisterStyle.subTitle}>Sign Up</Text>
                    <View style={[RegisterStyle.inputInnerDiv,CheckInputs && (Email === null || (Email !== null && Email.length === 0)) ? RegisterStyle.Redinput : '']}>
                        <FontAwesomeIcon icon={ faUser } style={RegisterStyle.icon}/>
                        <TextInput placeholderTextColor={GRAY_COLOR} style={RegisterStyle.input} placeholder="Email" keyboardType="email-address" require onChangeText={(text)=> setEmail(text)} value={Email}/>
                    </View>
                    <View style={[RegisterStyle.inputInnerDiv,CheckInputs &&  (Password === null || (Password !== null && Password.length === 0) || (RepeatPass !== Password)) ? RegisterStyle.Redinput : '']}>
                        <FontAwesomeIcon icon={ faLock } style={RegisterStyle.icon}/>
                        <TextInput placeholderTextColor={GRAY_COLOR} style={[RegisterStyle.input, RegisterStyle.inputPassword]} secureTextEntry={hidePass} placeholder="Password" require onChangeText={(text)=> setPass(text)} value={Password}/>
                        <Pressable onPress={()=> setHidePass(!hidePass)} style={RegisterStyle.divIcon}>
                            <FontAwesomeIcon icon={ hidePass ? faEyeSlash : faEye } style={RegisterStyle.icon}/>
                        </Pressable>
                    </View>
                    <View style={[RegisterStyle.inputInnerDiv,CheckInputs && (RepeatPass === null || (RepeatPass !== null && RepeatPass.length === 0) || (RepeatPass !== Password)) ? RegisterStyle.Redinput : '']}>
                        <FontAwesomeIcon icon={ faLock } style={RegisterStyle.icon}/>
                        <TextInput placeholderTextColor={GRAY_COLOR} style={[RegisterStyle.input, RegisterStyle.inputPassword]} secureTextEntry={hideRepeatPass} placeholder="Repeat Password" require onChangeText={(text)=> setRepeatPass(text)}/>
                        <Pressable onPress={()=> setHideRepeatPass(!hideRepeatPass)} style={RegisterStyle.divIcon}>
                            <FontAwesomeIcon icon={ hideRepeatPass ? faEyeSlash : faEye } style={RegisterStyle.icon}/>
                        </Pressable>
                    </View>
                    {responseMessage !== null &&  responseMessage !== 'well done'?
                    <View style={RegisterStyle.responseMessageStyle}>
                      <Text style={RegisterStyle.responseMessageStyleText}>{responseMessage}</Text>
                    </View>
                    : null}
                    <View style={RegisterStyle.buttonDiv}>
                        <TouchableOpacity onPress={handleSubmit} style={RegisterStyle.button}>
                            <Text style={RegisterStyle.buttonText}>Create Account</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={RegisterStyle.LoginTextView} 
                    //onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={RegisterStyle.grayText}>You already have an account </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                          <Text style={RegisterStyle.orangeText}>Login</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
              </View>
              </ScrollView>
          </KeyboardAwareScrollView>
          :  
          <>
          <View style={RegisterStyle.grayDiv}> 
            <Text style={RegisterStyle.subtitle2}>Customise your in-app experience by selecting your favorite team</Text>
            <View style={RegisterStyle.inputDiv}>
              <View style={RegisterStyle.inputInnerDiv}>
                  <FontAwesomeIcon icon={ faMagnifyingGlass } style={RegisterStyle.icon}/>
                  <TextInput placeholderTextColor={GRAY_COLOR} style={RegisterStyle.input} placeholder="Search" value={searchValue} onChangeText={(text)=>setSearchValue(text)} />
              </View>
            </View>
              <ScrollView style={RegisterStyle.flatContainer}>
                <View style={RegisterStyle.flatContainerDiv}>
                  {filterItem.map(item =>
                    <TouchableOpacity style={[RegisterStyle.row,FavoriteTeam === item.id ? RegisterStyle.favoriteTeamView: '']} key={Math.random()} onPress={()=>setFavoriteTeam(item.id)}>
                      <Image source={{uri: `${API_LINK}/${item.image}`}} style={RegisterStyle.teamImage}/>
                      <Text style={FavoriteTeam === item.id ? RegisterStyle.favoriteTeamText: ''}>{item.name}</Text>
                    </TouchableOpacity>
                  )}
                  </View>
              </ScrollView>

            <View style={RegisterStyle.whiteDiv2}>
              <TouchableOpacity style={RegisterStyle.button} onPress={()=> register(FirstName.trim(),LastName.trim(),null,City,Country,Email.toLowerCase().trim(),Password, FavoriteTeam)}>
                  <Text style={RegisterStyle.buttonText}>Select Team</Text>
              </TouchableOpacity>
            </View>
          </View>

          </>
          }
    </>
    }
    </>
  );
};

export default Register;