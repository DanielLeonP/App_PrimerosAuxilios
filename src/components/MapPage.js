import * as React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

export default function MapPage({ navigation }) {
    return (
        <ScrollView style={styles.scroller} >
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', paddingBottom: 20, paddingTop: 20 }}>Hospitales Cercanos</Text>
                <Image style={{ height: 350 }} source={require('../images/mapa.jpg')} />
                <Text style={{ fontSize: 25, fontWeight: 'bold', paddingBottom: 20, paddingTop: 20 }}>Contacto Médico</Text>
                <Text style={{ fontSize: 23, paddingBottom: 5 }}>Nacional América - 911</Text>
                <Text style={{ fontSize: 23 }}>Unión Europea - 112</Text>
                <Text style={{ paddingTop: 15, fontSize: 40 }}>↓</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', paddingBottom: 10, paddingTop: 20 }}>Integrantes:</Text>
                <Text style={{ fontSize: 16, color: 'grey', paddingBottom: 2 }}>García Vargas Michell Alejandro - 259663</Text>
                <Text style={{ fontSize: 16, color: 'grey', paddingBottom: 2 }}>Jiménez Elizalde Andrés - 259678</Text>
                <Text style={{ fontSize: 16, color: 'grey', paddingBottom: 2 }}>León Pulin Daniel - 260541</Text>
                <Text style={{ fontSize: 16, color: 'grey', paddingBottom: 2 }}>Salazar Castillo Guadalupe - 261540</Text>
                <Text style={{ paddingBottom: 20 }}></Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scroller: {
      flex: 1,
    }
});