import React from 'react';

const Navbar = (props) => {
  return (
    <div id="nav">
      <button id="dogs" onClick={() => props.selectAnimal('dogs')}>Dogs</button>
      <button id="cats" onClick={() => props.selectAnimal('cats')} >Cats</button>
      <button id="dragons" onClick={() => props.selectAnimal('dragons')} >Dragons</button>
    </div>
  )
}

export default Navbar;
