import * as React from 'react';
import { View, Text, Image } from 'react-native';

export default function MapPage({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', paddingBottom: 20, paddingTop: 20 }}>Hospitales Cercanos</Text>
            <Image style={{ height: 350 }} source={require('../images/mapa.jpg')} />
            <Text style={{ fontSize: 25, fontWeight: 'bold', paddingBottom: 20, paddingTop: 20 }}>Contacto Médico</Text>
            <Text style={{ fontSize: 23, paddingBottom: 5 }}>Nacional América - 911</Text>
            <Text style={{ fontSize: 23 }}>Unión Europea - 112</Text>
        </View>
    );
}