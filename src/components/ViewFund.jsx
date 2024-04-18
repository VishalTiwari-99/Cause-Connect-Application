import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import "./ViewFund.css"
import axios from 'axios';
import Card from './Card';

const ViewFund = () => {
    const navigate = useNavigate();
    const [funds, setFunds] = useState([]);
    const [currFund, setCurrFund] = useState({
            Img:"assets/images/images1.jpg",
            beneficiary: "Alice",
            id:1,
            amount: "5000",
            description: "Funds needs for Alice's medical treatment."
        });

    useEffect(()=>{
        const getAllFunds = async() => {
            axios.get("http://localhost:4000/users")
            .then((response)=>{
                if(response.data != null){
                    setFunds(response.data)
                }else{
                    console.log("Data not Received")
                }
            });
        }

        getAllFunds();
    },[])

    const navigateHandler = () => {
        navigate(`/donate/${currFund.id}`)
    }

    const handleCardClick = (data) => {
        setCurrFund(data);
    }

  return (
    <div className='wrapperClass' data-testid="view-component">
        <div className="title">
            <span className="titleText">Together To Help The World Better!</span>
        </div>
        <div className="funds">

            {funds.map(fund => (
                <Card key={fund.id} fund={fund} onCardClick={handleCardClick}/>
            ))}

        </div>
        <div className="featuredFund">
            <div className="schoolFund">
                <div className="imageContainer">
                    <img src={currFund.Img} alt='error img' />
                </div>
                <div className="text">
                    <span className="titleSF">Help {currFund.beneficiary}, for the better future</span>
                    <span className="textSF">{currFund.description}</span>
                </div>
                <div className="fundDetail">
                    <span className="fReq">Fund Required</span>
                    <span className="fReqDetail">${currFund.amount}</span>
                </div>
                <div className="donateButton">
                    <button onClick={navigateHandler}>Donate</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewFund