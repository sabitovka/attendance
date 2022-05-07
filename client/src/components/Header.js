import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap'

export const Header = () => {
    return (
        <Navbar className="header" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/"><img src="logo.svg" alt="log"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />  
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" disabled>Студент</Nav.Link>
                    <NavDropdown title="Староста" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/journal">Заполнить журнал посещамости</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Просмотреть посещаемость</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#link" disabled>Преподаватель</Nav.Link>
                    <NavDropdown title="Зав. отделением" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/absence20">Список пропустивших более 20% занятий</NavDropdown.Item>
                        <NavDropdown.Item href="/statement">Ведомости групп</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#help" disabled>Помощь</Nav.Link>
                </Nav>
                <Dropdown id="basic-nav-dropdown" role="menuitem">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Сабитов Карим
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/logout">
                            <FontAwesomeIcon icon={faArrowRightFromBracket} className="me-2"></FontAwesomeIcon>
                            Выйти
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}