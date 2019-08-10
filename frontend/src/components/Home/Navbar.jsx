import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoePrints} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar
          color="secondary"
          expand="md"
          id="mainNav"
          light>
          <NavbarBrand
            tag={Link}
            to="/">
            <FontAwesomeIcon icon={faShoePrints} />
          </NavbarBrand>
          <NavbarToggler
            className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded collapsed"
            color="light"
            onClick={this.toggle} >Menu
            <i className="fas fa-bars"></i>
          </NavbarToggler>
          <Collapse
            isOpen={this.state.isOpen}
            navbar>
            <Nav
              className="ml-auto"
              navbar>
              <NavItem>
                <NavLink
                  tag={Link}
                  to="/login">Log In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  to="/signup">Sign Up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}