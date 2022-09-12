import React from 'react'

function ProductReviews(productreview) {
    // console.log(,"+++++");
    return (
        <div>
            <div className='productHeading'>
                <h1 className='heading'>PRODUCT REVIEWS</h1>
            </div>
           <div className='productreview'>

            {productreview.productreview.map((list) => <div className='product-container'>
                <picture>
                    <img src={list.image}/>
                </picture>
                <div className='producthead' style={{padding:"1%"}}>
                    <h1>{list.review}</h1>
                </div>
                <div className='producttitle' style={{padding:"1%"}}>
<p>{list.name}</p>
<p id="price">{list.price}</p>

                </div>
            </div>)}
           </div>
        </div>
    )
}

export default ProductReviews;
