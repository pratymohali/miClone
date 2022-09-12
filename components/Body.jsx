import React from 'react'
import Banner from './Banner'
import MiData from "./data.json"
import Navigation from './Navigation'
import PreNav from './PreNav'
import Offer from './Offer'
import StarProduct from "./StarProduct"
import HotAccesories from "./HotAccesories"
import ProductReviews from './ProductReviews'
import Videos from './Videos'

function WebBody() {
  console.log(MiData, "Mydata")


  return (
    <>
      <PreNav />
      <Navigation />
      <Banner />
      <Offer offer={MiData.offer} />
<StarProduct starProduct={MiData.starProduct} />
<HotAccesories />
<ProductReviews productreview={MiData.productReviews}/>
<Videos video={MiData.videos} />
    </>
  )
}

export default WebBody
