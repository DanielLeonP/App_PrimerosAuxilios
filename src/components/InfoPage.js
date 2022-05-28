import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { 
  SafeZone, 
  TitleBar
} from './Styles';

const InfoPage = () => {
  const {id} = useParams()
  const emergencyId = parseInt(id, 10)
  let emergenciasBody = ''
  const [emergencias, setEmergencia] = useState('');

  console.log(emergencyId)
  useEffect(() => {
    let fetchData = async() => {
      let data = await fetch(`https://backendservicioscloud.azurewebsites.net/Emergencia/${id}`);
      let final = await data.json();

      switch(emergencyId){
        case 1:
          emergenciasBody = () => {
            return (
              <div>
                <TitleBar>
                  <p>{final.emergencia[0].nombre}</p>
                </TitleBar>
                  <p>Síntomas</p>
                  <p>{final.emergencia[0].sintomas}</p>
                  <p>Tratamiento</p>
                  <p>{final.tratamiento[0].tratamiento}</p>
                  <p>{final.tratamiento[1].tratamiento}</p>
                  <p>{final.tratamiento[2].tratamiento}</p>
                  <p>{final.tratamiento[3].tratamiento}</p>
                  <p>{final.tratamiento[4].tratamiento}</p>
                  <p>{final.tratamiento[5].tratamiento}</p>
                  <p>{final.tratamiento[6].tratamiento}</p>
                  <p>{final.tratamiento[7].tratamiento}</p>
                  <img src={final.imagen[0].imagen} alt="Imagen"></img>
                  <p>Recomendaciones</p>
                  <p>{final.recomendacion[0].recomendacion}</p>
                  <p>{final.recomendacion[1].recomendacion}</p>
                  <p>{final.recomendacion[2].recomendacion}</p>
                  <p>Vídeo</p>
                  {/* <iframe width="420" height="315" src={final.emergencia[0].video}></iframe> */}
                  <iframe src="https://www.youtube.com/embed/vBvMbXjCA14?t=25"></iframe>
              </div>
            )
          }
          setEmergencia(emergenciasBody)
          break;
      }


    }
    fetchData()
  }, [id])

  return (
    <>
      <SafeZone>
          {emergencias}
      </SafeZone>
    </>
  );
  
};
  
export default InfoPage;