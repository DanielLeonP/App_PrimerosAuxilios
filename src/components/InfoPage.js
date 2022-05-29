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
                      <p style={{textAlign:"justify", marginTop:"1.5%", marginLeft:"4%"}}>{final.tratamiento[3].tratamiento}</p>
                      <p style={{textAlign:"justify", marginTop:"1.5%", marginLeft:"4%"}}>{final.tratamiento[4].tratamiento}</p>
                      <p style={{textAlign:"justify", marginTop:"1.5%", marginLeft:"4%"}}>{final.tratamiento[5].tratamiento}</p>
                    </div>
                    <Divisor style={{height:"68%"}}></Divisor>
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
                  <iframe style={{marginLeft:"16%", marginTop:"-2%", paddingBottom:"8%", border:"none"}} width="67%" height="397vh" src={final.emergencia[0].video}></iframe>
                </Video>
              </div>
            )
          }
        setEmergencia(emergenciasBody)
        break;

        case 2:
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
                      <img style={{marginLeft:"22.5%",width:"48%"}} src={final.imagen[0].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"-2.5%"}}>{final.tratamiento[2].tratamiento}</p>
                      <p style={{textAlign:"justify", marginTop:"1.5%"}}>{final.tratamiento[3].tratamiento}</p>
                      <p style={{textAlign:"justify", marginTop:"1.5%", marginLeft:"4%"}}>{final.tratamiento[4].tratamiento}</p>
                      <img style={{marginTop:"4.5%", marginLeft:"20%",width:"60%"}} src={final.imagen[1].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%", marginLeft:"4%"}}>{final.tratamiento[5].tratamiento}</p>
                      <img style={{marginLeft:"20%",width:"60%"}} src={final.imagen[2].imagen} alt="Imagen"></img>
                    </div>
                    <Divisor style={{height:"172%"}}></Divisor>
                    <div style={{marginLeft:"52.6%", width:"47.5%"}}>
                      <p style={{textAlign:"justify", marginTop:"-7%"}}>{final.tratamiento[6].tratamiento}</p>
                      <img style={{marginTop:"-3%", marginLeft:"20%",width:"60%"}} src={final.imagen[3].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%"}}>{final.tratamiento[7].tratamiento}</p>
                      <img style={{marginTop:"-4.5%", marginLeft:"20%",width:"60%"}} src={final.imagen[4].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"6%"}}>{final.tratamiento[8].tratamiento}</p>
                      <img style={{marginTop:"-4%", marginLeft:"20%",width:"60%"}} src={final.imagen[5].imagen} alt="Imagen"></img>
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
                      <li style={{marginLeft:"2.4%"}}>{final.recomendacion[3].recomendacion}</li>
                    </ul>
                </Recomendacion>
                <Video>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Video</p>
                  </Title>
                  <iframe style={{marginLeft:"16%", marginTop:"-2%", paddingBottom:"8%", border:"none"}} width="67%" height="397vh" src={final.emergencia[0].video}></iframe>
                </Video>
              </div>
            )
          }
        setEmergencia(emergenciasBody)
        break;

        case 3:
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
                      <img style={{marginLeft:"22%",width:"57%"}} src={final.imagen[0].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%"}}>{final.tratamiento[1].tratamiento}</p>
                      <img style={{marginTop:"4.5%", marginLeft:"22%",width:"57%"}} src={final.imagen[1].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"6%"}}>{final.tratamiento[2].tratamiento}</p>
                      <img style={{marginTop:"4.5%", marginLeft:"22%",width:"57%"}} src={final.imagen[2].imagen} alt="Imagen"></img>
                    </div>
                    <Divisor style={{height:"143%"}}></Divisor>
                    <div style={{marginLeft:"52.6%", width:"47.5%"}}>
                      <p style={{textAlign:"justify", marginTop:"-7%"}}>{final.tratamiento[3].tratamiento}</p>
                      <img style={{marginLeft:"22.5%",width:"57%"}} src={final.imagen[3].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"4.3%"}}>{final.tratamiento[4].tratamiento}</p>
                      <p style={{textAlign:"justify", marginTop:"5%"}}>{final.tratamiento[5].tratamiento}</p>
                      <img style={{marginLeft:"22.5%",marginTop:"3%",width:"57%"}} src={final.imagen[4].imagen} alt="Imagen"></img>
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
                      <li style={{marginLeft:"2.4%"}}>{final.recomendacion[3].recomendacion}</li>
                    </ul>
                </Recomendacion>
                <Video>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Video</p>
                  </Title>
                  <iframe style={{marginLeft:"16.5%", marginTop:"-2%", paddingBottom:"8%", border:"none"}} width="65.6%" height="397vh" src={final.emergencia[0].video}></iframe>
                </Video>
              </div>
            )
          }
        setEmergencia(emergenciasBody)
        break;

        case 4:
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
                      <img style={{marginLeft:"21.9%",width:"57%", marginTop:"4%"}} src={final.imagen[0].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%"}}>{final.tratamiento[2].tratamiento}</p>
                      <img style={{marginTop:"1.5%", marginLeft:"20%",width:"60%"}} src={final.imagen[1].imagen} alt="Imagen"></img>
                    </div>
                    <Divisor style={{height:"153%"}}></Divisor>
                    <div style={{marginLeft:"52.6%", width:"47.5%"}}>
                      <p style={{textAlign:"justify", marginTop:"-7%"}}>{final.tratamiento[3].tratamiento}</p>
                      <img style={{marginLeft:"20%",width:"60%"}} src={final.imagen[2].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%"}}>{final.tratamiento[4].tratamiento}</p>
                    </div>
                </Tratamiento>
                <Recomendacion>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Recomendaciones</p>
                  </Title>
                    <ul>
                      <li style={{marginLeft:"2.4%", marginTop:"-3.3%"}}>{final.recomendacion[0].recomendacion}</li>
                      <li style={{marginLeft:"2.4%"}}>{final.recomendacion[1].recomendacion}</li>
                    </ul>
                </Recomendacion>
                <Video>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Video</p>
                  </Title>
                  <iframe style={{marginLeft:"16%", marginTop:"-2%", paddingBottom:"8%", border:"none"}} width="67%" height="397vh" src={final.emergencia[0].video}></iframe>
                </Video>
              </div>
            )
          }
        setEmergencia(emergenciasBody)
        break;

        case 5:
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
                      <img style={{marginTop:"2%", marginLeft:"26.5%",width:"48%"}} src={final.imagen[0].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%"}}>{final.tratamiento[2].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"15%",width:"70%"}} src={final.imagen[1].imagen} alt="Imagen"></img>
                    </div>
                    <Divisor style={{height:"127.5%"}}></Divisor>
                    <div style={{marginLeft:"52.6%", width:"47.5%"}}>
                      <p style={{textAlign:"justify", marginTop:"-6.8%"}}>{final.tratamiento[3].tratamiento}</p>
                      <p style={{textAlign:"justify", marginTop:"1.5%"}}>{final.tratamiento[4].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"20%",width:"60%"}} src={final.imagen[2].imagen} alt="Imagen"></img>
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
                      <li style={{marginLeft:"2.4%"}}>{final.recomendacion[3].recomendacion}</li>
                      <li style={{marginLeft:"2.4%"}}>{final.recomendacion[4].recomendacion}</li>
                    </ul>
                </Recomendacion>
                <Video>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Video</p>
                  </Title>
                  <iframe style={{marginLeft:"16%", marginTop:"-2%", paddingBottom:"8%", border:"none"}} width="67%" height="397vh" src={final.emergencia[0].video}></iframe>
                </Video>
              </div>
            )
          }
        setEmergencia(emergenciasBody)
        break;

        case 6:
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
                      <p style={{textAlign:"justify", marginTop:"1.5%", marginLeft:"4%"}}>{final.tratamiento[2].tratamiento}</p>
                      <p style={{textAlign:"justify", marginTop:"1.5%", marginLeft:"4%"}}>{final.tratamiento[3].tratamiento}</p>
                      <p style={{textAlign:"justify", marginTop:"1.5%", marginLeft:"4%"}}>{final.tratamiento[4].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"23%",width:"57%"}} src={final.imagen[0].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%", marginLeft:"4%"}}>{final.tratamiento[5].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"23%",width:"57%"}} src={final.imagen[1].imagen} alt="Imagen"></img>
                    </div>
                    <Divisor style={{height:"154%"}}></Divisor>
                    <div style={{marginLeft:"52.6%", width:"47.5%"}}>
                      <p style={{textAlign:"justify", marginTop:"-7%"}}>{final.tratamiento[6].tratamiento}</p>
                      <img style={{marginTop:"1%", marginLeft:"23%",width:"57%"}} src={final.imagen[2].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%"}}>{final.tratamiento[7].tratamiento}</p>
                      <p style={{textAlign:"justify", marginTop:"1.5%",marginLeft:"7%"}}>{final.tratamiento[8].tratamiento}</p>
                      <p style={{textAlign:"justify", marginTop:"1.5%",marginLeft:"7%"}}>{final.tratamiento[9].tratamiento}</p>
                      <p style={{textAlign:"justify", marginTop:"1.5%",marginLeft:"7%"}}>{final.tratamiento[10].tratamiento}</p>
                    </div>
                </Tratamiento>
                <Recomendacion>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Recomendaciones</p>
                  </Title>
                    <ul>
                      <li style={{marginLeft:"2.4%", marginTop:"-3.3%"}}>{final.recomendacion[0].recomendacion}</li>
                      <li style={{marginLeft:"2.4%"}}>{final.recomendacion[1].recomendacion}</li>
                    </ul>
                </Recomendacion>
                <Video>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Video</p>
                  </Title>
                  <iframe style={{marginLeft:"16%", marginTop:"-2%", paddingBottom:"8%", border:"none"}} width="67%" height="397vh" src={final.emergencia[0].video}></iframe>
                </Video>
              </div>
            )
          }
        setEmergencia(emergenciasBody)
        break;

        case 7:
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
                      <img style={{marginTop:"2%", marginLeft:"20%",width:"60%"}} src={final.imagen[0].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%"}}>{final.tratamiento[1].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"20%",width:"60%"}} src={final.imagen[1].imagen} alt="Imagen"></img>
                    </div>
                    <Divisor style={{height:"108%"}}></Divisor>
                    <div style={{marginLeft:"52.6%", width:"47.5%"}}>
                      <p style={{textAlign:"justify", marginTop:"-7%"}}>{final.tratamiento[2].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"20%",width:"60%"}} src={final.imagen[2].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%"}}>{final.tratamiento[3].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"20%",width:"60%"}} src={final.imagen[3].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%"}}>{final.tratamiento[4].tratamiento}</p>
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
                      <li style={{marginLeft:"2.4%"}}>{final.recomendacion[3].recomendacion}</li>
                      <li style={{marginLeft:"2.4%"}}>{final.recomendacion[4].recomendacion}</li>
                    </ul>
                </Recomendacion>
                <Video>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Video</p>
                  </Title>
                  <iframe style={{marginLeft:"16%", marginTop:"-2%", paddingBottom:"8%", border:"none"}} width="67%" height="397vh" src={final.emergencia[0].video}></iframe>
                </Video>
              </div>
            )
          }
        setEmergencia(emergenciasBody)
        break;

        case 8:
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
                      <img style={{marginTop:"2%", marginLeft:"20%",width:"60%"}} src={final.imagen[0].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%"}}>{final.tratamiento[2].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"20%",width:"60%"}} src={final.imagen[1].imagen} alt="Imagen"></img>
                    </div>
                    <Divisor style={{height:"105%"}}></Divisor>
                    <div style={{marginLeft:"52.6%", width:"47.5%"}}>
                      <p style={{textAlign:"justify", marginTop:"-7%"}}>{final.tratamiento[3].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"20%",width:"60%"}} src={final.imagen[2].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%"}}>{final.tratamiento[4].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"22%",width:"57%"}} src={final.imagen[3].imagen} alt="Imagen"></img>
                    </div>
                </Tratamiento>
                <Recomendacion>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Recomendaciones</p>
                  </Title>
                    <ul>
                      <li style={{marginLeft:"2.4%", marginTop:"-3.3%"}}>{final.recomendacion[0].recomendacion}</li>
                      <li style={{marginLeft:"2.4%"}}>{final.recomendacion[1].recomendacion}</li>
                    </ul>
                </Recomendacion>
                <Video>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Video</p>
                  </Title>
                  <iframe style={{marginLeft:"16%", marginTop:"-2%", paddingBottom:"8%", border:"none"}} width="67%" height="397vh" src={final.emergencia[0].video}></iframe>
                </Video>
              </div>
            )
          }
        setEmergencia(emergenciasBody)
        break;

        case 9:
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
                      <p style={{textAlign:"justify", marginTop:"1.5%", marginLeft:"4%"}}>{final.tratamiento[2].tratamiento}</p>
                      <img style={{marginLeft:"21%",width:"57%"}} src={final.imagen[0].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"1.5%", marginLeft:"4%"}}>{final.tratamiento[3].tratamiento}</p>
                      <img style={{marginTop:"4.5%", marginLeft:"22.5%",width:"55%"}} src={final.imagen[1].imagen} alt="Imagen"></img>
                    </div>
                    <Divisor style={{height:"147%"}}></Divisor>
                    <div style={{marginLeft:"52.6%", width:"47.5%"}}>
                      <p style={{textAlign:"justify", marginTop:"-7%"}}>{final.tratamiento[4].tratamiento}</p>
                      <img style={{marginTop:"-4.5%", marginLeft:"20%",width:"60%"}} src={final.imagen[2].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"1%"}}>{final.tratamiento[5].tratamiento}</p>
                      <img style={{marginLeft:"20%",width:"60%"}} src={final.imagen[3].imagen} alt="Imagen"></img>
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
                      <li style={{marginLeft:"2.4%"}}>{final.recomendacion[3].recomendacion}</li>
                      <li style={{marginLeft:"2.4%"}}>{final.recomendacion[4].recomendacion}</li>
                    </ul>
                </Recomendacion>
                <Video>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Video</p>
                  </Title>
                  <iframe style={{marginLeft:"16%", marginTop:"-2%", paddingBottom:"8%", border:"none"}} width="67%" height="397vh" src={final.emergencia[0].video}></iframe>
                </Video>
              </div>
            )
          }
        setEmergencia(emergenciasBody)
        break;

        case 10:
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
                      <img style={{marginLeft:"21%",width:"57%"}} src={final.imagen[0].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%"}}>{final.tratamiento[1].tratamiento}</p>
                      <p style={{textAlign:"justify", marginTop:"1.5%"}}>{final.tratamiento[2].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"21%",width:"57%"}} src={final.imagen[1].imagen} alt="Imagen"></img>
                    </div>
                    <Divisor style={{height:"96%"}}></Divisor>
                    <div style={{marginLeft:"52.6%", width:"47.5%"}}>
                      <p style={{textAlign:"justify", marginTop:"-7%"}}>{final.tratamiento[3].tratamiento}</p>
                      <p style={{textAlign:"justify", marginTop:"1.5%"}}>{final.tratamiento[4].tratamiento}</p>
                      <img style={{marginTop:"2.5%", marginLeft:"21%",width:"57%"}} src={final.imagen[2].imagen} alt="Imagen"></img>
                    </div>
                </Tratamiento>
                <Recomendacion>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Recomendaciones</p>
                  </Title>
                    <ul>
                      <li style={{marginLeft:"2.4%", marginTop:"-3.3%"}}>{final.recomendacion[0].recomendacion}</li>
                      <li style={{marginLeft:"2.4%"}}>{final.recomendacion[1].recomendacion}</li>
                    </ul>
                </Recomendacion>
                <Video>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Video</p>
                  </Title>
                  <iframe style={{marginLeft:"16%", marginTop:"-2%", paddingBottom:"8%", border:"none"}} width="67%" height="397vh" src={final.emergencia[0].video}></iframe>
                </Video>
              </div>
            )
          }
        setEmergencia(emergenciasBody)
        break;

        case 11:
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
                      <img style={{marginTop:"2%", marginLeft:"21%",width:"57%"}} src={final.imagen[0].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%"}}>{final.tratamiento[1].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"21%",width:"57%"}} src={final.imagen[1].imagen} alt="Imagen"></img>
                    </div>
                    <Divisor style={{height:"106%"}}></Divisor>
                    <div style={{marginLeft:"52.6%", width:"47.5%"}}>
                      <p style={{textAlign:"justify", marginTop:"-7%"}}>{final.tratamiento[2].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"21%",width:"57%"}} src={final.imagen[2].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%"}}>{final.tratamiento[3].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"21%",width:"57%"}} src={final.imagen[3].imagen} alt="Imagen"></img>
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
                      <li style={{marginLeft:"2.4%"}}>{final.recomendacion[3].recomendacion}</li>
                    </ul>
                </Recomendacion>
                <Video>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Video</p>
                  </Title>
                  <iframe style={{marginLeft:"31%", marginTop:"-2%", paddingBottom:"8%", border:"none"}} width="37.7%" height="397vh" src={final.emergencia[0].video}></iframe>
                </Video>
              </div>
            )
          }
        setEmergencia(emergenciasBody)
        break;

        case 12:
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
                      <img style={{marginTop:"2%", marginLeft:"21%",width:"57%"}} src={final.imagen[0].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%"}}>{final.tratamiento[3].tratamiento}</p>
                      <p style={{textAlign:"justify", marginTop:"1.5%"}}>{final.tratamiento[4].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"21%",width:"57%"}} src={final.imagen[1].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%"}}>{final.tratamiento[5].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"21%",width:"57%"}} src={final.imagen[2].imagen} alt="Imagen"></img>
                    </div>
                    <Divisor style={{height:"192%"}}></Divisor>
                    <div style={{marginLeft:"52.6%", width:"47.5%"}}>
                      <p style={{textAlign:"justify", marginTop:"-7%"}}>{final.tratamiento[6].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"21%",width:"57%"}} src={final.imagen[3].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%"}}>{final.tratamiento[7].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"21%",width:"57%"}} src={final.imagen[4].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%"}}>{final.tratamiento[8].tratamiento}</p>
                      <img style={{marginTop:"4.5%", marginLeft:"20.5%",width:"59%"}} src={final.imagen[5].imagen} alt="Imagen"></img>
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
                      <li style={{marginLeft:"2.4%"}}>{final.recomendacion[3].recomendacion}</li>
                    </ul>
                </Recomendacion>
                <Video>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Video</p>
                  </Title>
                  <iframe style={{marginLeft:"16%", marginTop:"-2%", paddingBottom:"8%", border:"none"}} width="67%" height="397vh" src={final.emergencia[0].video}></iframe>
                </Video>
              </div>
            )
          }
        setEmergencia(emergenciasBody)
        break;

        case 13:
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
                      <img style={{marginLeft:"19%",width:"60%"}} src={final.imagen[0].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"4%"}}>{final.tratamiento[2].tratamiento}</p>
                      <img style={{marginTop:"2.5%", marginLeft:"21.3%",width:"57%"}} src={final.imagen[1].imagen} alt="Imagen"></img>
                    </div>
                    <Divisor style={{height:"104%"}}></Divisor>
                    <div style={{marginLeft:"52.6%", width:"47.5%"}}>
                      <p style={{textAlign:"justify", marginTop:"-7%"}}>{final.tratamiento[3].tratamiento}</p>
                      <img style={{marginLeft:"20%",width:"53%"}} src={final.imagen[2].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"2%"}}>{final.tratamiento[4].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"21%",width:"57%"}} src={final.imagen[3].imagen} alt="Imagen"></img>
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
                      <li style={{marginLeft:"2.4%"}}>{final.recomendacion[3].recomendacion}</li>
                    </ul>
                </Recomendacion>
                <Video>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Video</p>
                  </Title>
                  <iframe style={{marginLeft:"16%", marginTop:"-2%", paddingBottom:"8%", border:"none"}} width="67%" height="397vh" src={final.emergencia[0].video}></iframe>
                </Video>
              </div>
            )
          }
        setEmergencia(emergenciasBody)
        break;

        case 14:
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
                      <img style={{marginTop:"2%", marginLeft:"20%",width:"60%"}} src={final.imagen[0].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%"}}>{final.tratamiento[1].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"20%",width:"60%"}} src={final.imagen[1].imagen} alt="Imagen"></img>
                    </div>
                    <Divisor style={{height:"93%"}}></Divisor>
                    <div style={{marginLeft:"52.6%", width:"47.5%"}}>
                      <p style={{textAlign:"justify", marginTop:"-7%"}}>{final.tratamiento[2].tratamiento}</p>
                      <p style={{textAlign:"justify", marginTop:"1.5%"}}>{final.tratamiento[3].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"20%",width:"60%"}} src={final.imagen[2].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%"}}>{final.tratamiento[4].tratamiento}</p>
                      <p style={{textAlign:"justify", marginTop:"1.5%"}}>{final.tratamiento[5].tratamiento}</p>
                      <p style={{textAlign:"justify", marginTop:"1.5%"}}>{final.tratamiento[6].tratamiento}</p>
                      <p style={{textAlign:"justify", marginTop:"1.5%"}}>{final.tratamiento[7].tratamiento}</p>
                    </div>
                </Tratamiento>
                <Recomendacion>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Recomendaciones</p>
                  </Title>
                    <ul>
                      <li style={{marginLeft:"2.4%", marginTop:"-3.3%"}}>{final.recomendacion[0].recomendacion}</li>
                      <li style={{marginLeft:"2.4%"}}>{final.recomendacion[1].recomendacion}</li>
                    </ul>
                </Recomendacion>
                <Video>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Video</p>
                  </Title>
                  <iframe style={{marginLeft:"16%", marginTop:"-2%", paddingBottom:"8%", border:"none"}} width="67.1%" height="397vh" src={final.emergencia[0].video}></iframe>
                </Video>
              </div>
            )
          }
        setEmergencia(emergenciasBody)
        break;

        case 15:
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
                      <img style={{marginTop:"2%", marginLeft:"21%",width:"57%"}} src={final.imagen[0].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%"}}>{final.tratamiento[1].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"21%",width:"57%"}} src={final.imagen[1].imagen} alt="Imagen"></img>
                    </div>
                    <Divisor style={{height:"89%"}}></Divisor>
                    <div style={{marginLeft:"52.6%", width:"47.5%"}}>
                      <p style={{textAlign:"justify", marginTop:"-7%"}}>{final.tratamiento[2].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"21%",width:"57%"}} src={final.imagen[2].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%"}}>{final.tratamiento[3].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"21%",width:"57%"}} src={final.imagen[3].imagen} alt="Imagen"></img>
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
                      <li style={{marginLeft:"2.4%"}}>{final.recomendacion[3].recomendacion}</li>
                    </ul>
                </Recomendacion>
                <Video>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Video</p>
                  </Title>
                  <iframe style={{marginLeft:"24.5%", marginTop:"-2%", paddingBottom:"8%", border:"none"}} width="50.3%" height="397vh" src={final.emergencia[0].video}></iframe>
                </Video>
              </div>
            )
          }
        setEmergencia(emergenciasBody)
        break;

        case 16:
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
                      <img style={{marginTop:"2%", marginLeft:"20%",width:"60%"}} src={final.imagen[0].imagen} alt="Imagen"></img>
                      <p style={{textAlign:"justify", marginTop:"5%"}}>{final.tratamiento[1].tratamiento}</p>
                      <img style={{marginLeft:"21.5%",width:"57%"}} src={final.imagen[1].imagen} alt="Imagen"></img>
                    </div>
                    <Divisor style={{height:"85%"}}></Divisor>
                    <div style={{marginLeft:"52.6%", width:"47.5%"}}>
                      <p style={{textAlign:"justify", marginTop:"-7%"}}>{final.tratamiento[2].tratamiento}</p>
                      <img style={{marginTop:"2%", marginLeft:"21.5%",width:"57%"}} src={final.imagen[2].imagen} alt="Imagen"></img>
                    </div>
                </Tratamiento>
                <Recomendacion>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Recomendaciones</p>
                  </Title>
                    <ul>
                      <li style={{marginLeft:"2.4%", marginTop:"-3.3%"}}>{final.recomendacion[0].recomendacion}</li>
                      <li style={{marginLeft:"2.4%"}}>{final.recomendacion[1].recomendacion}</li>
                    </ul>
                </Recomendacion>
                <Video>
                  <Title>
                    <p style={{marginLeft:"-17.4%", fontWeight:"bold"}}>Video</p>
                  </Title>
                  <iframe style={{marginLeft:"16%", marginTop:"-2%", paddingBottom:"8%", border:"none"}} width="67%" height="397vh" src={final.emergencia[0].video}></iframe>
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