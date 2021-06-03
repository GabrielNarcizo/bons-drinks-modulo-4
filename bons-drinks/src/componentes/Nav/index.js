import React from 'react'
import { Nav, NavLinks, NavMenu } from './style';

const NavBar = () => {
    return (
        <>
        <Nav>
          <NavMenu>
            <NavLinks to='drinks'>
              Drinks
            </NavLinks>
            <NavLinks to='sobrenos'>
              Sobre Nós
            </NavLinks>
            <NavLinks exact to='/'>
              BôBeber
            </NavLinks>
            <NavLinks to='nossotime'>
              Nosso Time
            </NavLinks>
            <NavLinks to='contato'>
              Contato
            </NavLinks>
          </NavMenu>
        </Nav>
        </>
    )
}

export default NavBar;
