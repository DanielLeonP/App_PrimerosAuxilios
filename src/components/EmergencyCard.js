import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const EmergenciaData = require('../json/emergenciasApp.json');

function EmergencyCard() {
    const navigation = useNavigation();
    const [text, setText] = useState('');

    const newData = EmergenciaData.filter( emergencia => {
        if((emergencia.nombre).toUpperCase().includes(text.toUpperCase())){
            return true
        }else{
            return false
        }
    })

    const Cards = newData.map( emergencia => {
        return(
            <TouchableOpacity activeOpacity={0.1} underlayColor="#0be881" onPress={() => {console.log(emergencia.nombre + " - " + emergencia.prioridad); navigation.navigate('EmergencyScreen', {nombre: emergencia.nombre, prioridad: emergencia.prioridad})}} key={emergencia.prioridad} >
                <Card>
                    <View style={styles.cards} >
                        <Text style={styles.texto} >{emergencia.nombre}</Text>
                        <Icon name='caret-forward-outline' type='ionicon' color='#0f0f0f' />
                    </View>
                </Card>
            </TouchableOpacity>
        );
    })

    return (
        <View>
            <View style={styles.container} >
                <Icon name='search' type='ionicon' color='#fff' style={styles.icono} />
                <TextInput placeholder='Buscar' style={styles.buscador} onChangeText={newText => setText(newText)} defaultValue={text}/>
            </View>
            { Cards }
        </View>
    );
}

export default EmergencyCard;

const styles = StyleSheet.create({
    texto: {
        fontSize: 16, 
        fontFamily: 'sans-serif-medium'
    },
    cards: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    icono: {
        padding: 11,
        paddingLeft: 20,
        backgroundColor: 'grey',
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 25,
        paddingHorizontal: 30,
    },
    buscador: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: 'grey',
        color: '#fff',
        borderBottomRightRadius: 50,
        borderTopRightRadius: 50,
        fontSize: 20,
    }
})