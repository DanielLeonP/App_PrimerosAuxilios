import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

// Estilos del Navbar
export const Nav = styled.nav`
  width: 100%;
  background: white;
  height: 13vh;
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
  text-decoration: none;
  &:hover {
    color: #05C46B;
  }
`;
export const NavButton = styled(Link)`
  height: 60%;
  margin-left: 50%;
  padding: 0 5%;
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
export const Map = styled.div`
  width: 80%;
  box-sizing: border-box;
  color: #fff;
  border-radius: 50px;
  margin: 0 10% 3% 10%;
`;
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
  margin: 3% 10% 0 10%;
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