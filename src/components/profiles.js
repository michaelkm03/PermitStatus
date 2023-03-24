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
                            <a href={"https://www.recreation.gov/permits/" + value.permit_id} target='_blank'>
                                <div id="thediv" 
                                /> 
                                <div className="info" >
                                    <h3 className='name text-light'>{value.name}</h3>    
                                    <h5 className='name text-light'>{value.org_name} | {value.entrance_name}</h5>    
                                    <h5 className='name text-light'>{value.city}, {value.state}</h5>    
                                    <h5 className='name text-light'>Next Available: {value.next_available_date}</h5>    
                                    <h5 className='name text-light'>Permits: {value.count}</h5>    
                            </div>   
                            </a>             
                        </div>
                    </div>
                    )
                )
            }
        </>

        
    )
}
