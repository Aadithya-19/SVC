import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import LogInScreen from '../screens/LogInScreen';
import About from '../screens/About';

const stackNavigatorOptions = {
    headerShown: false,
}

const Screens = createStackNavigator({
    Splash: {
        screen: SplashScreen,
    },
    LogIn: {
        screen: LogInScreen,
    },
    Home: {
        screen: HomeScreen,
    },
    About: {
        screen: About,
    },

},
    {
        defaultNavigationOptions: stackNavigatorOptions,
    }
);

export default createAppContainer(Screens);