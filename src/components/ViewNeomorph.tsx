import { Dimensions, StyleSheet, Pressable } from 'react-native';
import React, { FC } from 'react';
import { Neomorph } from 'react-native-neomorph-shadows';

const ViewNeomorph = ({
  style,
  children,
  onPress,
}: {
  style: object;
  children: FC<any>;
  onPress: () => void;
}) => {
  const WindowsWidth = Dimensions.get('window').width;
  const defaultStyle = {
    shadowOpacity: 1,
    shadowRadius: 4,
    borderRadius: 15,
    backgroundColor: '#EAF0F5',
    width: WindowsWidth * 0.85,
    height: 50,
    padding: 15,
  };
  const combineStyles = StyleSheet.flatten([defaultStyle, style]);
  return (
    <Pressable onPress={onPress}>
      <Neomorph
        swapShadows // <- change zIndex of each shadow color
        darkShadowColor="#89AFCF" // <- set this
        lightShadowColor="#FFFFFF" // <- this
        style={combineStyles}>
        {children}
        {/* <Text style={{ color: COLORS.DARKGREYCOLOR, fontSize: 16 }}>{text}</Text> */}
      </Neomorph>
    </Pressable>
  );
};

export default ViewNeomorph;
