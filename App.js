console.disableYellowBox =  true
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Homepage from './src/screens/Home'
import Detail from './src/screens/Detail'
import Profile from './src/components/Profile'
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Provider} from 'react-redux'
import store from './src/store/index'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

const myProfile = StackNavigator (
  {
    Profiles: {
      screen: Profile
    }
  },
  {
    initialRouteName: 'Profiles',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)
const RootStack = StackNavigator(
  {
    Home: {
      screen: Homepage,
    },
    Details: {
      screen: Detail,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const Navigation = TabNavigator(
  {
    Home: { screen: RootStack },
    Profile: { screen: myProfile },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          return <MaterialCommunityIcons name='home' size={25} color={tintColor} />;
        } else if (routeName === 'Profile') {
          return <MaterialCommunityIcons name='face' size={25} color={tintColor} />;
        }
      },
    }),
    tabBarOptions: {
      style: {
        backgroundColor: '#f4511e',
      },
      activeTintColor: 'white',
      inactiveTintColor: '#BBB',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);