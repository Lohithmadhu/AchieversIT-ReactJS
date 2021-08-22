// import React from "react";
import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Button } from 'react-bootstrap';
// import { Checkbox } from "bootstrap";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router";


const Update = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    //const [checkbox, setCheckbox] = useState(false);
    let history = useHistory();
    const [id, setID] = useState(null);

    useEffect(() => {
      setID(localStorage.getItem("ID"));
      setFirstName(localStorage.getItem("First Name"));
      setLastName(localStorage.getItem("Last Name"));
      //setCheckbox(localStorage.getItem("Checkbox Value"));
    }, []);
        const updateAPIData = (e) => {
          e.preventDefault();
            axios
              .put(
                `https://6120a0a124d11c001762ed0f.mockapi.io/fakeData/${id}`,
                {
                  firstName,
                  lastName,
                  //checkbox
                }
              )
              .then(() => {
                history.push("/read");
              });
        //   console.log(firstName);
        //   console.log(lastName);
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
      <Button onClick={updateAPIData} type="submit" className="btn btn-primary">
        Update
      </Button>
    </Form>
  );
};

// const Update = () => {
//   return <div>hello</div>;
// };


// export default Update;

// import React from "react";
// import Table from "react-bootstrap/Table";

// const Update= () => {
//   return (
//     <>
//       <h3>Student Details</h3>

//       <Table striped bordered hover size="sm">
//         <thead>
//           <tr>
//             <th width="170">Student Name</th>
//             <th width="170">Reg.no</th>
//             <th width="170">Course</th>
//             <th width="870">City Name</th>
//             <th width="1950">Percentage</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Rakesh</td>
//             <td>1123</td>
//             <td>CSE</td>
//             <td>Mumbai</td>
//             <td>86.9%</td>
//           </tr>
//           <tr>
//             <td>Jackson</td>
//             <td>1124</td>
//             <td>ECE</td>
//             <td>Hyderabad</td>
//             <td>72.4%</td>
//           </tr>
//           <tr>
//             <td>Keshav</td>
//             <td>1124</td>
//             <td>CSE</td>
//             <td>Chennai</td>
//             <td>88%</td>
//           </tr>
//         </tbody>
//       </Table>


//     </>
//   );
// }




export default Update;

