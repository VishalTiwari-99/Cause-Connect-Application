import React from 'react'
import "./PageNotFound.css"

const PageNotFound = () => {
  return (
    <div className='PNFWrapper' data-testid="pnf">
      <div className="error">
        404
      </div>
      <div className="errText">
        Page Not Found!
      </div>
    </div>
  )
}

export default PageNotFound