import { Link } from "react-router-dom";
import './ForgotPassword.css';
export function ForgotPassword() {
  return(
    
  <div class="forgot-password-container">
    <form>
    <h2 class="forgot-password-title">Forgot Password</h2>
    <input type="email" class="forgot-password-input" placeholder="Email"/>
    <button id="forgotPasswordButton" class="forgot-password-button">Reset Password</button>


  <script src="forgotPassword.js"></script>
  <Link to="/">Click to go to our Home</Link> 
  </form>
  </div>
 
  )
}
