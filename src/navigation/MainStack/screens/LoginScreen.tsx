import {
  Alert,
  BackHandler,
  Image,
  KeyboardAvoidingView,
  NativeEventSubscription,
  Platform,
  ScrollView,
  Text, View,
} from 'react-native';
import CustomInputField from '@hackernews/components/common/inputViews/CustomInputField';
import SocialMediaSection from '@hackernews/components/common/SocialMediaSection';
import GradientBackground from '@hackernews/components/common/GradientBackground';
import VersionText from '@hackernews/components/common/VersionText';
import BottomSignUpInSection from '@hackernews/components/common/BottomSignUpInSection';
import { appLogo } from '@hackernews/constants/AppIcons';
import { styles } from './NewScreen.styles';
import { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/core';
import {
  AppStackPages,
  NewScreenNavStackProps,
} from '@hackernews/navigation/MainStack/MainStack.types';
import { useDispatch, useSelector } from 'react-redux';
import { pushMainAuthentication } from '@hackernews/redux/actions/News'
import {
  currentMainAuthentication
} from '@hackernews/redux/selectors/News';
import {
  emailValidator
} from '@hackernews/helpers/inputValidators';
import { MainAuthentication } from '@hackernews/interfaces/mainInterfaces';


export const NewScreen = () => {
  const dispatch = useDispatch();
  const loginInfo: MainAuthentication = useSelector(currentMainAuthentication);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginBtnDisabled, setLoginBtnDisabled] = useState(true);
  const [loggingIn, setloggingIn] = useState(false);

  const checkLoginDetails = () => {
    if (email && password && emailValidator(email)) {
      setLoginBtnDisabled(false)
    } else {
      setLoginBtnDisabled(true)
    }
    return true;
  };

  useEffect(() => {
    if (loginInfo.message === 'USER_FOUND' || loginInfo.message === 'REGISTERED_USER' && loggingIn) {
      navigation.navigate(AppStackPages.HomeScreen);
      setPassword(''); //empty the password only.
      setloggingIn(false);
    } else {
      if (loggingIn) {
        Alert.alert("Login Failed");
        setloggingIn(false);
      }
    }
  }, [loginInfo]);
  const navigation = useNavigation<NewScreenNavStackProps>();
  useFocusEffect(() => {
    const backHandler: NativeEventSubscription = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  })
  useEffect(() => {
    setPassword('');
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={-200}
      behavior={Platform.OS === "ios" ? "position" : "height"}>
      <GradientBackground>
        <ScrollView bounces={false}>
          <View style={styles.scrollViewContainer}>
            <Image
              source={appLogo}
              style={styles.iconStyle}
            />
            <BorderView>
              <View style={styles.container}>
                <Text style={styles.title}>Sign In</Text>
                <CustomInputField keyboardType="email-address" name="EMAIL" value={email} onChangeText={(emailInput: string) => {
                  setEmail(emailInput);
                  checkLoginDetails();
                }}
                  validationFunc={(email: string) => (emailValidator(email))}
                />
                <CustomInputField name="PASSWORD" value={password} isPasswordEntry showHideSecureEntry onChangeText={(password: string) => {
                  setPassword(password);
                  checkLoginDetails();
                }}
                />
              </View>
              <SocialMediaSection isSignUp={false} onClickApple={() => { }} onClickGoogle={() => { }} onClickDiscord={() => { }} />
              <BottomSignUpInSection
                disable={loginBtnDisabled && !loggingIn}
                onClickButton={() => {
                  dispatch(pushMainAuthentication({
                    email, password, source: 'api'
                  }));
                  setloggingIn(true)
                }}
                onClickBottomText={() => {
                  navigation.navigate(AppStackPages.SignUpScreen);
                }}
                onClickBottomTextForgotPassword={() => {
                  navigation.navigate(AppStackPages.ForgotPassword);
                }} style={undefined} isLoginPage={true} isSignUpPage={false} isForgotPassword={false} />
            </BorderView>
          </View>
        </ScrollView>
      </GradientBackground>
      <VersionText />
    </KeyboardAvoidingView>
  );
}

function BorderView(props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) {
  return (
    <View style={styles.bgContainer}>{props.children}</View>
  )
}

