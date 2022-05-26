import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

// Estilos del Navbar
export const Nav = styled.nav`
  background: white;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  box-shadow: 0px 0px 14px 2px #E0E0E0;
  z-index: 12;
`;
export const NavLogo = styled(Link)`
  width: 20%;
  cursor: pointer;
  color: #000;
  font-size: 2rem;
  text-decoration: none;
  margin-left: -110px;
  margin-top: -5px;
  font-weight: 600;
  position: absolute;
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
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
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