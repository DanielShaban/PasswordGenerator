import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { COLORS } from '../theme';

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  const onPressFinish = async () => {
    await AsyncStorage.setItem('ONBOARDED', 'true');
    navigation.navigate('MainScreen');
  };
  return (
    <Onboarding
      onDone={onPressFinish}
      showSkip={false}
      pages={[
        {
          backgroundColor: COLORS.MAINCOLOR,
          image: (
            <Image
              style={{ width: 300, height: 300 }}
              source={require('../../asset/ClosedLock.png')}
            />
          ),
          title: 'Safety',
          subtitle:
            'Our app generates a unique password for each platform. ' +
            'If someone finds out any of your passwords, they will not be able to use them anywhere else',
        },
        {
          backgroundColor: COLORS.MAINCOLOR,
          image: (
            <Image
              style={{ width: 300, height: 300 }}
              source={require('../../asset/Safety.png')}
            />
          ),
          title: 'Privacy',
          subtitle: `Unlike password storage apps, we do not send your password anywhere and do not store it.
        All you need to get your password is the name of the website and your codeword`,
        },
        {
          backgroundColor: COLORS.MAINCOLOR,
          image: (
            <Image
              style={{ width: 300, height: 300 }}
              source={require('../../asset/Cloud.png')}
            />
          ),
          title: 'Convenience',
          subtitle:
            'Access to your passwords is always in your phone. If there is no access to your phone, then you can use our website',
        },
      ]}
    />
  );
};

export default OnBoardingScreen;
