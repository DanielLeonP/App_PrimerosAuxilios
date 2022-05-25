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
                Home
            </NavLogo>
            <Bars />
            <NavMenu>
                <NavLink 
                  to="/" 
                  activestyle={{ color:'black' }}
                >
                    Home
                </NavLink>
                <NavLink 
                  to="/home" 
                  activestyle={{ color: 'black' }}
                >
                    Homeeeeee
                </NavLink>
                <NavLink 
                  to="/map" 
                  activestyle={{ color: 'black' }}
                >
                    Mapppppppp
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;