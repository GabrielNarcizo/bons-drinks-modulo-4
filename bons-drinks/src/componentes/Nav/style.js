import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  height: 92px;
  font-family: 'Dancing Script', cursive;
`;

export const NavMenu = styled.div` 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  justify-content: space-around;
  text-decoration: none;
  padding: 0 5rem;
  height: 100%;
  cursor: pointer;
  font-size: 25px;
  font-weight: bold;

  &: hover{
    color: yellow;
  }
`;