import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const LoginForm = ({ setShowLogin, setIsLoggedIn }) => {
  const [validated, setValidated] = useState(false);

  const [state, setState] = useState({
    email: "",
    name: "",
    password: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  // For Logging in the User
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      console.log("inside");
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    const payload = {
      name: state.name,
      email: state.email,
    };
    localStorage.setItem("user", JSON.stringify(payload));
    setShowLogin(false);
    setIsLoggedIn(true);
  };
  return (
    <div className="p-5">
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              name="name"
              value={state.name}
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Enter Name"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a Name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              name="email"
              value={state.email}
              onChange={(e) => handleChange(e)}
              type="email"
              placeholder="Enter email"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Email.
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              value={state.password}
              name="password"
              onChange={(e) => handleChange(e)}
              type="password"
              placeholder="Password"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a Password.
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            // onClick={(e) => handleSubmit(e)}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default LoginForm;
