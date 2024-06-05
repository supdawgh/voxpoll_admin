import React from 'react'
import { FaStar } from 'react-icons/fa'


const event=[
    {
        title:'Mic Drop',
        icon:<FaStar />
    },
    {
        title:'Dance Off',
        duration:'2 months',
        icon:<FaStar/>
    },
    {
        title:'Art Attack',
        duration:'1 months',
        icon:<FaStar/>
    },
]
const Card = () => {
  return (
    <div className='card--container'>
    {event.map((item)=>(
        <div className='card'>
            <div className='card--cover'>{item.icon}
            </div>
            <div className='card--title'>
                <h2>{item.title}</h2>
            </div>


        </div>
    ))}
    </div>
  )
}

export default Card
