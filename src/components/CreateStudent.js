import React, { useState } from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";
import axios from "axios";

const CreateStudent = () => {
  // state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");

  const onChangeName = (value) => {
    setName(value);
  };

  const onChangeEmail = (value) => {
    setEmail(value);
  };

  const onChangeRollNo = (value) => {
    setRollNo(value);
  };

  const onSubmit = (e) => {
    const objStudents = {
      name: 'teas',
      email: 'asda',
      rollno: 'asdasd',
    };

    console.log('myBojs', objStudents);
    axios
      .post("http://localhost:3000/student", objStudents)
      .then((res) => console.log('myRes', res.data));

    // setName("");
    // setEmail("");
    // setRollNo("");
  };

  return (
    <>
      <div className="form-wrapper">
        <Form onSubmit={onSubmit}>
          <FormGroup controlId="Name">
            <FormLabel>Name</FormLabel>
            <FormControl
              type="text"
              value={name}
              onChange={() => onChangeName()}
            />
          </FormGroup>
          <FormGroup controlId="Email">
            <FormLabel>Email</FormLabel>
            <FormControl type="email" onChange={() => onChangeEmail()} />
          </FormGroup>
          <FormGroup controlId="Name">
            <FormLabel>Roll No</FormLabel>
            <FormControl type="text" onChange={() => onChangeRollNo()} />
          </FormGroup>
          <Button variant="danger" size="lg" block="block" type="submit">
            Create Student
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CreateStudent;
