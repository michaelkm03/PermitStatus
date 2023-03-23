import React from 'react'
import { Link } from 'react-router';
export default function profiles({ Leaderboard }) {
    const linkToPermit = (e) => {
        
    }

  return (
        <div id="profile">
            {Item(Leaderboard)}
        </div>
  )
}

function Item(data){
    return (

        <>
            {
                data.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item">
                            <img src={value.img} alt="" />
            
                            <div className="info" /*onClick={e => linkToPermit()}*/>
                                {/* How to make div clickable?
                                <Link href="www.google.com"></Link> */}
                                <h3 className='name text-light'>{value.name}</h3>    
                                <h4 className='name text-light'>{value.location}</h4>    
                                <h4 className='name text-light'>{value.count}</h4>    
                            </div>                
                        </div>
                        {/* <div className="item">
                            <span>{value.count}</span>
                        </div> */}
                    </div>
                    )
                )
            }
        </>

        
    )
}
