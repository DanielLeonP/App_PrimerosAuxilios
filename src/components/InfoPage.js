import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { 
  Enfermedad,
  Sintoma,
  Video,
  SafeZone, 
  Title, 
  Tratamiento, 
  Divisor,
  Recomendacion
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
                <Enfermedad>
                  <p style={{}}>{final.emergencia[0].nombre}</p>
                </Enfermedad>
                <Sintoma>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Sintomas</p>
                  </Title>
                    <p style={{textAlign:"justify", marginTop:"-3.5%"}}>{final.emergencia[0].sintomas}</p>
                </Sintoma>
                <Tratamiento>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Tratamiento</p>
                  </Title>
                    <div style={{marginTop:"-3.2%", width:"47.5%",float:"left"}}>
                      <p style={{textAlign:"justify"}}>{final.tratamiento[0].tratamiento}</p>
                      <p style={{textAlign:"justify", marginTop:"1.5%"}}>{final.tratamiento[1].tratamiento}</p>
                      <p style={{textAlign:"justify", marginTop:"1.5%"}}>{final.tratamiento[2].tratamiento}</p>
                      <p style={{textAlign:"justify", marginTop:"1.5%", marginLeft:"7%"}}>{final.tratamiento[3].tratamiento}</p>
                      <p style={{textAlign:"justify", marginTop:"1.5%", marginLeft:"7%"}}>{final.tratamiento[4].tratamiento}</p>
                      <p style={{textAlign:"justify", marginTop:"1.5%", marginLeft:"7%"}}>{final.tratamiento[5].tratamiento}</p>
                    </div>
                    <Divisor></Divisor>
                    <div style={{marginLeft:"52.6%", width:"47.5%"}}>
                      <p style={{textAlign:"justify", marginTop:"-7%"}}>{final.tratamiento[6].tratamiento}</p>
                      <p style={{textAlign:"justify", marginTop:"1.5%"}}>{final.tratamiento[7].tratamiento}</p>
                      <img style={{marginTop:"4.5%", marginLeft:"20%",width:"60%"}} src={final.imagen[0].imagen} alt="Imagen"></img>
                    </div>
                </Tratamiento>
                <Recomendacion>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Recomendaciones</p>
                  </Title>
                    <ul>
                      <li style={{marginLeft:"2.4%", marginTop:"-3.3%"}}>{final.recomendacion[0].recomendacion}</li>
                      <li style={{marginLeft:"2.4%"}}>{final.recomendacion[1].recomendacion}</li>
                      <li style={{marginLeft:"2.4%"}}>{final.recomendacion[2].recomendacion}</li>
                    </ul>
                </Recomendacion>
                <Video>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Video</p>
                  </Title>
                  <iframe style={{marginLeft:"22%", marginTop:"-4%", paddingBottom:"10%", border:"none"}} width="580" height="415" src={final.emergencia[0].video}></iframe>
                </Video>
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