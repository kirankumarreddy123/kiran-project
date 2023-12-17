import './App.css';
import { Login } from './components/Login';
import { Front } from './components/Front';
import { Registration } from './components/Registration';
import { Routes,Route } from 'react-router-dom';
import { Message } from './components/Message';
import { Grievance } from './components/Grievance';
import { Admin } from './components/Admin';
import { ForgotPassword } from './components/ForgotPassword';

function App() {
  return (
    <div className="App">
      {/* <Front/>
       <Login/>
       <ForgotPassword/>
      <Registration/>
      <Message/> 
      <Admin/> */}
      <Routes>
        <Route path='/message' element={<Message/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/' element={<Front/>}></Route>
        <Route path='register' element={<Registration/>}></Route>
        <Route path='/grievance' element={<Grievance/>}></Route>
        <Route path='/admin'element={<Admin/>}></Route>
        <Route path='/forgotpassword'element={<ForgotPassword/>}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
