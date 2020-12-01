import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
const baseUrl = "http://localhost:3001"

class EditComponent extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      dataUser:{},
      Firstname: "",
      Lastname:"",
      Address:"",
      Orgname:"",
      Salary:""
    }
  }

  componentDidMount(){
    let userId = this.props.match.params.ID;
    const url = baseUrl+"/employees/get/"+userId
    axios.get(url)
    .then(res=>{
      if (res.data.success) {
        const data = res.data.data[0]
        this.setState({
          dataUser:data,
          Firstname: data.FIRSTNAME,
          Lastname:data.LASTNAME,
          Address:data.ADDRESS,
          Orgname:data.ORGNAME,
          Salary:data.SALARY
        })
      }
      else {
        alert("Error web service")
      }
    })
    .catch(error=>{
      alert("Error server "+error)
    })
  }

  render(){
   return (
    <form>
       <div className="form-row justify-content-center">
         <div className="form-group col-md-6">
           <label for="inputPassword4">FirstName</label>
           <input type="text" className="form-control"  placeholder="FirstName" value={this.state.Firstname} onChange={(value)=> this.setState({Firstname:value.target.value})}/>
         </div>
         <div className="form-group col-md-6">
           <label for="inputLastname4">LastName</label>
           <input type="text" className="form-control"  placeholder="LastName" value={this.state.Lastname} onChange={(value)=> this.setState({Lastname:value.target.value})}/>
         </div>
       </div>
       <div className="form-group">
         <label for="inputAddress">Address</label>
         <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={this.state.Address} onChange={(value)=> this.setState({Address:value.target.value})}/>
       </div>
       <div className="form-row justify-content-center">
         <div className="form-group col-md-6">
           <label for="inputOrgname4">OrgName</label>
           <input type="text" className="form-control"  placeholder="OrgName" value={this.state.Orgname} onChange={(value)=> this.setState({Orgname:value.target.value})}/>
         </div>
         <div className="form-group col-md-6">
           <label for="inputSalary4">Salary</label>
           <input type="text" className="form-control"  placeholder="Salary" value={this.state.Salary} onChange={(value)=> this.setState({Salary:value.target.value})}/>
         </div>
       </div>
       <button type="submit" class="btn btn-primary" onClick={()=>this.sendUpdate()}>Update</button>
     </form>
  );
 }
 sendUpdate(){
  //  get parameter id
    let userId = this.props.match.params.ID;
    // url of backend
    const baseUrl = "http://localhost:3001/updateemployee"
    
    const datapost = {
      ID : userId,
      FIRSTNAME : this.state.Firstname,
      LASTNAME : this.state.Lastname,
      ADDRESS : this.state.Address,
      ORGNAME : this.state.Orgname,
      SALARY : this.state.Salary
    }

    axios.put(baseUrl,datapost)
    .then(response=>{
      if (response.data.success===true) {
        alert("Successfully updated")
      }
      else {
        alert("Error")
      }
    }).catch(error=>{
      alert("Error 34 "+error)
    })
  }
}

export default EditComponent;