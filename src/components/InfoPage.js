import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { 
  SafeZone, TitleBar
} from './Styles';


const InfoPage = () => {
  const{id} = useParams()
  const [emergencias, setEmergencia] = useState([]);

  useEffect(() => {
    let fetchData = async() => {
      let data = await fetch(`https://backendservicioscloud.azurewebsites.net/Emergencia/${id}`);
      let final = await data.json();
      setEmergencia(final)
    }
    fetchData()
  }, [id])
  
  return (
    <>
      <SafeZone>
          <TitleBar>
          <p style={{background:"black"}}>{emergencias.emergencia[0].nombre}</p>
          </TitleBar>
      </SafeZone>
    </>
  );
  
};
  


export default InfoPage;