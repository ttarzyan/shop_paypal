import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate();
  function logOut() {
    localStorage.clear();
    navigate("/register");
  }
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">ShopPayPal</Navbar.Brand>
          <Nav className="me-auto navbar_warapper">
            {localStorage.getItem("user-info") ? (
              <>
              <Link to="/">Product List</Link>
                <Link to="/add">Add Product</Link>
                <Link to="/update">Update Product</Link>
                <Link to="/search">Search Product</Link>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              
              </>
            )}
          </Nav>

          {localStorage.getItem("user-info") ? (
            <Nav>
              <NavDropdown title={user && user.name}>
                <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
            
              </NavDropdown>
            </Nav>
          ) : null}
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
