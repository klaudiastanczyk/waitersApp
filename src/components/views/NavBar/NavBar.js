import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom";


const NavBar = () =>
<Container>
  <Navbar bg="primary" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand href="/">Waiter.app</Navbar.Brand>
    <Nav.Item>
        <Link to='/'>Home</Link>
    </Nav.Item>
  </Container>
  </Navbar>
</Container>

export default NavBar;