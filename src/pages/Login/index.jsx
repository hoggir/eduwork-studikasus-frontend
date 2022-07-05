import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, getUser } from "../../actions/userAction";

const qs = require("query-string");
const api = "http://localhost:3000/auth";

function LoginPage() {
  const { cek } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const initialState = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
    token: null,
  };

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
      token: null,
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
          dispatch(loginUser({ res: res }));
          alert(res.data.message);
          Navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (cek) {
    Navigate("/");
  }

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h3 className="text-center mb-5">Login</h3>
        <Form onSubmit={handleFormSubmit}>
          <FormGroup className="mb-4">
            <Input
              type="email"
              value={data.email}
              onChange={handleInputChange}
              name="email"
              id="Email"
              placeholder="Email"
            />
          </FormGroup>
          <FormGroup className="mt-4">
            <Input
              type="password"
              value={data.password}
              onChange={handleInputChange}
              name="password"
              id="Password"
              placeholder="Password"
            />
          </FormGroup>
          <div className="login-register">
            <div>Belum punya akun?</div>
            <Link to="/register">
              <button>Daftar!</button>
            </Link>
          </div>

          {data.errorMessage && (
            <div className="alert alert-danger" role="alert">
              {data.errorMessage}
            </div>
          )}

          <Button className="login-button" disabled={data.isSubmitting}>
            {data.isSubmitting ? "...Loading" : "Login"}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
