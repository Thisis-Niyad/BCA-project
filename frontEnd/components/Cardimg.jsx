import React from 'react'
import {Link} from 'react-router-dom'

function Cardimg({ img,url }) {
  return (
    <div>
      <div className="container_main">
      <img src={img} alt="design" className="image" />

      <div className="overlay">
        <div className="text">
          <div className="btn_main">
            <div className="buy_bt">
              <Link path={url}>BUY</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Cardimg
