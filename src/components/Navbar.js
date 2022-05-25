import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavLogo, 
} from './NavigationBar';

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                <img src="https://nz.rs-cdn.com/images/nwsbj-h1t6q/page/9fb0f7ba1bf9513f02610f4697f256d9__f91b/zoom295x294z100000cw295.png"
                style={{width:'20%', position:'absolute', marginLeft:'-23%'}}/>
                Primeros Auxilios
            </NavLogo>
            <Bars />
            <NavMenu>
                <NavLink 
                  to="/home" 
                  style={{marginLeft:'200px'}}
                  activestyle={{ color:'black' }}
                >
                    Home
                </NavLink>
                <NavLink 
                  to="/map" 
                  style={{marginLeft:'300px'}}
                  activestyle={{ color: 'black' }}
                >
                    Mapa
                </NavLink>
                <NavLink 
                  to="/" 
                  style={{marginLeft:'910px'}}
                  activestyle={{ color: 'black' }}
                >
                    Contacto Médico
                    <button style={{width:"100px", height:"50px", marginLeft:"15px",
                    backgroundColor:"#05C46B", border:"none", borderRadius:"10px"}}/>
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;