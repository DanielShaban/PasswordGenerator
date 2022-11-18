import { Pressable } from 'react-native';
import React from 'react';
import { Neomorph } from 'react-native-neomorph-shadows';
import { COLORS } from '../theme';
import { useNavigation } from '@react-navigation/native';

const ButtonNeomorph = ({ width = 45 }: { width: number }) => {
  const navigation = useNavigation();

  const handlePress = () => navigation.navigate('AboutScreen');
  return (
    <Pressable onPress={handlePress}>
      {({ pressed }) => (
        <Neomorph
          inner={pressed} // <- enable shadow inside of neomorph
          swapShadows // <- change zIndex of each shadow color
          darkShadowColor="#89AFCF" // <- set this
          lightShadowColor="#FFFFFF" // <- this
          style={{
            shadowOpacity: 1,
            shadowRadius: 4,
            borderRadius: width / 2,
            backgroundColor: '#EAF0F5',
            width: width,
            height: width,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Neomorph
            inner // <- enable shadow inside of neomorph
            swapShadows // <- change zIndex of each shadow color
            darkShadowColor="#89AFCF" // <- set this
            lightShadowColor="#FFFFFF" // <- this
            style={{
              shadowOpacity: 1,
              shadowRadius: 4,
              borderRadius: 2,
              backgroundColor: COLORS.MAINCOLOR,
              width: 4,
              height: 14,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
          <Neomorph
            inner // <- enable shadow inside of neomorph
            swapShadows // <- change zIndex of each shadow color
            darkShadowColor="#89AFCF" // <- set this
            lightShadowColor="#FFFFFF" // <- this
            style={{
              shadowOpacity: 1,
              shadowRadius: 4,
              borderRadius: 2,
              width: 4,
              height: 4,
              backgroundColor: COLORS.MAINCOLOR,
              marginTop: 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </Neomorph>
      )}
    </Pressable>
  );
};

export default ButtonNeomorph;
