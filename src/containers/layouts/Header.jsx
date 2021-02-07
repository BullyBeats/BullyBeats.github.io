import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // NavbarText
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import get from 'lodash/get';
// import getImage from "utils/images";

// @ts-ignore
// import colors from "assets/css/colors.scss";

// const { theme } = colors;

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const pathName = get(props, 'history.location.pathname', '');
  return (
    <div className='Header center'>
      <Navbar color='none' dark expand='md' className='Header_navbar'>
        <NavbarBrand href='#/home'>
          {/* <img
            src={getImage("logo")}
            alt="logo"
            style={{ maxHeight: 35, opacity: 0.8 }}
          /> */}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem active={pathName === '/home'}>
              <NavLink href='#/home' className='Header_navLink'>
                Home
              </NavLink>
            </NavItem>
            <NavItem active={pathName === '/portfolio'}>
              <NavLink href='#/portfolio' className='Header_navLink'>
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem active={pathName === '/skills'}>
              <NavLink href='#/skills' className='Header_navLink'>
                Skills
              </NavLink>
            </NavItem>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
};

const HeaderWithRouter = withRouter((props) => <Header {...props} />);
export default HeaderWithRouter;
