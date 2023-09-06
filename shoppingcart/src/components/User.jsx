import React from "react";
import "../styles/User.css";

const User = () => {
  return (
    <center>
      
      <div className="user container-fluid ">
        <div className="container-fluid contact_form_box">
          <form className="contact_form">
            <h1>CONTACT</h1>
            <label>NAME </label>
            <br />
            <input type="text" />
            <br />

            <label>EMAIL </label>
            <br />
            <input type="email" />
            <br />

            <label>MESSAGE </label>
            <br />
            <textarea rows="10" cols="10"></textarea>
            <br />
            <input id="submit" type="SUBMIT" />
          </form>
        </div>
      </div>
    </center>
  );
};

export default User;
