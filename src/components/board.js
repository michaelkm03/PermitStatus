import React, { useState } from 'react'
import Profiles from './profiles';
import { Leaderboard } from './database';

export default function Board() {

    // set default state, landing page
    const [location, setLocation] = useState("California");

  const handleClick = (e) => {
     
    setLocation(e.target.dataset.id)
  }

  return (
    <div className="board">
        <h1 className='leaderboard'>Most Recent Openings</h1>

        <div className="duration">
            <button onClick={handleClick} data-id='California'>California</button>
            <button onClick={handleClick} data-id='Washington'>Washington</button>
            <button onClick={handleClick} data-id='Utah'>Utah</button>
            <button onClick={handleClick} data-id='Montana'>Montana</button>
            <button onClick={handleClick} data-id='All'>All</button>
        </div>

        <Profiles Leaderboard={between(Leaderboard, location)}></Profiles>

    </div>
  )
}



function between(data, location, between){
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (between + 1));

    let filter = data.filter(val => {
        let userDate = new Date(val.dt);
        if (val.location === location) return val;
    })

    // sort with descending order
    return filter.sort(function(a,b){
        return b.dt.localeCompare(a.dt);
      });
}
