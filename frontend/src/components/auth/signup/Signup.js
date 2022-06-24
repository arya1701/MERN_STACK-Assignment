import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";

import Loading from "../../layout/Loading";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import ErrorMessage from "../../layout/ErrorMessage";
import { register } from "../../../actions/userActions";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo]);
  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Password do not match");
    } else {
      dispatch(register(name, email, password));
    }

    // if (password !== confirmpassword) {
    //   setMessage("Passwords do not match");
    // } else {
    //   setMessage(null);
    //   try {
    //     const config = {
    //       headers: {
    //         "Content-type": "application/json",
    //       },
    //     };
    //     setLoading(true);
    //     const { data } = await axios.post(
    //       "/api/users",
    //       { name, email, password },
    //       config
    //     );
    //     setLoading(false);
    //     localStorage.setItem("userInfo", JSON.stringify(data));
    //   } catch (error) {
    //     setError(error.message.response.data.message);
    //   }
    // }
  };
  return (
    <div className="loginContainer">
      {error && <ErrorMessage varaiant="danger">{error}</ErrorMessage>}
      {message && <ErrorMessage varaiant="danger">{message}</ErrorMessage>}
      {loading && <Loading />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            value={name}
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={confirmpassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Have an Account ? <Link to="/login">Login</Link>
        </Col>
      </Row>
    </div>
  );
};

export default Signup;
