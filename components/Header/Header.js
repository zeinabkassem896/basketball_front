import React from "react";
import {
  View,
  Text,
  Image
} from 'react-native';

import { HeaderStyle } from "./HeaderStyle";



const Header = ({ title }) => {

  return (
      <View style={HeaderStyle.whiteDiv}>
        <View style={HeaderStyle.innerDiv}>
            <Image style={HeaderStyle.logoImg} source={require('../../assets/logo1.png')} />
          <Text style={HeaderStyle.title}>{title}</Text>
        </View>
      </View>
  );
};
export default Header;