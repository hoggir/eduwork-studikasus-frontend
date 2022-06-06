import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./index.css";
import { AuthContext } from "../../App";

const qs = require("query-string");
const api = "http://localhost:3000/auth";

function LoginPage() {
  const { dispatch } = useContext(AuthContext);

  const initialState = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  };

  const Navigate = useNavigate();

  const [data, setData] = useState(initialState);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });

    const requestBody = {
      email: data.email,
      password: data.password,
    };

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post(api + "/login", qs.stringify(requestBody), config)
      .then((res) => {
        if (res.data.error === 1) {
          setData({
            ...data,
            isSubmitting: false,
            errorMessage: res.data.message,
          });
        } else {
          dispatch({
            type: "LOGIN",
            payload: res.data,
          });
          Navigate("/");
        }
      })
      .catch((error) => {
        dispatch({
          type: "LOGIN",
          payload: false,
          errorMessage: error.message,
        });
      });
  };

  return (
    <div className="login-wrapper">
      <Form onSubmit={handleFormSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            value={data.email}
            onChange={handleInputChange}
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            value={data.password}
            onChange={handleInputChange}
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>

        {data.errorMessage && (
          <div className="alert alert-danger" role="alert">
            {data.errorMessage}
          </div>
        )}

        <Button disabled={data.isSubmitting}>
          {data.isSubmitting ? "...Loading" : "Login"}
        </Button>
      </Form>
    </div>
  );
}

export default LoginPage;
