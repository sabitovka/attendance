import { faArrowRightFromBracket, faCircleUser, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

export const Header = () => {

    // The forwardRef is important!!
    // Dropdown needs access to the DOM node in order to position the Menu
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
      <button
      type='button'
      ref={ref}
      onClick={onClick}
      style={{ cursor: "pointer" }}
      className="py-2 btn btn-outline-light">
        {children}
        <span className="ms-2">&#x25bc;</span>
      </button>
    ));

    return (
        <Navbar className="header" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand>
                  <NavLink to="/">
                    <img src="logo.svg" alt="log"/>
                  </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />  
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link disabled>Студент</Nav.Link>
                    <NavDropdown title="Староста" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                          <NavLink to="/journal">
                            Заполнить журнал посещамости
                          </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <NavLink to="/statement">
                            Просмотреть посещаемость
                          </NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link disabled>Преподаватель</Nav.Link>
                    <NavDropdown title="Зав. отделением" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                          <NavLink to="/absence20">
                            Список пропустивших более 20% занятий
                          </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/statement">
                          <NavLink to="/statement">
                            Ведомости групп
                          </NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#help" disabled>Помощь</Nav.Link>
                </Nav>

                <Dropdown id="basic-nav-dropdown" role="menuitem">
                    <Dropdown.Toggle as={CustomToggle} variant="success" id="dropdown-basic">
                      <FontAwesomeIcon icon={faUser} className="me-2" />
                      Сабитов Карим
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>
                          <NavLink to="/login">
                            <FontAwesomeIcon icon={faArrowRightFromBracket} className="me-2"></FontAwesomeIcon>
                            Выйти
                          </NavLink>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}