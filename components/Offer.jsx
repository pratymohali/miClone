import React from 'react'

function Offer({ offer }) {
 
    return (
        <div className='offer'>
        
          {
            offer.map((list) => <div> <img src={list.image} alt="Offers" /> </div>)
          }
        </div>
    )
}

export default Offer
