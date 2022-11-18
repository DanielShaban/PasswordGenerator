import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation/Navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from './src/theme';

export default function App() {
  const [onBoarded, setOnBoarded] = React.useState(false);
  React.useEffect(() => {
    getStorage();
  }, []);

  const getStorage = async () => {
    const isOnBoarded = (await AsyncStorage.getItem('ONBOARDED')) ?? '';
    // The value for key "ONBOARDED" must be a string.
    setOnBoarded(JSON.parse(isOnBoarded));
  };

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={COLORS.MAINCOLOR} barStyle={'dark-content'} />
      <NavigationContainer>
        <Navigator onBoarded={onBoarded} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
