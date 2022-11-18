import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from '../screens/AboutScreen';

import MainScreen from '../screens/MainScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import { COLORS } from '../theme';

const Stack = createStackNavigator();

function Navigator({ onBoarded }) {
  console.log(onBoarded);
  console.log(typeof onBoarded);
  console.log(!!onBoarded);

  return (
    <Stack.Navigator initialRouteName={onBoarded ? 'MainScreen' : 'OnBoarding'}>
      {/* Looks strange nut The value for key "ONBOARDED" MUST be a string. */}
      <Stack.Screen
        name="OnBoarding"
        component={OnBoardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: COLORS.MAINCOLOR },
          title: '',
        }}
      />
    </Stack.Navigator>
  );
}
export default Navigator;
