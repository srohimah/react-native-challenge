import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import ListImage from './src/components/ListImage'
import DetailImage from './src/components/Detail'
import Other from './src/components/Other'
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
      // <Navigator/>
    );
  }
}
const RootStack = StackNavigator(
  {
    Home: {
      screen: ListImage,
    },
    Details: {
      screen: DetailImage,
    },
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
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

// export default TabNavigator(
//   {
//     Home: { screen: ListImage },
//     Settings: { screen: Other },
//   },
//   {
//     tabBarComponent: TabBarBottom,
//     tabBarPosition: 'bottom',
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//     },
//     animationEnabled: false,
//     swipeEnabled: false,
//   }
// );