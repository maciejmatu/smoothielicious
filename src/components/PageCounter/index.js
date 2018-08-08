import React from 'react'
import style from './style.scss';

function PageCounter({ visitCount }) {
  console.log(visitCount);
  if (!visitCount) return null;

  return (
    <div className="counter">
      <h4>Our shop is sooo popular, we already have {visitCount} visits!</h4>
    </div>
  )
}

export default PageCounter