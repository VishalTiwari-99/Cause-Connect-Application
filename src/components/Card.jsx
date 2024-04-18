import React from 'react'
import {useNavigate} from "react-router-dom"
import "./Card.css"

const Card = ({fund, onCardClick}) => {
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(`/donate/${fund.id}`);
    }


  return (
    <div className='wrapperCard' data-testid='card-container' onClick={()=>onCardClick(fund)}>
        <div className="CardImgContainer">
            <img src={fund.Img} alt="" />
        </div>
        <div className="CardInfoContainer">
            <div className="CardInfoTitle">
                <span>Send Donation</span>
            </div>
            <div className="CardInfoText">
                <span>
                    {fund.description.substring(0,50)+"..."}
                </span>
            </div>
            <div className="CardInfoButton">
                <button className='CardInfoBtn' onClick={clickHandler}>FUNDRAISE&nbsp;<span>&#129030;</span></button>
            </div>
        </div>
    </div>
  )
}

export default Card