import React from 'react'
import Fund from '../components/Fund'
import "./FundPage.css"

const FundPage = () => {
  return (
    <div className='fundWrapper' data-testid="fund-page">
      <Fund />
    </div>
  )
}

export default FundPage