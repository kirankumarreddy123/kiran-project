import { Link } from "react-router-dom";
import "./Grievance.css";
import axios from 'axios';
import _ from "lodash";

import React, { isValidElement, useContext, useState } from 'react';
import AuthContext from './Authentication/AuthContext';

import { useNavigate } from 'react-router-dom';


export  const Grievance = () => {

    const navigate = useNavigate();
    const authContent = useContext(AuthContext);
    const CSE = 'Computer Science and Engineering';
    const AI = 'Artificial Intelligence';
    const DS = 'Data Science';
    const ECE = 'Electronics and Communication Engineering';
    const EEE = 'Electrical and Electronics Engineering';
    const CIVIL = 'Civil Engineering';
    const MECH = 'Mechanical Engineering';
    const MBA = 'Master of Business Administration';
    const MCA = 'Master of Computer Applications';

    const [state, setState] = useState({
        
       
        roll_NO:'',
        department:'',
        email_Id:'',
        gender:'',
       grivance_category:'',
       grievance_description:'',
        error : 'success'
    });

   


    const onSubmitHandler = async (e) =>{
      e.preventDefault();

    //   if(!checkValidity()){
    //     return;
    //   }
      const name = 'kiran';
      const tempState =_.cloneDeep(state);
      console.log(tempState)
      await axios.post('http://localhost:8081/api/v1/complent',tempState)
      .then(res =>{
        if(res.data) {
          console.log(res.data);
          console.log('at line 70');
          
          navigate('/')
      }   else {
          
      } 

      })

    }

    const setError = (val) => {
      setState(preState => {
        return {
          ...preState,
          error: val
        }
      })
    }

    const onChangeHandler = (e) => {
      const name =e.target.getAttribute('id');
      const value =e.target.value.toString();


      let tempState = {...state};
        tempState[name] = value;
        tempState['error'] = true;

        setState(tempState)
        
    }


    return (
        <div>

<img src="./assets/Gates-Institute-logo.png" alt='...'/>
  
  <div id="f1">
      <tr>
          <td>
              <Link to='/grievance'><button>GRIEVENCE FORM</button></Link>
          </td>
      </tr>
      <tr>
          <td>
              <Link to='/message'><button>MESSAGE BOX</button></Link>
          </td>
      </tr>
  </div>
  <div id="f2">
      <tr><td><b><h2>GRIEVENCE FORM</h2></b><hr/></td></tr>
      <div id="complaints">
          <form action="../4.html">
                   <div className="form-group my-4">
                        <label for="roll_no" className="mb-2">RollNO</label>
                        <input data-testid="roll_NO"  className="form-control mb-2"  type="text" id="roll_NO" required aria-describedby="emailHelp" onChange={onChangeHandler} placeholder="Enter ROll NO" defaultvalue={state.roll_NO}/>
                    </div>


              <div className="form-group my-4">
                        <label for="Departement" className="mb-2">Departement</label>
                        <select data-testid="department" className="form-select" value={state.department} onChange={onChangeHandler} id="department" required aria-label="department Select">
                            <option selected>Select a Departement</option>
                            <option value={CSE}>CSE</option>
                        <option value={CSE-AI}>CSE-AI</option>
                        <option  value={CSE-DS}>CSE-DS</option>
                        <option value={ECE}>ECE</option>
                        <option value={EEE}>EEE</option>
                        <option value={CIVIL}>CIVIL</option>
                        <option value={MECH}>MECH</option>
                        <option value={MBA}>MBA</option>
                        <option value={MCA}>MCA</option>
                    </select>   
                    </div>
             
                    <div className="form-group my-4">
                        <label for="gender" className="mb-2">Gender</label>
                        <select data-testid="gender" className="form-select" value={state.gender} onChange={onChangeHandler} id="gender" required aria-label="gender Select">
                            <option selected>Select a gender</option>
                            <option value="male">MALE</option>
                            <option value="female">FEMALE</option>
                        </select>
                    </div>

                    <div className="form-group mb-2 mt-4">
                        <label for="email" className="mb-2">Email </label>
                        <input data-testid="email_Id" type="email" className="form-control mb-1" id="email_Id" required aria-describedby="emailHelp" onChange={onChangeHandler} placeholder="Enter Your email" value={state.email_Id}/>
                    </div>

                    <div className="form-group my-4">
                        <label for="mobile_no" className="mb-2">mobile_no</label>
                        <input data-testid="mobile_no" type="number" className="form-control mb-2" id="mobile_no" aria-describedby="emailHelp" required onChange={onChangeHandler} placeholder="Enter mobile_no" defaultvalue={state.mobile_no}/>
                        {/* <small id="phoneNumberHelp" className={`form-text text-${!state.error ? 'success' : 'danger'}`}>{numberError}</small> */}
                    </div>

                    <div className="form-group mb-2 mt-4">
                        <label for="grivance_category" className="mb-2">Grivance Category </label>
                        <input data-testid="grivance_category" type="text" className="form-control mb-1" id="grivance_category" required aria-describedby="emailHelp" onChange={onChangeHandler} placeholder="Enter grivance_category" value={state.grivance_category}/>
                    </div>
                       
                    <div className="form-group mb-2 mt-4">
                        <label for="grivance_Description" className="mb-2">grievance description </label>
                        <input data-testid="grivance_Description" type="text" className="form-control mb-1" id="grivance_Description" required aria-describedby="emailHelp" onChange={onChangeHandler} placeholder="MAXIMUM 150 WORDS" value={state.grivance_Description}/>
                    </div>
                
          <p> I hereby declare that the information provided above is correct.I shall be responsible for furnishing any wrong information.</p>
          <label for="Declaration"> Declaration : </label>
          <label>Accept <input type="checkbox" id="accept" required/></label><br/>
          <input
        id="myBtn"
        
        onClick={onSubmitHandler}
        type="submit"
        className="btn btn-primary"
        data-testid="signup"
        defaultValue={Grievance}
      />
              
          </form>
      </div>
  </div>
  {/* <Link to="/">Click to go to our Home</Link> */}
        </div>
    )
}
export default Grievance;