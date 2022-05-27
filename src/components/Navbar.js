import React from "react";
import {
    Nav,
    NavLink,
    NavButton,
    NavMenu,
    NavLogo, 
} from './Styles';

const Navbar = () => {
    return (
        <>
           <Nav>
                <NavLogo to="/">  
                    <button style={{width:"55px", height:"55px", background:"#05C46B",
                        border:"none", borderRadius:"100%", marginRight:"7%"}}/>
                    <p>Primeros Auxilios</p>
                </NavLogo>
                <NavMenu>
                    <NavLink 
                    to="/home" 
                    activestyle={{ color:'black' }}>
                        <p>Home</p>
                    </NavLink>
                    <NavLink 
                    to="/map" 
                    activestyle={{ color:'black' }}>
                        <p>Mapa</p>
                    </NavLink>
                    <NavButton 
                    to="/" 
                    activestyle={{ color: 'black' }}>   
                        <button style={{width:"85px", height:"55px",
                        backgroundColor:"#05C46B", border:"none", borderRadius:"10px", color:"white"}}>
                            <img src="https://cdn-icons-png.flaticon.com/512/3063/3063206.png"
                            style={{width:"70%", cursor:"pointer"}}/>
                        </button>
                    </NavButton>
                </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;