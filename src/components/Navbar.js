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
                <NavLogo to="/">
                    <img src="https://nz.rs-cdn.com/images/nwsbj-h1t6q/page/9fb0f7ba1bf9513f02610f4697f256d9__f91b/zoom295x294z100000cw295.png"
                    style={{width:'20%', position:'absolute', marginLeft:'-23%', marginTop:'9%'}}/>
                    <p style={{marginLeft:'3%'}} >Primeros Auxilios</p>
                </NavLogo>
                <Bars />
                <NavMenu>
                    <NavLink 
                    to="/home" 
                    style={{marginLeft:'230px'}}
                    activestyle={{ color:'black' }}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                    to="/map" 
                    style={{marginLeft:'330px'}}
                    activestyle={{ color: 'black' }}
                    >
                        Mapa
                    </NavLink>
                    <NavLink 
                    to="/" 
                    style={{marginLeft:'890px'}}
                    activestyle={{ color: 'black' }}
                    >
                        Contacto Médico
                        <button style={{width:"100px", height:"50px", marginLeft:"30px",
                        backgroundColor:"#05C46B", border:"none", borderRadius:"10px"}}/>
                    </NavLink>
                </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;