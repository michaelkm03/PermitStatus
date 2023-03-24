import React, { useState } from 'react'
import Profiles from './profiles';
import { Leaderboard } from './database';

export default function Board() {

    // set default state, landing page
    const [state, setState] = useState("All");

  const handleClick = (e) => {
     
    setState(e.target.dataset.id)
  }

  return (
    <div className="board">
        <h1 className='leaderboard'>Most Recent Openings</h1>

        <div className="duration">
            <button onClick={handleClick} data-id='["AK", "CA", "WA", "OR"]'>Pacific Northwest</button>
            <button onClick={handleClick} data-id='["UT", "CO", "AZ", "OR"]'>Southwest</button>
            <button onClick={handleClick} data-id='["UT", "MT", "WY", "ID"]'>Mountain West</button>
            <button onClick={handleClick} data-id='All'>All</button>
        </div>

        <Profiles Leaderboard={between(Leaderboard, state)}></Profiles>

    </div>
  )
}



function between(data, state, between){
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (between + 1));

    let filter = data.filter(val => {
        let userDate = new Date(val.dt);
        if (state.includes(val.state) || state === "All") return val;
    })

    // sort date with descending order
    return filter.sort(function(a,b){
        return b.next_available_date.localeCompare(a.next_available_date);
      });
}
