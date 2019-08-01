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
          color="light"
          expand="md"
          light>
          <NavbarBrand
            tag={Link}
            to="/">
            <FontAwesomeIcon icon={faShoePrints} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
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