import React from 'react'
import './Card.css'
const Card = ({title, poweredBy}) => {
  return (
    /* From Uiverse.io by AyuuLima */ 
<div className="EventCard">
  <p className="heading">{title}</p>
  <p>Powered By</p>
  <p>{poweredBy}</p>
</div>

  )
}

export default Card