import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../App.css"

const Header = () => {
  return (
    <div>
         <Navbar bg="white" variant="white">
        <Container>
      
          <Navbar.Brand>  <img src="img/logo2.jpg" alt="" width="220" height="50"  >
            </img> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={'/'}>
              Главная
              </Link>
            </Nav.Link>
             <Nav.Link> 
            <Link to={'/favorites'}>
            Избранное
            </Link>
             </Nav.Link>
            <Nav.Link>
              <Link to={'/cart'}>
              Корзина
              </Link>
              </Nav.Link>
              <Nav.Link>
              <Link to={'/description'}>
              Описание
              </Link>
              </Nav.Link>
          </Nav>
          <Nav>
            <Button type="button" class="btn btn-primary" variant="primary">
                    Войти
            </Button>
           
          </Nav>
        </Container>
        
      </Navbar>
  
      
    </div>
  )
}

export default Header