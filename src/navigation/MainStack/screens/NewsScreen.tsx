import {

  KeyboardAvoidingView,

  Platform,

  Text, View,
} from 'react-native';

import { styles } from './NewsScreen.styles';
import { ReactChild, ReactFragment, ReactPortal, } from 'react';



export const NewScreen = () => {



  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={-200}
      behavior={Platform.OS === "ios" ? "position" : "height"}>
      <Text>News screen here</Text>
    </KeyboardAvoidingView>
  );
}


