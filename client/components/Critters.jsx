import React from 'react';

const Critters = (props) => {
  const {critter} = props
  return (
    <div id="critters">
      {
        critter.map((animal,i) => {
          return (
            <div key={i}>
              <h3>{animal.name}</h3>
              <img src={animal.image} /> 
            </div>
          )
        })
      }
    </div>
  )
}

export default Critters;
