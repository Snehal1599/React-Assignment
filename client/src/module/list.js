import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import axios from 'axios';
import { Link } from "react-router-dom";

class listComponent extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      listUser:[]
    }
  }
  componentDidMount(){

    axios.get("http://localhost:3001/employees")
    .then(res => {
      if(res.data.success){
        const data = res.data.data;
        this.setState({ listUser:data });
      }
      else{
        alert("Error web service")
      }
    })
    .catch(error => {
      alert("Server error"+error)
    });

  }
  render()
  {
    return (
      <table className="table table-hover table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">OrgName</th>
            <th scope="col">Address</th>
            <th scope="col">Salary</th>
            <th colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {this.loadData()}
        </tbody>
      </table>
    );
  }
  loadData(){

    return this.state.listUser.map((data)=>{
      return(
        <tr>
          <th>{data.ID}</th>
          <td>{data.FIRSTNAME}</td>
          <td>{data.LASTNAME}</td>
          <td>{data.ORGNAME}</td>
          <td>{data.ADDRESS}</td>
          <td>{data.SALARY}</td>
          <td>
            <Link class="btn btn-outline-info "  to={"/edit/"+data.ID} >Edit</Link>
          </td>
          <td>
          <button class="btn btn-outline-danger" onClick={()=>this.sendDelete(data.ID)}> Delete </button>
          </td>
        </tr>
      )
    });
  }

  sendDelete(userId)
  {
    // url of backend
    const baseUrl = "http://localhost:3001/employees/delete/"  + userId
  
    axios.delete(baseUrl)
    .then(response =>{
      if (response.data.success) {
        alert("success!!");
      }
    })
    .catch ( error => {
      alert("Error 325 ")
    })
  }
}

export default listComponent;