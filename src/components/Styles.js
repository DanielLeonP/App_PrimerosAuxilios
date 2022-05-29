import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

// Estilos de todas las Páginas
export const SafeZone = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 7%;
`

// Estilos del Navbar
export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  background: white;
  height: 13vh;
  margin-bottom: 10vh;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 14px 2px #E0E0E0;
  z-index: 12;
`;
export const NavLogo = styled(Link)`
  width: 35%;
  align-items: center;
  color: #000;
  font-size: 2rem;
  line-height: 0;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  padding-left: 5%;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
`;
export const NavMenu = styled.div`
  width: 65%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavLink = styled(Link)`
  width: 20%;
  text-align: center;
  height: 100%;
  margin: 0 4%;
  color: #000;
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  &:hover {
    color: #05C46B;
  }
`;
export const NavButton = styled(Link)`
  height: 60%;
  margin-left: 50%;
  padding: 0 6%;
  box-sizzing: border-box;
  color: #000;
  display: flex;
  text-align: center;
  text-decoration: none;
  &:hover {
    color: #05C46B;
  }
`;

// Estilos de los Objetos del Mapa
export const TitleBar = styled.div`
  width: 80%;
  height: 9vh;
  background-color: #05C46B;
  box-sizing: border-box;
  color: #fff;
  line-height: 9vh;
  font-weight: 600;
  font-size: 1.5rem;
  padding: 0 3%;
  border-radius: 10px;
  margin: 4% 10% 0 10%;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
`;
export const Title = styled.div`
  width: 80%;
  height: 4vh;
  box-sizing: border-box;
  color: #000;
  line-height: 4vh;
  font-weight: 600;
  font-size: 1.5rem;
  padding: 0 3%;
  border-radius: 10px;
  margin: 4% 10%;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
`;
export const Map = styled.div`
  width: 80%;
  box-sizing: border-box;
  color: #fff;
  border-radius: 50px;
  margin: 0 10% 3% 10%;
`;
export const Integrants = styled.div`
  width: 100%;
  box-sizing: border-box;
  color: #0f0f0f;
  text-align: center;
  line-height: -10%;
  font-weight: 600;
  font-size: 1rem;
  margin: 5% 0;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
`;

// Estilos de las Card de Emergencia
export const Cards = styled.div`
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 0 2.5rem;
  padding-top: 4%;
  padding-bottom: 4%;
  margin: 0 5%;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
export const Card = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  color: white;
  height: 80%;
`
export const CardTitle = styled.div`
  height: 24%;
  background-color: #05C46B;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  padding: 4% 6%;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
`
export const CardImage = styled.div`
  height: 76%;
  box-sizing: content-box;
`
export const Search = styled.div`
  width: 100%;
  padding: 4% 20% 1% 20%;
  box-sizing: border-box;
  display: flex;
`
export const SearchIcon = styled.div`
  background: #6B6B6B;
  width: 10%;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  display: flex;
  justify-content: center;
  padding: 2% 1%;
`
export const SearchText = styled.div`
  background: #6B6B6B;
  width: 90%;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  display: flex;
  justify-content: center;
  padding: 1% 2% 1% 0;
  .placeholder::-webkit-input-placeholder{
    color: #fff
  }
`

//informacion
export const Enfermedad = styled.div`
  width: 80%;
  height: 9vh;
  background-color: #05C46B;
  box-sizing: border-box;
  color: #fff;
  line-height: 9vh;
  font-weight: 1000;
  font-size: 1.6rem;
  padding: 0 1.5%;
  border-radius: 10px;
  margin: 4% 10% 0 10%;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
`
export const Sintoma = styled.div`
  width: 78%;
  margin: 3% 10% 0 11.05%;
  line-height: 4vh;
  font-size: 1.4rem;
  color:black;
`
export const Tratamiento = styled.div`
  width: 78%;
  margin: 1% 10% 0 11%;
  line-height: 4vh;
  font-size: 1.4rem;
  color:black;
  display: table;
`
export const Recomendacion = styled.div`
width: 78%;
margin: 4% 10% 0 11.05%;
line-height: 5vh;
font-size: 1.4rem;
color:black;
`
export const Video = styled.div`
width: 78%;
margin: 4% 10% 0 11.05%;
line-height: 4vh;
font-size: 1.4rem;
color:black;
`
export const Divisor = styled.div`
 border-left: 0.2px solid #05C46B;
 height:70.9%;
 left: 50%;
 margin-top:-2.7%;
 position: absolute;
`