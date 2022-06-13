import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../actions/userAction";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function Register() {
  const { userRegisterError } = useSelector((state) => state.UserReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userRegisterError) {
      setData({
        ...data,
        errorMessage: userRegisterError,
      });
    }
    // eslint-disable-next-line
  }, [userRegisterError, dispatch]);

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
      <Form onSubmit={handleFormSubmit}>
        <FormGroup>
          <Label for="full_name">Full Name</Label>
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
          <Label for="Email">Email</Label>
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
          <Label for="Password">Password</Label>
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

        <Button>Daftar</Button>
      </Form>
    </div>
  );
}

export default Register;
