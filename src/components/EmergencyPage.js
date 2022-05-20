import * as React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Dimensions } from 'react-native';
import { Video } from 'expo-av';

const EmergenciaData = require('../json/emergenciasApp.json');
const {width, height} = Dimensions.get('window');

const EmergencyScreen = ({ route }) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const idEmergencia = route.params.prioridad
    let emergenciasBody = ''

    const newData = EmergenciaData.filter( emergencia => {
      if(emergencia.prioridad == idEmergencia){
          return true
      }else{
          return false
      }
    })

    switch(idEmergencia){
      case 1:
        emergenciasBody = newData.map( emergencia => {
          return (
            <View key={emergencia.prioridad} style={styles.container}>
              <Text style={styles.textBody}>{emergencia.tratamiento}</Text>
              <Image source={require('../images/Paro_Cardiaco/Paro_Cardiaco1.jpg')} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textTitle}>Recomendaciones</Text>
              <Text style={styles.textBody}>{emergencia.recomendaciones}</Text>
              <Text style={styles.textTitle}>Vídeo</Text>
              <Video ref={video} style={styles.video} source={require('../videos/Paro_Cardiaco.mp4')} useNativeControls resizeMode="stretch" isLooping onPlaybackStatusUpdate={status => setStatus(() => status)} />
            </View>
          )
        })
        break;
      case 2:
        emergenciasBody = newData.map( emergencia => {
          return (
            <View key={emergencia.prioridad} style={styles.container}>
              <Text style={styles.textBody}>{emergencia.tratamiento[0]}{emergencia.tratamiento[1]}</Text>
              <Image source={require("../images/Ataque_Corazon_Infarto/Ataque_Corazon_Infarto1.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[2]}{emergencia.tratamiento[3]}{emergencia.tratamiento[4]}</Text>
              <Image source={require("../images/Ataque_Corazon_Infarto/Ataque_Corazon_Infarto2.png")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[5]}</Text>
              <Image source={require("../images/Ataque_Corazon_Infarto/Ataque_Corazon_Infarto3.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[6]}</Text>
              <Image source={require("../images/Ataque_Corazon_Infarto/Ataque_Corazon_Infarto4.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[7]}{emergencia.tratamiento[8]}</Text>
              <Image source={require("../images/Ataque_Corazon_Infarto/Ataque_Corazon_Infarto5.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[9]}</Text>
              <Image source={require("../images/Ataque_Corazon_Infarto/Ataque_Corazon_Infarto6.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textTitle}>Recomendaciones</Text>
              <Text style={styles.textBody}>{emergencia.recomendaciones}</Text>
              <Text style={styles.textTitle}>Vídeo</Text>
              <Video ref={video} style={styles.video} source={require('../videos/Ataque_Corazon_Infarto.mp4')} useNativeControls resizeMode="stretch" isLooping onPlaybackStatusUpdate={status => setStatus(() => status)} />
            </View>
          )
        })
        break;
      case 3:
        emergenciasBody = newData.map( emergencia => {
          return (
            <View key={emergencia.prioridad} style={styles.container}>
              <Text style={styles.textBody}>{emergencia.tratamiento[0]}</Text>
              <Image source={require("../images/Ataque_Convulsivo/Ataque_Convulsivo1.png")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[1]}</Text>
              <Image source={require("../images/Ataque_Convulsivo/Ataque_Convulsivo2.png")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[2]}</Text>
              <Image source={require("../images/Ataque_Convulsivo/Ataque_Convulsivo3.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[3]}</Text>
              <Image source={require("../images/Ataque_Convulsivo/Ataque_Convulsivo4.png")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[4]}{emergencia.tratamiento[5]}</Text>
              <Image source={require("../images/Ataque_Convulsivo/Ataque_Convulsivo5.png")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textTitle}>Recomendaciones</Text>
              <Text style={styles.textBody}>{emergencia.recomendaciones}</Text>
              <Text style={styles.textTitle}>Vídeo</Text>
              <Video ref={video} style={styles.video} source={require('../videos/Ataque_Convulsivo.mp4')} useNativeControls resizeMode="stretch" isLooping onPlaybackStatusUpdate={status => setStatus(() => status)} />
            </View>
          )
        })
        break;
      case 4:
        emergenciasBody = newData.map( emergencia => {
          return (
            <View key={emergencia.prioridad} style={styles.container}>
              <Text style={styles.textBody}>{emergencia.tratamiento[0]}{emergencia.tratamiento[1]}</Text>
              <Image source={require("../images/Atragantamiento_Asfixia/Atragantamiento_Asfixia1.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[2]}</Text>
              <Image source={require("../images/Atragantamiento_Asfixia/Atragantamiento_Asfixia2.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[3]}</Text>
              <Image source={require("../images/Atragantamiento_Asfixia/Atragantamiento_Asfixia3.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[4]}</Text>
              <Text style={styles.textTitle}>Recomendaciones</Text>
              <Text style={styles.textBody}>{emergencia.recomendaciones}</Text>
              <Text style={styles.textTitle}>Vídeo</Text>
              <Video ref={video} style={styles.video} source={require('../videos/Atragantamiento_Asfixia.mp4')} useNativeControls resizeMode="stretch" isLooping onPlaybackStatusUpdate={status => setStatus(() => status)} />
            </View>
          )
        })
        break;
      case 5:
        emergenciasBody = newData.map( emergencia => {
          return (
            <View key={emergencia.prioridad} style={styles.container}>
              <Text style={styles.textBody}>{emergencia.tratamiento[0]}{emergencia.tratamiento[1]}</Text>
              <Image source={require("../images/Choque_Electrico/Choque_Electrico1.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[2]}</Text>
              <Image source={require("../images/Choque_Electrico/Choque_Electrico2.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[3]}{emergencia.tratamiento[4]}</Text>
              <Image source={require("../images/Choque_Electrico/Choque_Electrico3.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textTitle}>Recomendaciones</Text>
              <Text style={styles.textBody}>{emergencia.recomendaciones}</Text>
              <Text style={styles.textTitle}>Vídeo</Text>
              <Video ref={video} style={styles.video} source={require('../videos/Choque_Electrico.mp4')} useNativeControls resizeMode="stretch" isLooping onPlaybackStatusUpdate={status => setStatus(() => status)} />
            </View>
          )
        })
        break;
      case 6:
        emergenciasBody = newData.map( emergencia => {
          return (
            <View key={emergencia.prioridad} style={styles.container}>
              <Text style={styles.textBody}>{emergencia.tratamiento[0]}{emergencia.tratamiento[1]}{emergencia.tratamiento[2]}{emergencia.tratamiento[3]}{emergencia.tratamiento[4]}</Text>
              <Image source={require("../images/Cortaduras_Hemorragias/Cortaduras_Hemorragias1.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[5]}</Text>
              <Image source={require("../images/Cortaduras_Hemorragias/Cortaduras_Hemorragias2.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[6]}</Text>
              <Image source={require("../images/Cortaduras_Hemorragias/Cortaduras_Hemorragias3.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[7]}{emergencia.tratamiento[8]}{emergencia.tratamiento[9]}{emergencia.tratamiento[10]}</Text>
              <Text style={styles.textTitle}>Recomendaciones</Text>
              <Text style={styles.textBody}>{emergencia.recomendaciones}</Text>
              <Text style={styles.textTitle}>Vídeo</Text>
              <Video ref={video} style={styles.video} source={require('../videos/Cortaduras_Hemorragias.mp4')} useNativeControls resizeMode="stretch" isLooping onPlaybackStatusUpdate={status => setStatus(() => status)} />
            </View>
          )
        })
        break;
      case 7:
        emergenciasBody = newData.map( emergencia => {
          return (
            <View key={emergencia.prioridad} style={styles.container}>
              <Text style={styles.textBody}>{emergencia.tratamiento[0]}</Text>
              <Image source={require("../images/Ataque_Asma/Ataque_Asma1.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[1]}</Text>
              <Image source={require("../images/Ataque_Asma/Ataque_Asma2.png")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[2]}</Text>
              <Image source={require("../images/Ataque_Asma/Ataque_Asma3.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[3]}</Text>
              <Image source={require("../images/Ataque_Asma/Ataque_Asma4.png")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[4]}</Text>
              <Text style={styles.textTitle}>Recomendaciones</Text>
              <Text style={styles.textBody}>{emergencia.recomendaciones}</Text>
              <Text style={styles.textTitle}>Vídeo</Text>
              <Video ref={video} style={styles.video} source={require('../videos/Ataque_Asma.mp4')} useNativeControls resizeMode="stretch" isLooping onPlaybackStatusUpdate={status => setStatus(() => status)} />
            </View>
          )
        })
        break;
      case 8:
        emergenciasBody = newData.map( emergencia => {
          return (
            <View key={emergencia.prioridad} style={styles.container}>
              <Text style={styles.textBody}>{emergencia.tratamiento[0]}{emergencia.tratamiento[1]}</Text>
              <Image source={require("../images/Reacciones_Alergicas/Reacciones_Alergicas1.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[2]}</Text>
              <Image source={require("../images/Reacciones_Alergicas/Reacciones_Alergicas2.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[3]}</Text>
              <Image source={require("../images/Reacciones_Alergicas/Reacciones_Alergicas3.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[4]}</Text>
              <Image source={require("../images/Reacciones_Alergicas/Reacciones_Alergicas4.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textTitle}>Recomendaciones</Text>
              <Text style={styles.textBody}>{emergencia.recomendaciones}</Text>
              <Text style={styles.textTitle}>Vídeo</Text>
              <Video ref={video} style={styles.video} source={require('../videos/Reacciones_Alergicas.mp4')} useNativeControls resizeMode="stretch" isLooping onPlaybackStatusUpdate={status => setStatus(() => status)} />
            </View>
          )
        })
        break;
      case 9:
        emergenciasBody = newData.map( emergencia => {
          return (
            <View key={emergencia.prioridad} style={styles.container}>
              <Text style={styles.textBody}>{emergencia.tratamiento[0]}{emergencia.tratamiento[1]}{emergencia.tratamiento[2]}</Text>
              <Image source={require("../images/Intoxicacion_Envenenamiento/Intoxicacion_Envenenamiento1.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[3]}</Text>
              <Image source={require("../images/Intoxicacion_Envenenamiento/Intoxicacion_Envenenamiento2.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[4]}</Text>
              <Image source={require("../images/Intoxicacion_Envenenamiento/Intoxicacion_Envenenamiento3.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[5]}</Text>
              <Image source={require("../images/Intoxicacion_Envenenamiento/Intoxicacion_Envenenamiento4.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textTitle}>Recomendaciones</Text>
              <Text style={styles.textBody}>{emergencia.recomendaciones}</Text>
              <Text style={styles.textTitle}>Vídeo</Text>
              <Video ref={video} style={styles.video} source={require('../videos/Intoxicacion_Envenenamiento.mp4')} useNativeControls resizeMode="stretch" isLooping onPlaybackStatusUpdate={status => setStatus(() => status)} />
            </View>
          )
        })
        break;
      case 10:
        emergenciasBody = newData.map( emergencia => {
          return (
            <View key={emergencia.prioridad} style={styles.container}>
              <Text style={styles.textBody}>{emergencia.tratamiento[0]}</Text>
              <Image source={require("../images/Fracturas_Importantes/Fracturas_Importantes1.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[1]}{emergencia.tratamiento[2]}</Text>
              <Image source={require("../images/Fracturas_Importantes/Fracturas_Importantes2.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[3]}{emergencia.tratamiento[4]}</Text>
              <Image source={require("../images/Fracturas_Importantes/Fracturas_Importantes3.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textTitle}>Recomendaciones</Text>
              <Text style={styles.textBody}>{emergencia.recomendaciones}</Text>
              <Text style={styles.textTitle}>Vídeo</Text>
              <Video ref={video} style={styles.video} source={require('../videos/Fracturas_Importantes.mp4')} useNativeControls resizeMode="stretch" isLooping onPlaybackStatusUpdate={status => setStatus(() => status)} />
            </View>
          )
        })
        break;
      case 11:
        emergenciasBody = newData.map( emergencia => {
          return (
            <View key={emergencia.prioridad} style={styles.container}>
              <Text style={styles.textBody}>{emergencia.tratamiento[0]}</Text>
              <Image source={require("../images/Golpe_Calor_Deshidratacion/Golpe_Calor_Deshidratacion1.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[1]}</Text>
              <Image source={require("../images/Golpe_Calor_Deshidratacion/Golpe_Calor_Deshidratacion2.png")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[2]}</Text>
              <Image source={require("../images/Golpe_Calor_Deshidratacion/Golpe_Calor_Deshidratacion3.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[3]}</Text>
              <Image source={require("../images/Golpe_Calor_Deshidratacion/Golpe_Calor_Deshidratacion4.png")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textTitle}>Recomendaciones</Text>
              <Text style={styles.textBody}>{emergencia.recomendaciones}</Text>
              <Text style={styles.textTitle}>Vídeo</Text>
              <Video ref={video} style={styles.video} source={require('../videos/Golpe_Calor_Deshidratacion.mp4')} useNativeControls resizeMode="stretch" isLooping onPlaybackStatusUpdate={status => setStatus(() => status)} />
            </View>
          )
        })
        break;
      case 12:
        emergenciasBody = newData.map( emergencia => {
          return (
            <View key={emergencia.prioridad} style={styles.container}>
              <Text style={styles.textBody}>{emergencia.tratamiento[0]}{emergencia.tratamiento[1]}{emergencia.tratamiento[2]}</Text>
              <Image source={require("../images/Hipotermia/Hipotermia1.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[3]}{emergencia.tratamiento[4]}{emergencia.tratamiento[4]}</Text>
              <Image source={require("../images/Hipotermia/Hipotermia2.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[5]}</Text>
              <Image source={require("../images/Hipotermia/Hipotermia3.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[6]}</Text>
              <Image source={require("../images/Hipotermia/Hipotermia4.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[7]}</Text>
              <Image source={require("../images/Hipotermia/Hipotermia5.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[8]}</Text>
              <Image source={require("../images/Hipotermia/Hipotermia6.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textTitle}>Recomendaciones</Text>
              <Text style={styles.textBody}>{emergencia.recomendaciones}</Text>
              <Text style={styles.textTitle}>Vídeo</Text>
              <Video ref={video} style={styles.video} source={require('../videos/Hipotermia.mp4')} useNativeControls resizeMode="stretch" isLooping onPlaybackStatusUpdate={status => setStatus(() => status)} />
            </View>
          )
        })
        break;
      case 13:
        emergenciasBody = newData.map( emergencia => {
          return (
            <View key={emergencia.prioridad} style={styles.container}>
              <Text style={styles.textBody}>{emergencia.tratamiento[0]}{emergencia.tratamiento[1]}</Text>
              <Image source={require("../images/Quemaduras_Importantes/Quemaduras_Importantes1.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[2]}</Text>
              <Image source={require("../images/Quemaduras_Importantes/Quemaduras_Importantes2.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[3]}</Text>
              <Image source={require("../images/Quemaduras_Importantes/Quemaduras_Importantes3.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[4]}</Text>
              <Image source={require("../images/Quemaduras_Importantes/Quemaduras_Importantes4.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textTitle}>Recomendaciones</Text>
              <Text style={styles.textBody}>{emergencia.recomendaciones}</Text>
              <Text style={styles.textTitle}>Vídeo</Text>
              <Video ref={video} style={styles.video} source={require('../videos/Quemaduras_Importantes.mp4')} useNativeControls resizeMode="stretch" isLooping onPlaybackStatusUpdate={status => setStatus(() => status)} />
            </View>
          )
        })
        break;
      case 14:
        emergenciasBody = newData.map( emergencia => {
          return (
            <View key={emergencia.prioridad} style={styles.container}>
              <Text style={styles.textBody}>{emergencia.tratamiento[0]}</Text>
              <Image source={require("../images/Mordedura_Picadura/Mordedura_Picadura1.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[1]}</Text>
              <Image source={require("../images/Mordedura_Picadura/Mordedura_Picadura2.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[2]}{emergencia.tratamiento[3]}</Text>
              <Image source={require("../images/Mordedura_Picadura/Mordedura_Picadura3.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[4]}{emergencia.tratamiento[5]}{emergencia.tratamiento[6]}{emergencia.tratamiento[7]}</Text>
              <Text style={styles.textTitle}>Recomendaciones</Text>
              <Text style={styles.textBody}>{emergencia.recomendaciones}</Text>
              <Text style={styles.textTitle}>Vídeo</Text>
              <Video ref={video} style={styles.video} source={require('../videos/Mordedura_Picadura.mp4')} useNativeControls resizeMode="stretch" isLooping onPlaybackStatusUpdate={status => setStatus(() => status)} />
            </View>
          )
        })
        break;
      case 15:
        emergenciasBody = newData.map( emergencia => {
          return (
            <View key={emergencia.prioridad} style={styles.container}>
              <Text style={styles.textBody}>{emergencia.tratamiento[0]}</Text>
              <Image source={require("../images/Esguinces/Esguinces1.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[1]}</Text>
              <Image source={require("../images/Esguinces/Esguinces2.png")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[2]}</Text>
              <Image source={require("../images/Esguinces/Esguinces3.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[3]}</Text>
              <Image source={require("../images/Esguinces/Esguinces4.png")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textTitle}>Recomendaciones</Text>
              <Text style={styles.textBody}>{emergencia.recomendaciones}</Text>
              <Text style={styles.textTitle}>Vídeo</Text>
              <Video ref={video} style={styles.video} source={require('../videos/Esguinces.mp4')} useNativeControls resizeMode="stretch" isLooping onPlaybackStatusUpdate={status => setStatus(() => status)} />
            </View>
          )
        })
        break;
      case 16:
        emergenciasBody = newData.map( emergencia => {
          return (
            <View key={emergencia.prioridad} style={styles.container}>
              <Text style={styles.textBody}>{emergencia.tratamiento[0]}</Text>
              <Image source={require("../images/Calambres/Calambres1.jpg")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[1]}</Text>
              <Image source={require("../images/Calambres/Calambres2.png")} style={styles.imagen} resizeMode="stretch" />
              <Text style={styles.textBody}>{emergencia.tratamiento[2]}</Text>
              <Image source={require("../images/Calambres/Calambres3.png")} style={styles.imagen} resizeMode="stretch" />
              
              <Text style={styles.textTitle}>Recomendaciones</Text>
              <Text style={styles.textBody}>{emergencia.recomendaciones}</Text>
              <Text style={styles.textTitle}>Vídeo</Text>
              <Video ref={video} style={styles.video} source={require('../videos/Calambres.mp4')} useNativeControls resizeMode="stretch" isLooping onPlaybackStatusUpdate={status => setStatus(() => status)} />
            </View>
          )
        })
        break;
    }

    return (
      <ScrollView style={styles.scroller}>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Síntomas</Text>
        <Text style={styles.textBody}>{newData[0].sintomas}</Text>
        <Text style={styles.textTitle}>Tratamiento</Text>
        { emergenciasBody }
      </View>
    </ScrollView>
    );
}

export default EmergencyScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 30,
  },
  scroller: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textBody: {
    paddingHorizontal: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  textTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 20,
    paddingTop: 20, 
  },
  imagen: {
    width: width-40,
    height: 270,
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  video: {
    width: width,
    height: 200,
    backgroundColor: '#000',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
});