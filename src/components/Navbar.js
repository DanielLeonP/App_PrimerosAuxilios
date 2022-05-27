import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavLogo, 
} from './Styles';

const Navbar = () => {
    return (
        <>
           <Nav>
                <NavLogo to="/"
                >  
                    <button style={{width:"55px", height:"55px",background:"#05C46B",
                        border:"none", borderRadius:"200px", marginRight:"10px"}}/>
                    Primeros Auxilios
                </NavLogo>
                <Bars />
                <NavMenu>
                    <NavLink 
                    to="/home" 
                    style={{marginLeft:'30%'}}
                    activestyle={{ color:'black' }}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                    to="/map" 
                    style={{marginLeft:'40%'}}
                    activestyle={{ color: 'black' }}
                    >
                        Mapa
                    </NavLink>
                    <NavLink 
                    to="/" 
                    style={{marginLeft:'90%'}}
                    activestyle={{ color: 'black' }}
                    >   
                        <button style={{width:"85px", height:"55px",
                        backgroundColor:"#05C46B", border:"none", borderRadius:"10px", color:"white"}}>
                            <img src="https://cdn-icons-png.flaticon.com/512/3063/3063206.png"
                            style={{width:"70%"}}/>
                        </button>
                    </NavLink>
                </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;