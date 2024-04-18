import React from 'react'
import "./Home.css"
import {useNavigate} from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();
  const buttonClickHandler = () => {
    navigate('/donate');
  }

  return (
    <div className="HomeContainer" data-testid="home-container">
        <div className="home-page-left">
          <div className="heading">
            <span>Welcome to CauseConnect</span>
          </div>
          <div className="headingLine">
            <span>A Fundraising Platform</span>
          </div>
          <div className="home-btn">
            <button onClick={buttonClickHandler}>Help for a cause &nbsp;<span>&#129030;</span></button>
          </div>
        </div>
        <div className="home-page-right">
          <div className="home-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><path d="M37 40c-11.548 0-21.5 6.707-21.5 10a1.762 1.762 0 0 0 .586 1.335c1.157 1.053 3.6.873 9.021.365 2.163-.2 4.673-.436 7.38-.576a7 7 0 1 0 10.08.06c2.3.142 4.448.34 6.326.516 2.547.239 4.437.4 5.844.4 1.588 0 2.564-.212 3.177-.77A1.762 1.762 0 0 0 58.5 50c0-3.293-9.952-10-21.5-10zm4 14.5a3.5 3.5 0 1 1-3.547-3.495A3.5 3.5 0 0 1 41 54.5zM33.446 38.2A32.591 32.591 0 0 1 37 38a32.919 32.919 0 0 1 4.57.328 24.962 24.962 0 0 1 2.248-9.315A6.919 6.919 0 0 0 44.5 26a7 7 0 1 0-13.47 2.673 30.12 30.12 0 0 1 2.416 9.527z" style={{fill:"#c4a2fc"}}/><path d="M48.5 22h-.353A19.019 19.019 0 0 0 30.5 10a3.5 3.5 0 0 1 0-7 1 1 0 0 0 0-2 5.5 5.5 0 0 0-3.874 9.4A19.057 19.057 0 0 0 12.853 22H12.5a7 7 0 0 0 0 14h.353a18.976 18.976 0 0 0 35.294 0h.353a7 7 0 0 0 0-14zm-41 7a4.992 4.992 0 0 1 4.681-4.968 18.462 18.462 0 0 0 0 9.936A4.992 4.992 0 0 1 7.5 29zm23 17a17 17 0 0 1 0-34 2 2 0 0 1 0 4 1 1 0 0 0 0 2 3.992 3.992 0 0 0 3.666-5.591A17 17 0 0 1 30.5 46zm18.319-12.032a18.462 18.462 0 0 0 0-9.936 4.977 4.977 0 0 1 0 9.936z" style={{fill:"#151a6a"}}/><path d="M39.5 31a1 1 0 0 0-1 1 8 8 0 0 1-16 0 1 1 0 0 0-2 0 10 10 0 0 0 20 0 1 1 0 0 0-1-1z" style={{fill:"#151a6a"}}/></svg>
          </div>
        </div>
    </div>
  )
}

export default Home