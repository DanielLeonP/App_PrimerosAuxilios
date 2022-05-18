import React from 'react';
import { Text, View, Pressable, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const EmergenciaData = require('../json/emergenciasApp.json');

class EmergencyCard extends React.Component {
    render() {
        return (
            EmergenciaData.map( emergencia => {
                return(
                    <TouchableOpacity activeOpacity={0.1} underlayColor="#0be881" onPress={() => console.log(emergencia.nombre + " - " + emergencia.prioridad)} key={emergencia.prioridad}>
                        <Card>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}} >
                                <Text style={{fontSize: 16, fontFamily: 'sans-serif-medium'}} >{emergencia.nombre}</Text>
                                <Icon name='caret-forward-outline' type='ionicon' color='#0f0f0f' />
                            </View>
                        </Card>
                    </TouchableOpacity>
                );
            })
        );
    }
}

export default EmergencyCard;