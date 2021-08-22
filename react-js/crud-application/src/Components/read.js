// const Read = () =>{
//     return(
//         <div>hello</div>
//     )
// }

// export default Read;

//import React from "react";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Read = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://6120a0a124d11c001762ed0f.mockapi.io/fakeData`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
      let { id, firstName, lastName, checkbox } = data;
      localStorage.setItem("ID", id);
      localStorage.setItem("First Name", firstName);
      localStorage.setItem("Last Name", lastName);
      localStorage.setItem("Checkbox Value", checkbox);
    console.log(data);
  };

  const getData = () => {
    axios
      .get(`https://6120a0a124d11c001762ed0f.mockapi.io/fakeData`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://6120a0a124d11c001762ed0f.mockapi.io/fakeData/${id}`)
      .then(() => {
        getData();
      });
  };
  

  return (
    <>
      <h3>Student Details</h3>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th width="170">First Name</th>
            <th width="170">Last Name</th>
            <th>Checked</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {APIData.map((data) => {
            return (
              <tr>
                <th>{data.firstName}</th>
                <th>{data.lastName}</th>

                <th>{data.checkbox ? "Checked" : "Unchecked"}</th>

                <Link to="/update">
                  <tr>
                    <Button onClick={() => setData(data)}>Update</Button>
                  </tr>
                </Link>

                <td>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>

        {/* <tbody>
          <tr>
            <td>Hi</td>
            <td>Sai</td>
          </tr>
        </tbody> */}
      </Table>
    </>
  );
};

export default Read;

