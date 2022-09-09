import React, { useState } from 'react';


import { logo } from "./data.json"

function Navigation() {

    return (
        <div className='navigation'>
            <div className='navigation-first' >
        <img src={logo} id="logoimage"/>
            </div>
            <div className='navigation-second'>
                <p>Xiaomi Phones</p>
                <p>Redmi Phones</p>
                <p>TV</p>
                <p>Laptops & Tablets</p>
                <p>Fitness</p>
                <p>Home</p>
                <p>Audio</p>
            </div>
            <div className='searchbar'>
                <input type="text" placeholder='search' />
                <span class="material-icons">
<img src="/search.svg" />
</span>
            </div>
        </div>
        
    )
}

export default Navigation
