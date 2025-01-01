import React from 'react'
import './Card.css'
const Card = ({title, poweredBy,image}) => {
  return (
    /* From Uiverse.io by AyuuLima */ 
<div className="EventCard"
 style={{
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}}>
  <p className="heading">{title}</p>
  <p>Powered By</p>
  <p>{poweredBy}</p>
</div>

  )
}

export default Card