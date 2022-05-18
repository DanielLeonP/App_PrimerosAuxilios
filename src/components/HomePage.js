import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import EmergencyCard from './EmergencyCard';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.scroller}>
          {/* <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Emergency" component={EmergencyPage} />
            </Stack.Navigator>
          </NavigationContainer> */}
          <EmergencyCard></EmergencyCard>
          <Text></Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  scroller: {
    flex: 1,
  }
});
