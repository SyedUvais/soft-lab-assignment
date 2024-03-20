import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screens/home';
import Login from './Screens/login';
import Forgot from './Screens/forgot';
import ResetPassword from './Screens/resetPassword';
import OtpVerification from './Screens/otpVerification';
import Signup from './Screens/signup';
import Signup2 from './Screens/signup2';
const Stack = createNativeStackNavigator();
import Signup3 from './Screens/signup3';
import Signup4 from './Screens/signup4';
import SignupFinal from './Screens/signupFinal';
import WelcomePage from './Screens/WelcomPage';
import { UserProvider } from './Screens/context/userContext';

export default function App() {
  return (
    <>
    <UserProvider>
      <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'
            screenOptions={{
              headerShown: false,
            }}>

          <Stack.Screen name="Home" component={Home}
              options={{
                headerTitle: '',
                }}
            />

            <Stack.Screen name="Log In" component={Login}
            />

            <Stack.Screen name="Forgot" component={Forgot}
            />

            <Stack.Screen name="Otp Verification" component={OtpVerification}
            />

            <Stack.Screen name="Reset Password" component={ResetPassword}
            />

            <Stack.Screen name="Signup" component={Signup}
            />

            <Stack.Screen name="Signup2" component={Signup2}
            />

            <Stack.Screen name="Signup3" component={Signup3}
            />
            <Stack.Screen name="Signup4" component={Signup4}
            />
            <Stack.Screen name="SignupFinal" component={SignupFinal}
            />
            <Stack.Screen name="Welcome Page" component={WelcomePage}
            />

            </Stack.Navigator>
          </NavigationContainer>
    </UserProvider>
    </>
  );
}

