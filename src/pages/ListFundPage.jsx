import React from 'react'
import ViewFund from '../components/ViewFund'
import "./ListFundPage.css"

const ListFundPage = () => {
  return (
    <div className="listFundPage" data-testid="list-fund-page">
      <ViewFund />
    </div>
  )
}

export default ListFundPage