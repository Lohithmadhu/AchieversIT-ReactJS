// import React from "react";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Button } from 'react-bootstrap';
//import { Checkbox } from "bootstrap";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router";

const Create = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    //const [checkbox, setCheckbox] = useState(false);
    let history = useHistory();
        const postData = (e) => {
          e.preventDefault();
            axios.post(`https://6120a0a124d11c001762ed0f.mockapi.io/fakeData`, {
              firstName,
              lastName,
              //checkbox             
            })
            .then(() => {
            history.push('/read')
        })
          console.log(firstName);
          console.log(lastName);
        };
  return (
    <Form className="create-form">
      <div className="mb-3">
        <label for="exampleInputFirsName" className="form-label">
          FirstName
        </label>
        <br />
        <input
          type="firstName"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Fist Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputLastName" className="form-label">
          LastName
        </label>

        <input
          type="lastName"
          className="form-control"
          id="exampleInputLastName"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label
          className="form-check-label"
          for="exampleCheck1"
          //onChange={(e) => setCheckbox(!checkbox)}
        >
          I agree to the Terms and Conditions
        </label>
        {/* <Checkbox
          label="I agree to the Terms and Conditions"
          onChange={(e) => setCheckbox(!checkbox)}
        /> */}
      </div>
      <Button onClick={postData} type="submit" className="btn btn-primary">
        Submit
      </Button>
    </Form>

    // <Form>
    //   <Form.Group>
    //     <Form.Label>FirstName</Form.Label>
    //     <Form.Control
    //       type="text"
    //       placeholder="Enter your first name"
    //       onChange={(e) => setFirstName(e.target.value)}
    //     />
    //   </Form.Group>
    //   <Form.Group>
    //     <Form.Label>Enter your email address:</Form.Label>
    //     <Form.Control
    //       type="email"
    //       placeholder="Enter your last name"
    //       onChange={(e) => setLastName(e.target.value)}
    //     />
    //   </Form.Group>
    //   {/* <Form.Group>
    //     <Form.Label>Enter your age:</Form.Label>
    //     <Form.Control type="number" placeholder="Enter your age" />
    //   </Form.Group> */}
    //   <Form.Input
    //     type="checkbox"
    //     className="form-check-input"
    //     id="exampleCheck1"
    //     onChange={(e) => setCheckbox(!checkbox)}
    //   />
    //   <Form.Label className="form-check-label" for="exampleCheck1">
    //     I agree to the Terms and Conditions
    //   </Form.Label>
    //   <Button variant="primary" type="submit" onClick={postData}>
    //     Click here to submit form
    //   </Button>
    // </Form>
  );
};

export default Create;
