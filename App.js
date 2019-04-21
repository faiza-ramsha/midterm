import React, { Component } from "react";
import { View, Text , Button, Image } from "react-native";
import { createStackNavigator,  createAppContainer, Header, createBottomTabNavigator } from "react-navigation";





class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    };
  };


  static navigationOptions = {
    title: 'Details',
  };

  render() {
  
  const { navigation } = this.props;
  const itemId = navigation.getParam('itemId', 'NO-ID');
  const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>

        <Button
          title="Professional Experience"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
         <Button
          title="Education"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
         <Button
          title="Personal Info"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
        
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        
      
      </View>
    );
  }
}
class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./src/pic/1.jpg')}
        style={{ width: 40, height: 40, borderRadius:20 }}
      />
    );
  }
}




class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  
   static navigationOptions = {
    title: 'Home',
  };

  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };
    



   render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>FAIZA RAMSHA ALAM</Text>
        
        <Button
          title="About Me"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}


const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    /* Same configuration as before */
  }
);

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
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

 const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
},
{
  initialRouteName: "Home"
  
});
const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
   
  }
}




