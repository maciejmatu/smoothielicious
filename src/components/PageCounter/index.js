import React from 'react'
import style from './style.scss';

function PageCounter({ count }) {
  return (
    <div className="counter">
      {count ? (
        <h4>Our shop is sooo popular, we already have {count} visits!</h4>
      ) : (
        <h4>Loading...</h4>
      )}
    </div>
  )
}

export default PageCounter