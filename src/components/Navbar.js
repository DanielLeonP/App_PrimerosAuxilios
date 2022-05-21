import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import { HomeScreenNavigation } from './CustomNavigation';
// import HomePage from './HomePage';
import MapPage from './MapPage';

//Screen names
const homeName = "Home";
const mapName = "Map";

const Tab = createBottomTabNavigator();

function Navbar() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName={homeName}
        screenOptions={({ route }) => (
          {
            "tabBarActiveTintColor": "#fff",
            "tabBarInactiveTintColor": "#000",
            "tabBarActiveBackgroundColor": "#05C46B",
            "tabBarInactiveBackgroundColor": "#05C46B",
            "tabBarLabelStyle": {
              "paddingBottom": 3
            },
            "tabBarStyle": [
              {
                "display": "flex"
              },
              null
            ]
          }, {
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === mapName) {
              iconName = focused ? 'fitness' : 'fitness-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name={homeName} component={HomeScreenNavigation} options={{title: "Primeros Auxilios", headerStyle: { backgroundColor: '#05C46B', height: 0,}, headerTintColor: '#fff', headerTitleAlign: "center", headerTitleStyle: {fontSize: 1}}} />
        <Tab.Screen name={mapName} component={MapPage} options={{title: "Contacto Médico", headerStyle: { backgroundColor: '#05C46B',}, headerTintColor: '#fff', headerTitleAlign: "center", headerTitleStyle: {fontSize: 26}}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navbar;
