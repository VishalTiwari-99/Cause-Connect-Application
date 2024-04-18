import React from "react";
import RaiseFund from "../components/RaiseFund";
import "./RaiseFundPage.css";

const RaiseFundPage = () => {
  return (
    <div className="raiseFundPage" data-testid="raise-fund-page">
      <RaiseFund />
    </div>
  );
};

export default RaiseFundPage;
