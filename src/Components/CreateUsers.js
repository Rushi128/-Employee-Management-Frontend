import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUsers () {
    const [name, setName] = useState()
    const [position, setPosition] = useState()
    const navigate = useNavigate()

    const Submit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:3002/employees", {name, position})
        .then(result => {console.log(result)
        navigate("/")})
        .catch(err => console.log(err))
    }

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-4">
                <form onSubmit={Submit}>
                    <h2>Update Employee</h2>
                    <div className="'mb-1">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control"
                        onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div className="'mb-1">
                        <label htmlFor="">Position</label>
                        <input type="text" placeholder="Position" className="form-control"
                        onChange={(e)=> setPosition(e.target.value)}/>
                    </div>
                    <button className="btn btn-success">Update </button>
                </form>
            </div>
        </div>
    )
}

export default CreateUsers;     