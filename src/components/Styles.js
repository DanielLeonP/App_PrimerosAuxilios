import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

// Estilos del Navbar
export const Nav = styled.nav`
  background: white;
  height: 13vh;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0px 0px 14px 2px #E0E0E0;
  z-index: 12;
`;
export const NavLogo = styled(Link)`
  width: 100%;
  align-items: center;
  cursor: pointer;
  color: #000;
  font-size: 2rem;
  text-decoration: none;
  font-weight: 600;
  position: absolute;
  display: flex;
  margin-left:1.5%;
`;
export const NavLink = styled(Link)`
  position:absolute;
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 10%;
  cursor: pointer;
  &:hover {
    color: #05C46B;
  }
`;
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


// Estilos de las Cards de emergencias
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