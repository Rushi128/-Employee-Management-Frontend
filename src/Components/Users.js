import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Users () {
    const  [users, setUser] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3002/employees')
        .then(result => setUser(result.data))
        .catch(err => console.log(err))
    },[])

    const handelDelete = (index) => {
        console.log("index",index)
        axios.delete(`http://localhost:3002/employees/${index}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    // const handleSubmit = (e) => {
        // e.preventDefault();
        // axios.put(`http://localhost:3002/employees/${index}`, { name, position })
        // .then(() => {
        //   navigate("/");
        // })
        // .catch((err) => console.log(err));
    // };

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to="/create" className="btn btn-success">Add +</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return<tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.position}</td>
                                    <td>
                                    <Link to={`/update/${index}`} className="btn btn-success">Update</Link>
                                        <button className="btn btn-danger" onClick={(e) => handelDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;