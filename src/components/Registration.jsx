// import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import _ from "lodash";
// import { Redirect } from 'react-router-dom';
import React, { isValidElement, useContext, useState } from 'react';
import AuthContext from './Authentication/AuthContext';
import { Grievance } from './Grievance';
import { useNavigate } from 'react-router-dom';


 


// export function Signup() {
  export  const Registration = () => {

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
        first_name :'',
        last_name :'',
        roll_NO:'',
        user:'',
        department:'',
        date_of_Birth:'',
        phone_number : '',
        email_Id:'',
        gender:'',
        password : '',
        conform_Password : '',
        error : 'success'
    });

    const [passwordError, setPasswordError] = useState('');

    const checkValidity =() => {
      let isValid = true;

      if(state.conform_Password != state.password){
        setPasswordError('Passwords do not match');
        setError(true);
        isValid = false;
      }
      return isValid;
    }


    const onSubmitHandler = async (e) =>{
      e.preventDefault();

      if(!checkValidity()){
        return;
      }
      const name = 'kiran';
      const tempState =_.cloneDeep(state);
      console.log(tempState)
      await axios.post('http://localhost:8081/api/v1/register',tempState)
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

        if(name === 'password') {
            if(value.length < 4) {
                setPasswordError('weak')
            } else if(value.length >= 4 && value.length < 8) {
                setPasswordError('moderate');
            } else if(value.length >= 8) {
                setPasswordError('Strong');
            }
        }
        setTimeout(() => {
            setError(false);
            setPasswordError('');
        }, 2000);
        
    }
  
  return (
    <>
  
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n       .signup-box {\n    width: 560px;\n    height: 890px;\n      margin-left: 500px;\n  background:linear-gradient(red,yellow);\n    border-radius: 1px; \n    margin-top: 130px;\n  }\n  \n \n .p-3 mx-auto {\n margin-top:-30px; \n} \n  \n h1{\n    text-align: center;\n    padding-top: 1px;\n  }\n  \n  \n  form {\n    width: 300px;\n    margin-left: 80px;\n  }\n  \n  form label {\n      margin-top: 20px;\n    font-size: 25px;\n  }\n  \n  form input {\n    width: 90%;\n    padding: 7px;\n    border: none;\n    border: 1px solid gray;\n    border-radius: 50px;\n    outline: none;\n  }\n  input[type="submit"] {\n    width: 320px;\n    height: 35px;\n    margin-top: 10px;\n    border: none;\n    background-color: #49c1a2;\n    color: white;\n    font-size: 20px;\n  }\n    \n    '
    }}
  />
  
  <div className="signup-box">
    <h1>Registration</h1>
    ``
    <form className="p-3 mx-auto" onSubmit={onSubmitHandler}>

      <div className="form-group mb-2 mt-4">
                        <label for="first_name" className="mb-2">First Name</label>
                        {/* <input data-testid="first_name" type=" text" className="form-control mb-1" id="first_name" required aria-describedby="emailHelp" onChange={onChangeHandler} placeholder="Enter Your First Name" value={state.firstname}/> */}
                        <input data-testid="first_name" type=" text" className="form-control mb-1" id="first_name" required aria-describedby="emailHelp" onChange={onChangeHandler} placeholder="Enter Your First Name" defaultvalue={state.first_name}/>
                       
                        
                    </div>

                    <div className="form-group my-4">
                        <label for="last_name" className="mb-2">Last Name</label>
                        <input data-testid="last_name" type="text" className="form-control mb-2" id="last_name" required aria-describedby="emailHelp" onChange={onChangeHandler} placeholder="Enter Your Last Name" defaultvalue={state.last_name}/>
                    </div>
                    
                    <div className="form-group my-4">
                        <label for="roll_no" className="mb-2">RollNO</label>
                        <input data-testid="roll_NO"  className="form-control mb-2"  type="text" id="roll_NO" required aria-describedby="emailHelp" onChange={onChangeHandler} placeholder="Enter ROll NO" defaultvalue={state.roll_NO}/>
                    </div>
                    
                    <div className="form-group my-4">
                        <label for="user" className="mb-2">user</label>
                        <select data-testid="-user" className="form-select" value={state.user} onChange={onChangeHandler} id="user" required aria-label="user Select">
                            <option selected>Select a user</option>
                            <option value="ADMIN">Admin</option>
                            <option value="USER">Student</option>
                        </select>
                    </div>

                    <div className="form-group my-4">
                        <label for="Departement" className="mb-2">Departement</label>
                        <select data-testid="department" className="form-select" value={state.department} onChange={onChangeHandler} id="department" required aria-label="departement Select">
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
                        <label for="Date of Birth" className="mb-2">Date of Birth</label>
                        <input data-testid="date_of_Birth" type="date" className="form-control mb-2" id="date_of_Birth" required aria-describedby="emailHelp" onChange={onChangeHandler} placeholder="Enter Date of Birth" value={state.dateofBirth}/>
                    </div>
                    <div className="form-group my-4">
                        <label for="gender" className="mb-2">Gender</label>
                        <select data-testid="gender" className="form-select" value={state.gender} onChange={onChangeHandler} id="gender" required aria-label="gender Select">
                            <option selected>Select a gender</option>
                            <option value="male">MALE</option>
                            <option value="female">FEMALE</option>
                        </select>
                    </div>
                    <div className="form-group my-4">
                        <label for="phoneNumber" className="mb-2">Phone Number</label>
                        <input data-testid="phone_number" type="number" className="form-control mb-2" id="phone_number" aria-describedby="emailHelp" required onChange={onChangeHandler} placeholder="Enter Phone Number" defaultvalue={state.phone_number}/>
                        {/* <small id="phoneNumberHelp" className={`form-text text-${!state.error ? 'success' : 'danger'}`}>{numberError}</small> */}
                    </div>
                   
                    <div className="form-group mb-2 mt-4">
                        <label for="email" className="mb-2">Email </label>
                        <input data-testid="email_Id" type="email" className="form-control mb-1" id="email_Id" required aria-describedby="emailHelp" onChange={onChangeHandler} placeholder="Enter Your email" value={state.email_Id}/>
                    </div>

                    <div className="form-group mb-3">
                        <label for="password" className="mb-2">Password</label>
                        <input data-testid="password" type="password" className="form-control  mb-2" id="password" placeholder="Enter new Password" onChange={onChangeHandler} value={state.password}/>
                        <small id="passwordhelp" className={`form-text text-danger`}>{passwordError}</small>
                    </div>
                    <div className="form-group mb-3">
                        <label for="confirmpassword" className="mb-2">Confirm Password</label>
                        {/* <input data-testid="confirmpassword" type="password" className="form-control  mb-2" id="confirmpassword" placeholder="Enter Your Confirm Password" onChange={onChangeHandler} value={state.confirmpassword}/> */}
                        <input data-testid="conform_Password" type="password" className="form-control  mb-2" id="conform_Password" placeholder="Enter Your Confirm Password" onChange={onChangeHandler} value={state.conform_Password}/>
                    </div>

                    <small id="emailhelp" className={`form-text text-${state.error !== '' ? state.error === 'success' ? 'success' : 'danger' : 'muted'}`}>{}</small>
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
  

</>

  )
}

export default Registration;