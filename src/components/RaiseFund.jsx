import axios from 'axios';
import React, { useState }  from 'react';
import {useNavigate} from "react-router-dom"
import './RaiseFund.css';

const RaiseFund = () => {

  const navigate = useNavigate();
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [reason, setReason] = useState("");
    const [file, setFile] = useState("");
  
    const nameFieldValidator = (name) => {
      if(name.length===0){
        return "Name Field is cannot be null";
      }
  
      if(name.length > 50){
        return "Name Field should not exceed 50 characters";
      }
  
      for(let i=0; i<name.length; i++){
        if(!((name.charCodeAt(i)>=65 && name.charCodeAt(i)<=90) || (name.charAt(i)===' ') || (name.charCodeAt(i)>=97 && name.charCodeAt(i)<=122))){
          return "Name Field can contain Alphabets only";
        }
      }
  
      return null;
    }
  
    const genderFieldValidator = (gender) => {
      if(gender.length===0){
        return "Gender cannot be null";
      }
      if(! (gender==="Male" || gender==="Female")){
        return "Invalid Gender";
      }
      return null;
    }
  
    const emailFieldValidator = (email) => {
      if(email.length===0){
        return "Email cannot be null";
      }
      if( ! email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        return "Incorrect Email ID";
      }
      return null;
    }
  
    const accNumFieldValidator = (accNum) => {
      if(accNum.length === 0){
        return "Account Number cannot be null"
      }
      for(let i=0; i<accNum.length; i++){
        if(!(accNum.charCodeAt(i)>=48 && accNum.charCodeAt(i)<=57)){
          return "Account Number can contain Numeric Character Only"
        }
      }
      return null;
    }
  
    const amountFieldValidator = (amount) => {
      if(amount.length === 0){
        return "Amount Field cannot be empty";
      }
      if(!(amount.match(/^[+]?\d+$/) || amount.match(/^[+]?\d+(\.\d+)?$/))){
        return "Amount Field can contain only positive Floating point number"
      }
      return null;
    }
  
    const fileFieldValidator = (file) => {
      if(file==="" || (!file)){
        return "Image Field cannot be empty"
      }
      return null;
    }
  
    const reasonFieldValidator = (reason) => {
      if(reason.length===0){
        return "Reason Field cannot be empty";
      }
      return null;
    }
  
    const submitHandler = (event) => {
      event.preventDefault();
  
      // validation
      let error = nameFieldValidator(name);
      if(error != null){
        error = "Invalid Form, " + error;
        alert(error);
        return;
      }
  
      error = genderFieldValidator(gender);
      if(error != null){
        error = "Invalid Form, " + error;
        alert(error);
        return;
      }
  
      error = emailFieldValidator(email);
      if(error != null){
        error = "Invalid Form, " + error;
        alert(error);
        return;
      }
  
      error = accNumFieldValidator(accountNumber);
      if(error != null){
        error = "Invalid Form, " + error;
        alert(error);
        return;
      }
  
      error = amountFieldValidator(amount);
      if(error != null){
        error = "Invalid Form, " + error;
        alert(error);
        return;
      }
  
      error = fileFieldValidator(file);
      if(error != null){
        error = "Invalid Form, " + error;
        alert(error);
        return;
      }
  
      error = reasonFieldValidator(reason);
      if(error != null){
        error = "Invalid Form, " + error;
        alert(error);
        return;
      }
      
      const imgAdd = "assets/images/"+file.name;
      const data = {
        "beneficiary":name,
        "gender":gender,
        "email":email,
        "accountnumber":accountNumber,
        "amount":amount,
        "description":reason,
        "Img":imgAdd,
        "donation":"0"
      }

      axios.post("http://localhost:4000/users", data)
      .then((res)=>{

      }).catch(err=>{
        console.log(err);
      })
      
      navigate("/donate");

    };
  
    const cancelHandler = () => {
      setName("");
      setGender("");
      setEmail("");
      setAccountNumber("");
      setAmount("");
      setReason("");
      setFile("");
    };

  return (
    <div className="formWrapper">
    <div className="formHeader">New Fund Request</div>
    <div className="formBody">
      <table>
        <tbody>
          <tr>
            <td className="left">Name</td>
            <td className="right">
              <input
                className="input1"
                type="text"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="left">Gender</td>
            <td className="right">
              <input type="radio" value="Male" checked={gender==="Male"} onChange={(event)=>setGender(event.target.value)}/>
              <span className="radioOption">Male</span>
              <input type="radio" value="Female" checked={gender==='Female'} onChange={(event)=>setGender(event.target.value)} />
              <span className="radioOption">Female</span>
            </td>
          </tr>
          <tr>
            <td className="left">Email ID</td>
            <td className="right">
              <input
                className="input1"
                name="email"
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="left">Account Number</td>
            <td className="right">
              <input
                className="input1"
                name="accNum"
                type="text"
                value={accountNumber}
                onChange={(event) => setAccountNumber(event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="left">Amount</td>
            <td className="right type2">
              <input
                className="input2"
                name="amount"
                type="text"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
              />
              <span className="img">Image</span>
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </td>
          </tr>
          <tr>
            <td className="left">Reason for Fund Request</td>
            <td className="right">
              <textarea
                name="reason"
                cols="60"
                rows="6"
                value={reason}
                onChange={(event) => setReason(event.target.value)}
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="formButtons">
        <button onClick={submitHandler}>Save</button>
        <button className="cancelbtn" onClick={cancelHandler}>Cancel</button>
      </div>
    </div>
  </div>
  )
}

export default RaiseFund