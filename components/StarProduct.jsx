import React from 'react'

function StarProduct(starProduct) {
 console.log(starProduct,"starproduce")

    return (
    <div>
 <div className='productHeading'>
  <h1 className='heading'>STAR PRODUCTS</h1>
 </div>     
 <div className='starcontainer'>
 <div className='firststar'>
<picture>
   <img src={starProduct.starProduct[0].image} />
</picture>

 </div>
 <div className='secondstar'>
   {starProduct.starProduct.slice(1).map(list =>
   <picture key={list}>
      <img src={list.image} />
   </picture>
   )}
 </div>
    
 </div>
    </div>
  )
}

export default StarProduct
