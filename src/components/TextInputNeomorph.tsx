import { View, TextInput, Dimensions } from 'react-native';
import React, { SetStateAction } from 'react';
import { Neomorph } from 'react-native-neomorph-shadows';
import { COLORS } from '../theme';

const TextInputNeomorph = ({
  width,
  placeholder = 'text',
  onChangeText,
  value,
  height = 50,
}: {
  width: number;
  placeholder: string;
  onChangeText: { (value: SetStateAction<string>): void; (arg0: string): void };
  value: string;
  heigh: number;
}) => {
  const WindowsWidth = Dimensions.get('window').width;
  return (
    <Neomorph
      inner // <- enable shadow inside of neomorph
      swapShadows // <- change zIndex of each shadow color
      darkShadowColor="#89AFCF" // <- set this
      lightShadowColor="#FFFFFF" // <- this
      style={{
        shadowOpacity: 1,
        shadowRadius: 4,
        borderRadius: 15,
        backgroundColor: '#EAF0F5',
        width: width || WindowsWidth * 0.85,
        height,
        paddingHorizontal: 15,
        justifyContent: 'center',
      }}>
      <TextInput
        autoCapitalize="none"
        secureTextEntry={true}
        keyboardType={'visible-password'}
        onChangeText={onChangeText}
        value={value}
        selectionColor={COLORS.DARKMAINCOLOR}
        cursorColor={COLORS.DARKGREYCOLOR}
        style={{ height: 50, fontSize: 16 }}
        placeholder={placeholder}
      />
    </Neomorph>
  );
};

export default TextInputNeomorph;
