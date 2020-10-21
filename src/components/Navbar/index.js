//We can name this index. if we are calling the folder, react automitacally looks for the index.js file.
import React from "react";
//changes the color of the icon in the navbar
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavButton,
  NavButtonLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  //will use below only if i want a transparent navbar
  // const [scrollNav, setScrollNav] = useState(false);

  // const changeNav = () => {
  //   if (window.scrollY > -1) {
  //     setScrollNav(true);
  //   } else {
  //     setScrollNav(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeNav);
  // });

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {/*only use this when you want a transparent navbar <Nav scrollNav={scrollNav} >*/}
      <IconContext.Provider value={{ color: "#007cc7" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              Fair Price Appliance
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="reviews"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Reviews
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contact-us"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Contact Us
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavButton>
              <NavButtonLink
                to="contact-us"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                (407)-538-4313
              </NavButtonLink>
            </NavButton>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
