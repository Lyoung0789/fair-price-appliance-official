import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  // background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")}
  background: #12232E;
  height: 80px;
  margin-top -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 83px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  // max-width: 1100px;
  // background-color: red;
`;

export const NavLogo = styled(LinkR)`
  color: #eefbfb;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    // color: red;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #eefbfb;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid ##eefbfb;
  }
`;

export const NavButton = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavButtonLink = styled(LinkS)`
  border-radius: 50px; 
  background: #4DA8DA;
  white-space: nowrap;
  padding: 10px 22px; 
  color: #EEFBFB;
  font-size: 16px; 
  outline: none; 
  border: none; 
  cursor: pointer; 
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover{
      transition all 0.2s ease-in-out
      background: #fff;
      color: #010606;
  }
`;
