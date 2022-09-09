import React from 'react'

function Offer({ offer }) {
 
    return (
        <div className='offer'>
        
          {
            offer.map((list) => <div key={list}> 
            <picture>
            <img src={list.image} alt="Offers" /> 
            </picture>
            </div>)
          }
        </div>
    )
}

export default Offer
