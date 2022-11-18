import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Animated } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { sha1 } from 'react-native-sha1';
import ButtonNeomorph from '../components/ButtonNeomorph';
import ViewNeomorph from '../components/ViewNeomorph';
import { COLORS } from '../theme';
import Clipboard from '@react-native-clipboard/clipboard';
import TextInputWithNote from '../components/TextInputWithNote';
import mixArray from '../helpers/mixArray';
import hashValidator from '../helpers/hashValidator';
import { TEXTS } from '../consts';
import websiteInpuValidator from '../helpers/websiteInpuValidator';

const MainScreen = () => {
  const [website, setWebsite] = useState('');
  const [password, setPassword] = useState('');
  const [hash, setHash] = useState('');

  const copyToClipboard = () => {
    if (hash) {
      Clipboard.setString(hash);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      });
    }
  };
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // we use this specialChartsList for adding to our password
  useEffect(() => {
    const mixedPasswordArr = mixArray(password, website.toLowerCase());
    const mixedPassword = mixedPasswordArr.join('').replace(/\s/g, '');
    //We remove all spaces for avoiding accidental spaces

    if (website && password) {
      sha1(mixedPassword).then(generatedhash => {
        return hashValidator(generatedhash, setHash);
      });
    } else {
      setHash('');
    }
  }, [password, website]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.menuButtonContainer}>
          <ButtonNeomorph />
        </View>

        <View style={styles.passwoedRow}>
          <View style={styles.hashPosition}>
            <Text>Your Password is</Text>
            <Animated.View style={[styles.copiedView, { opacity: fadeAnim }]}>
              <Text style={styles.copiedText}>Copied</Text>
            </Animated.View>
            <ViewNeomorph style={styles.hashView} onPress={copyToClipboard}>
              <Text>{hash}</Text>
            </ViewNeomorph>
          </View>
        </View>

        <View style={styles.centralizedAndPaddingBot}>
          <TextInputWithNote
            placeholder="website..."
            onChangeText={setWebsite}
            value={website}
            textNote={TEXTS.textNoteWebsite}
            validator={websiteInpuValidator}
          />
        </View>

        <View style={styles.centralizedAndPaddingBot}>
          <ViewNeomorph style={styles.descriptionContainer1}>
            <Text style={styles.textDescription}>{TEXTS.textDescription1}</Text>
          </ViewNeomorph>
        </View>

        <View style={styles.centralizedAndPaddingBot}>
          <TextInputWithNote
            placeholder="your keyword..."
            onChangeText={setPassword}
            value={password}
            textNote={TEXTS.textNoteKey}
          />
        </View>

        <View style={styles.centralizedAndPaddingBot}>
          <ViewNeomorph style={styles.descriptionContainer2}>
            <Text style={styles.textDescription}>{TEXTS.textDescription2}</Text>
          </ViewNeomorph>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  copiedText: {
    fontWeight: '700',
  },
  copiedView: {
    position: 'absolute',
    backgroundColor: '#dadada',
    width: 90,
    height: 25,
    top: -25,
    right: 45,
    zIndex: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hashPosition: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  descriptionContainer1: {
    height: 110,
  },
  descriptionContainer2: {
    height: 130,
  },
  textDescription: {
    color: COLORS.DARKGREYCOLOR,
    fontSize: 16,
  },

  centralizedAndPaddingBot: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  hashView: {
    width: 180,
    height: 40,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButtonContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: '8%',
    paddingVertical: 30,
  },
  container: {
    backgroundColor: COLORS.MAINCOLOR,
    flex: 1,
  },
  passwoedRow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MainScreen;
