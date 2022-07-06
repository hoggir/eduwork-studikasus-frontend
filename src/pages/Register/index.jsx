import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser, getUser } from "../../actions/userAction";
import { Button, Form, FormGroup, Input } from "reactstrap";

function Register() {
  const { userRegisterError } = useSelector((state) => state.UserReducer);
  const { cek } = useSelector((state) => state.UserReducer);

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    if (userRegisterError) {
      setData({
        ...data,
        errorMessage: userRegisterError,
      });
    }
    // eslint-disable-next-line
  }, [userRegisterError, dispatch]);

  useEffect(() => {
    if (cek) {
      alert("Logout terlebih dahulu!");
      Navigate("/");
    }
  }, [cek, Navigate]);

  const initialState = {
    full_name: "",
    email: "",
    password: "",
    errorMessage: false,
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
    });

    dispatch(registerUser(data));
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
      <h3 className="text-center mb-5">Register</h3>
        <Form onSubmit={handleFormSubmit}>
          <FormGroup>
            <Input
              type="name"
              value={data.full_name}
              onChange={handleInputChange}
              name="full_name"
              id="full_name"
              placeholder="full name"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="email"
              value={data.email}
              onChange={handleInputChange}
              name="email"
              id="Email"
              placeholder="email"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              value={data.password}
              onChange={handleInputChange}
              name="password"
              id="Password"
              placeholder="password"
            />
          </FormGroup>
          {data.errorMessage && (
            <div className="alert alert-danger" role="alert">
              {data.errorMessage}
            </div>
          )}

          <Button className="login-button">Daftar</Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
