
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { useState } from "react";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Container fluid>
        {/* Logo/Image Section */}
        <Navbar.Brand href="#home" className="me-auto">
          <img 
            src="https://via.placeholder.com/100x40" 
            alt="Open Library Logo"
            style={{ maxWidth: '100px' }}
          />
        </Navbar.Brand>

        {/* Responsive Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
        
          <Form className="d-flex mx-auto my-3 my-lg-0" onSubmit={handleSearch} style={{ maxWidth: '400px' }}>
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%' }}
              className="me-2"
            />
              {/* <Button variant="outline-success" type="submit">Search</Button> */}
          </Form>
       

          {/* Navigation Links */}
          <Nav className="ms-auto text-center text-lg-start">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/books">Books</Nav.Link>
            <Nav.Link href="/authors">Authors</Nav.Link>
            <Nav.Link href="/subjects">Subjects</Nav.Link>

            {/* My Account Dropdown */}
            <NavDropdown title={<span><i className="fas fa-user-circle"></i> My Account</span>} id="account-dropdown" align="end">
              <NavDropdown.Item href="/login">Log in</NavDropdown.Item>
              <NavDropdown.Item href="/register">Sign up</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/account">Your Account</NavDropdown.Item>
              <NavDropdown.Item href="/create">Add Book</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { NavBar };
