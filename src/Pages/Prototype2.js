import React from 'react'
import Load1 from '../Components/Load1'
import Load from '../Components/Load'

const Prototype2 = () => {
  return (
   <>
   <div className='container'>
   <div className='navside'>
   <div className="container1">
      <div className="rectangle-container">
        <div className="rectangle">
          <div className="sub-rectangle first"></div>
          <div className="sub-rectangle second"></div>
          <div className="sub-rectangle third"></div>
        </div>
        <div className="text-container">
          <div className="text">P</div>
          <div className="text">e</div>
          <div className="circle"></div>
          <div className="letter-container">
            <div className="text">P</div>
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
    <div className='sami'>
        <img src="https://via.placeholder.com/46x46" alt="profile" />
        <div className='samiInfo'>
            <p className='p1'>Sami</p>
            <p className='p2' >1ere Année Primaire</p>
        </div>
    </div>
    <input type='text' placeholder='Rechercher'  className='search'/>
    <div className='helpcont'>
    <select className='jouer' value={'Jouer'}>
  <option className='custom-option'>Je m'entraine</option>
  <option className='custom-option'>Je m'évalue</option>
  <option hidden>Jouer</option>
</select>
<div className='help'>Tester vos jeux</div>
</div>
<div style={{height:'80px'}}></div>
<button className='cours'>Cours</button>
<div style={{height:'130px'}}></div>
<button className='deconnecter'> <span style={{marginRight:'15px'}}></span>Se Déconnecter</button>
   </div>
   <div className='board'>
   <Load  />
   </div>
   </div>
   </>
  )
}

export default Prototype2