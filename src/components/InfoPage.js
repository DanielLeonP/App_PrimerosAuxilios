import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { 
  SafeZone, TitleBar
} from './Styles';

const InfoPage = () => {
  const {id} = useParams()
  const [emergencias, setEmergencia] = useState({});
  const [tratamientos, setTratamiento] = useState({});
  const [recomendaciones, setRecomendacion] = useState({});
  const [imagenes, setImagen] = useState({});

  useEffect(() => {
    let fetchData = async() => {
      let data = await fetch(`https://backendservicioscloud.azurewebsites.net/Emergencia/${id}`);
      let final = await data.json();
      setEmergencia(final.emergencia[0])
      setTratamiento(final.tratamiento[0])
      setRecomendacion(final.recomendacion[0])
      setImagen(final.imagen[0])
    }
    fetchData()
  }, [id])

  return (
    <>
      <SafeZone>
          <TitleBar>
            <p style={{background:"black"}}>{emergencias.nombre}</p>
            <p style={{background:"black"}}>{tratamientos.tratamiento}</p>
          </TitleBar>
      </SafeZone>
    </>
  );
  
};
  
export default InfoPage;