import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import TextInputNeomorph from './TextInputNeomorph';
import { COLORS } from '../theme';

const TextInputWithNote = ({
  onChangeText,
  value,
  placeholder,
  textNote,
  validator,
}: {
  onChangeText: {
    (value: SetStateAction<string>): void;
    (arg0: string): void;
  };
  value: string;
  placeholder: string;
  textNote: string;
  validator?: () => void | undefined;
}) => {
  let isValid = false;
  if (validator) {
    isValid = validator(value);
  }
  return (
    <View>
      {isValid && <Text style={styles.error}>{isValid}</Text>}
      <TextInputNeomorph
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
      <Text style={styles.textNote}>{textNote}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textNote: {
    paddingHorizontal: 10,
    width: 330,
    color: COLORS.LIGHTGREYCOLOR,
  },
  error: {
    paddingHorizontal: 10,
    width: 330,
    color: 'red',
  },
});

export default TextInputWithNote;
