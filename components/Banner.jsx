import React, { useState } from 'react'
import MiData from "./data.json"
import Image from "next/image"
import Carousel from 'react-bootstrap/Carousel';

function Banner() {


  return (
    <div className='banner'>

      <Carousel fade >

        {MiData.banner.start.map((list) => {
          console.log(list, "pratyuhs")
          return <Carousel.Item>
            <img
              className="d-block w-100"
              src={list}
              alt="First slide"

            />

          </Carousel.Item>




        })}

      </Carousel>


    </div>
  )
}

export default Banner

