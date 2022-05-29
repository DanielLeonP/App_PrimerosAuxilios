import React, {useEffect, useState} from 'react';
import { 
  SafeZone,
  Cards,
  Card,
  CardTitle,
  CardImage, 
  Search,
  SearchIcon,
  SearchText,
  NavLink
} from './Styles';
import next from '../assets/next.png';
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
    return(
      <Card key={emergency.prioridad}>
        <CardTitle>
          <p style={{width:"100%"}}>{emergency.nombre}</p>
          <NavLink 
            to={`/info/${emergency.id_emergencia}`}
            activestyle={{ color:'black' }}>
              <img src={next} style={{width:"40%", cursor:"pointer", marginLeft:"90%"}} alt="Next" />
          </NavLink>
        </CardTitle>
        <CardImage>
          <img src={emergency.iconoImagen} style={{width:"100%", height:"28vh", borderBottomLeftRadius:"10px", borderBottomRightRadius:"10px", objectFit:"fill", borderBottom:"1px solid #05C46B", borderLeft:"1px solid #05C46B", borderRight:"1px solid #05C46B"}} alt="Emergency" />
        </CardImage>
      </Card>
    );
  })

  return (
    <>
      <SafeZone>
        <Search>
          <SearchIcon>
            <img src={search} style={{width:"50%", height:"100%"}} alt="Emergency" />
          </SearchIcon>
          <SearchText>
            <input className="placeholder" type="text" placeholder='Buscar' name="Buscar" onChange={newText => setText(newText.target.value)} style={{width:"100%", height:"auto", background:"none", outline:"none", border:"none", fontSize:"1.5rem", color:"#fff", fontFamily:"'Poppins', sans-serif" }} />
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