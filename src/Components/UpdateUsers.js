import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateUsers() {
  const { index } = useParams();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const navigate = useNavigate()
  // console.log("https://meet.google.com/tqf-rtca-vmc",index)
  useEffect(() => {
    axios
      .get(`http://localhost:3002/getemployee/${index}`)
      .then((result) => {
        setName(result.data.name);
        setPosition(result.data.position);
      })
      .catch((err) => console.log(err));
  }, [index]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3002/employees/${index}`, { name, position })
    .then(() => {
      navigate("/");
    })
    .catch((err) => console.log(err));
};
  

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-4">
        <form onSubmit={handleSubmit}>
          <h2>Edit Employee</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
             />
          </div>
          <div className="mb-3">
            <label htmlFor="position" className="form-label">
              Position
            </label>
            <input
              type="text"
              className="form-control"
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUsers;
