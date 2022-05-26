import React from 'react';
import {
  Map,
  TitleBar,
  Title,
  Integrants, 
} from './Styles';
  
const MapPage = () => {
  return (
    <>
      <TitleBar>
        <p>Contacto Médico</p>
      </TitleBar>
      <Title>
        <p>Hospitales Cercanos</p>
      </Title>
      <Map>
        <iframe width="100%" height="500" style={{borderRadius: '10px',}} title='MapaHospitales' id="gmap_canvas" src="https://maps.google.com/maps?q=hospital%20queretaro&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </Map>
      <Integrants>
        <p>Integrantes:</p>
        <p>↓</p>
        <p>García Vargas Michell Alejandro - 259663</p>
        <p>Jiménez Elizalde Andrés - 259678</p>
        <p>León Pulin Daniel - 260541</p>
        <p>Salazar Castillo Guadalupe - 261540</p>
      </Integrants>
    </>
  );
};
  
export default MapPage;