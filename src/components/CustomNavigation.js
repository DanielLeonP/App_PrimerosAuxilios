import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import EmergencyScreen from './EmergencyPage'
import HomeScreen from './HomePage'

const Stack = createStackNavigator()

const HomeScreenNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Primeros Auxilios"
                component={HomeScreen}
                options={{headerStyle: { backgroundColor: '#05C46B',}, headerTintColor: '#fff', headerTitleAlign: "center", headerTitleStyle: {fontSize: 26}}}
            />
            <Stack.Screen
                name="EmergencyScreen"
                options={({ route }) => ({ title: ("     " + route.params.nombre), headerStyle: { backgroundColor: '#05C46B',}, headerTintColor: '#fff', headerTitleAlign: "center", headerTitleStyle: {fontSize: 18}})}
                component={EmergencyScreen}
            />
        </Stack.Navigator>
    )
}

export { HomeScreenNavigation }