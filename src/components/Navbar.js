import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomePage from './HomePage';
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
        screenOptions={({ route }) => ({
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
        })}
        tabBarOptions={{
          activeTintColor: '#fff',
          activeBackgroundColor: '#05C46B',
          inactiveBackgroundColor: '#05C46B',
          inactiveTintColor: '#000',
          labelStyle: { paddingBottom: 3 },
          style: { paddingTop: 20 }
        }} >
        <Tab.Screen name={homeName} component={HomePage} options={{title: "Primeros Auxilios", headerStyle: { backgroundColor: '#05C46B',}, headerTintColor: '#fff', headerTitleAlign: "center", headerTitleStyle: {fontSize: 26}}} />
        <Tab.Screen name={mapName} component={MapPage} options={{title: "Contacto Médico", headerStyle: { backgroundColor: '#05C46B',}, headerTintColor: '#fff', headerTitleAlign: "center", headerTitleStyle: {fontSize: 26}}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navbar;
