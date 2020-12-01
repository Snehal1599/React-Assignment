import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

class EditComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      Firstname: "",
      Lastname:"",
      Address:"",
      Orgname:"",
      Salary:""
    };
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
       <button type="submit" className="btn btn-primary" onClick={()=>this.sendSave()}>Submit</button>
     </form>
   );
 }
 sendSave(){

  if (this.state.Firstname==="") {
    alert("Please enter First name")
  }
  else if (this.state.Lastname==="") {
     alert("Please enter Last name")
  }
  else if (this.state.Address==="") {
     alert("Please enter Address")
  }
  else if (this.state.Orgname==="") {
     alert("Please enter Org name")
  }
  else if (this.state.Salary==="") {
     alert("Please enter Salary")
  }
  else {

    const baseUrl = "http://localhost:3001/addemployee"

    const datapost = {
      "ID" : 0,
      "FIRSTNAME" : this.state.Firstname,
      "LASTNAME" : this.state.Lastname,
      "ADDRESS" : this.state.Address,
      "ORGNAME" : this.state.Orgname,
      "SALARY" : this.state.Salary,
    }

    axios.post(baseUrl,datapost)
    .then(response=>{
      if (response.data.success===true) {
        alert("success")
      }
      else {
        alert(response.data.message)
      }
    }).catch(error=>{
      alert("Error 34 "+error)
    })

  }
}
}

export default EditComponent;