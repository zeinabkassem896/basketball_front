import React, {createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// import { API_LINK } from '@env';
import { useNavigation } from '@react-navigation/native';


export const AuthContext = createContext({});