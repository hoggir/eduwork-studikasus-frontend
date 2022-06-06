import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RegisterAuthAction } from "../../actions/authAction";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function Register() {
  const dispatch = useDispatch();

  const initialState = {
    full_name: "",
    email: "",
    password: "",
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
    console.log(data.email)
    dispatch(RegisterAuthAction({ data: data }));
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

        <Button>Daftar</Button>
      </Form>
    </div>
  );
}

export default Register;
