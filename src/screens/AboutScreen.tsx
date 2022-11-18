import { View, Text, Linking } from 'react-native';
import React from 'react';
import { COLORS } from '../theme';

const AboutScreen = () => {
  const onLinkClick = () =>
    Linking.openURL('https://www.linkedin.com/in/daniel-shaban/').catch(err =>
      console.error('An error occurred', err),
    );
  const onPrivClick = () =>
    Linking.openURL(
      'https://www.termsfeed.com/live/cfd847d2-4794-4893-a922-88c627a97f52',
    ).catch(err => console.error('An error occurred', err));

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.MAINCOLOR, padding: 30 }}>
      <Text>
        Hey 👋 {'\n'}
        My name is Daniel Shaban. I'm a React Native Developer Looking for a job
        in Canada.{'\n'}
        You can reach me here: {'\n'}
        <Text style={{ color: 'blue' }} onPress={onLinkClick}>
          linkedin.com/in/daniel-shaban/
        </Text>{' '}
        {'\n'}I came up with the idea of this application after my password got
        into the leaked password databases for the third time and it became
        unsafe to use it. I had to change it everywhere... With this
        application, I can always generate my password and remember only 1 key.{' '}
        {'\n'}
        This app doesn’t have a server-side. That means I don’t collect
        passwords that you generate.
        {'\n'}
        {'\n'}
        If you like my app and want to help me, you can refer me to help me get
        hired as frontend developer (React/Raect Native) or as a Back-end
        developer (Node.js, express)
        {'\n'}
        {'\n'}
        <Text style={{ color: 'blue' }} onPress={onPrivClick}>
          Privacy Policy
        </Text>{' '}
      </Text>
    </View>
  );
};

export default AboutScreen;
