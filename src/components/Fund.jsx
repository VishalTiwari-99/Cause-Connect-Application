import axios from 'axios';
import {useNavigate} from "react-router-dom"
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import './Fund.css'

const Fund = () => {

    const navigate = useNavigate();
    const {fundID} = useParams();
    const [fund, setFund] = useState([]);
    const [donation, setDonation] = useState("");
    
    useEffect(()=>{
        const getFundDetail = async() => {
            axios.get("http://localhost:4000/users/"+fundID)
            .then((response)=>{
                if(response.data != null){
                    setFund(response.data)
                }else{
                    console.log("error in getting fund details")
                }
            })
        }

        getFundDetail();
    },[fundID])

    const donationHandler = () => {
        if((!donation)||donation.length===0){
            return;
        }
        let data = fund;
        data.donation = parseInt(data.donation) + parseInt(donation);
        setDonation("")
        axios.put("http://localhost:4000/users/"+fundID, data)
        .then(response => {
            setFund(response.data)
        }).catch(error=>{
            console.log(error);
        });
    }

    const editDetailHandler = () => {
        navigate(`/donate/${fund.id}/update`);
    }

  return (
    <div className="fundWrapper" data-testid='fund-component'>
        <div className="topWrapper">
            <div className="topLeft">
                <img src={"/"+fund.Img} alt="" />
            </div>
            <div className="topRight">
                <div className="trTop">
                    <div className="raised">
                        <span className='amountDetails'>Amount Raised:</span>
                        <span className='amountNum'>${fund.donation}</span>
                    </div>
                    <div className="needed">
                        <span className='amountDetails'>Amount Needed:</span>
                        <span className='amountNum'>${fund.amount}</span>
                    </div>
                </div>
                <div className="trBottom">
                    <div className="inputAmt">
                        <input type="text" placeholder='Enter Amount' value={donation} onChange={(e)=>setDonation(e.target.value)}/>
                    </div>
                    <div className="btn">
                        <button onClick={donationHandler}>Donate Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottomWrapper">
                <span className="title">Details about Fundraise:</span>
                <div className="bottomDetails">
                    <table>
                        <tbody>
                            <tr>
                                <td className="left"><span>Beneficiary:</span></td>
                                <td  className="right"><span>{fund.beneficiary}</span></td>
                            </tr>
                            <tr>
                                <td className="left"><span>Email:</span></td>
                                <td  className="right"><span>{fund.email}</span></td>
                            </tr>
                            <tr>
                                <td className="left"><span>Account Number:</span>
                                </td><td  className="right"><span>{fund.accountnumber}</span></td>
                            </tr>
                            <tr>
                                <td className="left"><span>Gender:</span></td>
                                <td  className="right"><span>{fund.gender}</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="desc">
                        <span className='left'>Description:</span><span className="right">{fund.description}</span>
                    </div>
                </div>
                <div className="editButton">
                    <button onClick={editDetailHandler}>Edit Details</button>
                </div>
        </div>
    </div>
  )
}

export default Fund