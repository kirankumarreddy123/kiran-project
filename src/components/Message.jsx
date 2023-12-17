import { Link } from "react-router-dom";
import "./Message.css";
export function Message() {
    return (
        <div>
            <img src="./assets/Gates-Institute-logo.png" alt='...'id="I1"/>
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
    <div id="f3">
        <tr><td><b><h2>Welcome</h2></b><hr/></td></tr>
        <div id="request">
<h3>Sorry! For your Inconvinient...</h3>
<form>
<label for="">User Name:  </label>
<input type="text" id="name"/>
<br/>
<br/>
<label for="">Password:</label>
<input type="password" id="Password"/>
<br/>
<br/>
<label for="">Date of filling the form:</label>
<input type="date" id="dob"/>
<br/>
<br/>
<label for="">Email:</label>
<input type="email" id="email" required/>
<br/>
<p>The specific details of the complaint:</p>
<textarea>

</textarea>
<br/>
<br/>
<button type="submit">Send</button>
</form>
        </div>
    </div>
    {/* <Link to="/">Click to go to our Home</Link> */}
        </div>
    )
}
// import React from 'react'
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import swal from 'sweetalert';
// export function ContactUs(){
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('          ', '           ',e.target, '                     ')
//       .then((result) => {
//           console.log(result.text);
//           console.log("message sent Successfully!");
//       }, (error) => {
//           console.log(error.text);
//       });
//       e.target.reset()
//       swal({
//         title: "Message!",
//         text: "Thank you for Messaging to GITIANS Team!",
//         icon: "success",
//         button: "ok",
//       });
//   }
//   return (
//     <>
//     <meta charSet="UTF-8" />
//   <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>About</title>
//   <style
//     dangerouslySetInnerHTML={{
//       __html:
//         "\n          .logo img{\n    width: 65px;\n    margin: 0;\n    padding: 0 0 1px;\n    position: absolute;\n    top: 10%;\n    Left: 1%\n}\na{\n    text-decoration: none;\n}\n\n\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\nbody{\n  min-height: 100vh;\n  /* display: flex; /\n  align-items: center;\n  justify-content: center;\n  / background-color: #EFEFEF; /\n  background-image: url(https://wallpapercave.com/wp/wp2370511.jpg);\n  background-size: cover;\n  background-color: #c8e8e9;\n}\na{\n  color: white;\n}\n.scroll{\n  background-color: black;\n  font-size: 16px;\n  color: blue;\n  font-weight: bold;\n}\nmarquee:hover{\n  background-color: rgb(37, 125, 172);\n  margin-top: 3px;\n}\na{\n  text-decoration: none;\n}\n\nheader{\n  text-align: center;\n  background-color: rgb(140, 249, 6);\n  position: sticky;\n  width: 100%;\n  height: 90px;\n  margin-top: 1px;\n}\n.nav a{\n  text-decoration: none;\n  / display: inline-block; /\n  / display: inline; /\n}\nul{\n  list-style-type: none;\n  margin-top: 20px;\n}\nul li{\n  display: inline-block;\n}\nul li a{\n  color: black;\n  padding: 5px 40px;\n  border: 1px solid black;\n  background-color: whitesmoke;\n  border-radius: 5px;\n  transition: 0.6s ease;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\nul li a:hover{\n  background-color: lightcoral;\n  color: black;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n.scroll,a{\n  color: black;\n}\nmarquee,a{\n  color: black;\n}\n.scroll,a:hover{\n  font-family: Arial, Helvetica, sans-serif;\n  color: blue;\n}\nheader,h1{\n  font-family: 'Times New Roman', Times, serif;\n}\n\n.button,a{\n  color: white;\n}\na:hover{\n  color: white;\n}\n\n\n\n\n\n/ Google Font CDN Link /\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');\n{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\" , sans-serif;\n}\n/* body{\n  min-height: 100vh;\n  width: 100%;\n  background: #c8e8e9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n} /\n.container{\n  width: 85%;\n  background: #fff;\n  border-radius: 6px;\n  padding: 20px 60px 30px 40px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  margin-top: 80px;\n  margin-left: 100px;\n  / justify-content: center; /\n  / align-items: center; */\n}\n.container .content{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.container .content .left-side{\n  width: 25%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 15px;\n  position: relative;\n}\n.content .left-side::before{\n  content: '';\n  position: absolute;\n  height: 20%;\n  width: 2px;\n  right: -15px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: #afafb6;\n}\n.content .left-side .details{\n  margin: 14px;\n  text-align: center;\n}\n.content .left-side .details i{\n  font-size: 30px;\n  color: #3e2093;\n  margin-bottom: 10px;\n}\n.content .left-side .details .topic{\n  font-size: 18px;\n  font-weight: 500;\n}\n.content .left-side .details .text-one,\n.content .left-side .details .text-two{\n  font-size: 14px;\n  color: #afafb6;\n}\n.container .content .right-side{\n  width: 75%;\n  margin-left: 75px;\n}\n.content .right-side .topic-text{\n  font-size: 23px;\n  font-weight: 600;\n  color: #3e2093;\n}\n.right-side .input-box{\n  height: 50px;\n  width: 100%;\n  margin: 12px 0;\n}\n.right-side .input-box input,\n.right-side .input-box textarea{\n  height: 100%;\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 16px;\n  background: #F0F1F8;\n  border-radius: 6px;\n  padding: 0 15px;\n  resize: none;\n}\n.right-side .message-box{\n  min-height: 110px;\n}\n.right-side .input-box textarea{\n  padding-top: 6px;\n}\n.right-side .button{\n  display: inline-block;\n  margin-top: 12px;\n}\n.right-side .button input[type=\"submit\"]{\n  color: #fff;\n  font-size: 18px;\n  outline: none;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 6px;\n  background: #3e2093;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.button input[type=\"submit\"]:hover{\n  background: #04bafc;\n  font-weight: bold;\n}\n\n@media (max-width: 950px) {\n  .container{\n    width: 90%;\n    padding: 30px 40px 40px 35px ;\n  }\n  .container .content .right-side{\n   width: 75%;\n   margin-left: 55px;\n}\n}\n@media (max-width: 820px) {\n  .container{\n    margin: 40px 40px;\n    height: 100%;\n  }\n  .container .content{\n    flex-direction: column-reverse;\n  }\n .container .content .left-side{\n   width: 100%;\n   flex-direction: row;\n   margin-top: 40px;\n   justify-content: center;\n   flex-wrap: wrap;\n }\n .container .content .left-side::before{\n   display: none;\n }\n .container .content .right-side{\n   width: 100%;\n   margin-left: 0;\n }\n}\n#last{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n  margin-left: center;\n  color: white;\n  font-size: 1rem;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n        "
//     }}
//   />
//   <header>
//     <h1>Online Easy Shop Finder,Gooty</h1>
//     <div className="nav">
//       <ul>
//         <li>
//           <a href="/">Home</a>
//         </li>
//         <li>
//           <a href="/AboutUs"> About us</a>
//         </li>
//         <li>
//           <a href="/ContactUs">Contact us</a>
//         </li>
//         <li>
//           <a href="/LoginPage">Logout</a>
//         </li>
//       </ul>
//     </div>
//     <div className="logo">
//       <img src={require("./Assets/Contactlogo.png")} />
//     </div>
//   </header>
//   <div className="scroll">
//     <marquee behavior="scroll" direction="" scrollamount={15}>
//       <a href="/VisitPage">
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click
//         Here ---&gt; to Visit some Famous and Historical places in Gooty Town
//         and nearby
//         Gooty.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(:---------Thank
//         You----------:)
//       </a>{" "}
//     </marquee>
//   </div>
//   <div className="container">
//     <div className="content">
//       <div className="left-side">
//         <div className="address details">
//           <i className="fas fa-map-marker-alt" />
//           <div className="topic"><b>Address</b></div>
//           <div className="text-one">GATES Institute of Technology</div>
//           <div className="text-two">NH-44 Gooty(515401)</div>
//         </div>
//         <div className="phone details">
//           <i className="fas fa-phone-alt" />
//           <div className="topic"><b>Phone</b></div>
//           <div className="text-one">+91 9391421653</div>
//           <div className="text-two">+91 9121685038</div>
//         </div>
//         <div className="email details">
//           <i className="fas fa-envelope" />
//           <div className="topic"><b>Email</b></div>
//           <div className="text-one">appradeep2001@gmail.com</div>
//           <div className="text-two">shaikmansoor2621@gmail.com</div>
//         </div>
//       </div>
//       <div className="right-side">
//         <div className="topic-text">Send us a Message</div>
//         <p>
//           If you have any doubts from this application or any types of quries
//           related to Gooty's Application, you can send me message from here.
//           It's my pleasure to help you.
//         </p>
//         <form onSubmit={sendEmail}>
//           <div className="input-box">
//             <input type="text" placeholder="Enter your Full Name" required="" name='user_name' />
//           </div>
//           <div className="input-box">
//             <input type="email" placeholder="Enter your email" required="" name='user_email' />
//           </div>
//           <div className="input-box message-box">
//             <input type="text" placeholder="How can we Help you!" required="" name='message' />
//           </div>
//           <div className="button">
//             <input type="submit" defaultValue="Send Now" />
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
//   <footer>
//     <div id="last">
//       Copyright © GATES webapplication.com All rights&nbsp;reserved!
//     </div>
//   </footer>
// </>


//   )
// }