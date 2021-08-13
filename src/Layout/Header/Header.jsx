import { Navbar, Container, Button } from "react-bootstrap";
const Header = ({ showLogin, setShowLogin, isLoggedIn, setIsLoggedIn }) => {
  // For fetching current user
  const userName = JSON.parse(localStorage.getItem("user"));
  // For logging out user
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("user");
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Innovative Logic Labs</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {isLoggedIn ? "Signed in as: " + userName.name : null}{" "}
              {isLoggedIn ? (
                <Button onClick={() => logout()}>Logout</Button>
              ) : (
                <Button
                  onClick={() => setShowLogin(!showLogin)}
                  variant="primary"
                >
                  Login
                </Button>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
