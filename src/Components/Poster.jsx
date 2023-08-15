import React from 'react'
import poster from "../Asset/poster.png"
import './CSS/LandingPage.css';


export default function Poster ()
{
    return (
        <div className='poster-image'>
            <img src={ poster } alt='dailyBiteUpdtes' />
        </div>
    )
}
