import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import { useParams } from "react-router-dom"
import "./UpdateFund.css"

const UpdateFund = () => {
    
    const navigate = useNavigate();
    const [fund, setFund] = useState("");
    const [amount, setAmount] = useState("");
    const [reason, setReason] = useState("");
    const [img, setImg] = useState("");
    const {fundID} = useParams();

    useEffect(()=>{
        const getFundDetail = async() => {
            axios.get("http://localhost:4000/users/"+fundID)
            .then((response)=>{
                if(response.data != null){
                    setFund(response.data)
                    setAmount(response.data.amount);
                    setReason(response.data.description);
                }else{
                    console.log("error in getting fund details")
                }
            })
        }
        

        getFundDetail();
    },[fundID])    

    const submitHandler = () => {
        const ImgURL = "assets/images/"+img.name;
        let data = fund;
        if(fund.amount===amount && fund.description===reason && fund.Img===ImgURL){
            return;
        }
        if(fund.amount !== amount){
            data.amount = amount;
        }
        if(fund.description !== reason){
            data.description = reason;
        }
        if((img) && fund.Img !== ImgURL){
            data.Img = ImgURL;
        }
        axios.put("http://localhost:4000/users/"+fundID, data)
        .then(response => {
            setFund(response.data)
        }).catch(error=>{
            console.log(error);
        });
        navigate(`/donate/${fundID}`);
    }

  return (
    <div className="formWrapper" data-testid="update-component">
    <div className="formHeader">Update Fund Request</div>
    <div className="formBody">
      <table>
        <tbody>
          <tr>
            <td className="left">Amount</td>
            <td className="right">
              <input
                className="input1"
                type="text"
                name="name"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="left">Image</td>
            <td className="right">
            <input
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={(e) => setImg(e.target.files[0])}
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
      </div>
    </div>
  </div>
  )
}

export default UpdateFund