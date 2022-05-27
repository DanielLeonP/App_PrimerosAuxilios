import React, {useEffect, useState} from 'react';
import { 
  SafeZone,
  Cards,
  Card,
  CardTitle,
  CardImage, 
  Search,
  SearchIcon,
  SearchText
} from './Styles';
import next from '../assets/next.png';
import noImage from '../assets/noImage.jpg';
import search from '../assets/search.png';

const url = 'https://backendservicioscloud.azurewebsites.net/';

const HomePage = () => {
  const [emergencia, setEmergencia] = useState([]);
  const [text, setText] = useState('');

  let fetchData = async() => {
    let respuesta = await fetch(url);
    let final = await respuesta.json();
    return final
  }

  useEffect(() => {
    fetchData().then(data => {
      setEmergencia(data);
    })
  }, [])

  const newEmergencia = emergencia.filter( emergency => {
    if((emergency.nombre).toUpperCase().includes(text.toUpperCase())){
        return true
    }else{
        return false
    }
  })

  const newCards = newEmergencia.map( emergency => {
    if(emergency.lenght == 0){
      
    }else{
      return(
        <Card>
          <CardTitle>
            <p>{emergency.nombre}</p>
            <img src={next} style={{width:"7%", cursor:"pointer"}} alt="Next" />
          </CardTitle>
          <CardImage>
            <img src={noImage} style={{width:"100%", height:"100%", borderBottomLeftRadius:"10px", borderBottomRightRadius:"10px"}} alt="Emergency" />
          </CardImage>
        </Card>
      );
    }
  })

  return (
    <>
      <SafeZone>
        <Search>
          <SearchIcon>
            <img src={search} style={{width:"50%", height:"100%"}} alt="Emergency" />
          </SearchIcon>
          <SearchText>
            <input class="placeholder" type="text" placeholder='Buscar' name="Buscar" onChange={newText => setText(newText.target.value)} style={{width:"100%", height:"auto", background:"none", outline:"none", border:"none", fontSize:"1.5rem", color:"#fff", fontFamily:"'Poppins', sans-serif" }} />
          </SearchText>
        </Search>
        <Cards>
          {newCards}
        </Cards>
      </SafeZone>
    </>
  );
};
  
export default HomePage;