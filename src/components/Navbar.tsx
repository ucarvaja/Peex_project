import { useHistory } from 'react-router-dom';
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  Form,
  Button,
} from 'react-bootstrap';
import React, { useState } from 'react';
import Filter from './Filter';

interface Props {
  searchQuery: string;
  setSearchQuery: Function;
}
const NavbarComponent = ({ searchQuery, setSearchQuery }: Props) => {
  const history = useHistory();
  const [expanded, setExpanded] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    history.push({
      pathname: '/',
      search: `?search=${searchQuery}`,
    });
    setExpanded(false);
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        key={'sm'}
        bg='dark'
        variant='dark'
        expand={'lg'}
        className='mb-3'
        expanded={expanded}

      >
        <Container fluid>
          <Navbar.Brand href='/'>Breed Catalog</Navbar.Brand>
          <Navbar.Toggle
            aria-controls='navbarScroll'
            data-bs-target='#navbarScroll'
            onClick={e => setExpanded(true)}
          ></Navbar.Toggle>

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement='end'
            onHide={() => setExpanded(false)}
          >
            <Offcanvas.Header 
              closeButton
              data-bs-toggle='collapse'
              data-bs-target='#navbarScroll'>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/favorites'>Favorites</Nav.Link>
              </Nav>
              <Form className='d-flex' onSubmit={onSubmit}>
                <Filter
                  placeholder='Search'
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
                <Button
                  variant='outline-success'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarScroll'
                  type='submit'
                >
                  Search
                </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
