import React from 'react';
import '../styles/candidateList.css';
import Image1 from '../assets/image.png';

const candidate=[
    {
        image:Image1,
        name:'Candace Doe',
        description:'Good Singer',

    },
    {
        image:Image1,
        name:'Candace Doe',
        description:'Good Singer',

    }, {
        image:Image1,
        name:'Candace Doe',
        description:'Good Singer',

    },
];

const CandidateList = () => {
  return (
    <div className='candidate--list'>  
      <div className='list--header'>
        <h2>Candidate</h2>
        <select>
            <option value='MicDrop'>MicDrop</option>
            <option value='DanceOff'>DanceOff</option>
        </select>

      </div>
      <div className='list--container'>
      {candidate.map(candidate=>(
        <div className='list'>
            <div className='candidate--details'>
                <img src={candidate.image} alt={candidate.name}></img>
                <h2>{candidate.name}</h2>
            </div>
            <span>{candidate.description}</span>
        </div>
      ))}
      </div>
    </div>
  )
}

export default CandidateList
