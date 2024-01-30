import React from "react";
import {
  Text,
  View,
} from 'react-native';

import { OrangeButtonStyle } from "./OrangeButtonStyle";



const OrangeButton = ({active = true, title, equalButton = 'no', reset=false}) => {

  return (
    <View style={[OrangeButtonStyle.orangeButton, active === true ? OrangeButtonStyle.orangeButton2 : '', equalButton === 'yes' ? { width: 170 }:'', reset ? OrangeButtonStyle.gray_button: ""]}>
        <Text style={[OrangeButtonStyle.orangeButtonText, active === true ? OrangeButtonStyle.orangeButtonText2 : '', , reset ? OrangeButtonStyle.gray_buttonText: ""]}>{ title }</Text>
    </View>
  );
};
export default OrangeButton;