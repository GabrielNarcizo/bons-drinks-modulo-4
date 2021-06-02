import React from 'react'
import { Nav, NavLink, NavMenu } from './style';

const NavBar = () => {
    return (
        <>
        <Nav>
          <NavMenu>
            <NavLink to='#'>
              Drinks
            </NavLink>
            <NavLink to='#'>
              Sobre Nós
            </NavLink>
            <NavLink exact to='/'>
              BôBeber
            </NavLink>
            <NavLink to='#'>
              Nosso Time
            </NavLink>
            <NavLink to='#'>
              Contato
            </NavLink>
          </NavMenu>
        </Nav>
        </>
    )
}

export default NavBar;
