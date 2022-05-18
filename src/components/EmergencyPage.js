import * as React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

export default function EmergencyScreen({ navigation }) {
    return (
        <ScrollView style={styles.scroller}>
            <Text>Holiiiiiii</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  scroller: {
    flex: 1,
    backgroundColor: '#fff',
  }
});