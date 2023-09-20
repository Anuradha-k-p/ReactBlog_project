import React,{useState} from 'react'
import '../App.css'
import { Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'

function LinkCompo() {
  const[isMobile,setIsMobile]=useState(false);
  return (
  <>

  <div className='hdl'>
    <h1><span id="titlethe">THE </span><span id="titlesiren">SIREN</span></h1>
    </div>
    <button id='btn1' className='mobileview' onClick={()=>{setIsMobile(!isMobile)}}>
        {isMobile ? <GiHamburgerMenu/> :  <RxCross2/> }
        </button>
        <p></p>
 <div  className={isMobile ? "cross" : "menu"} onClick={()=>{setIsMobile(false)}}>
 <Link to='/' className='nav_element'>Home</Link>
  <Link to='/Bollywood' className='nav_element'>Bollywood</Link>
  <Link to='/Technology' className='nav_element'>Technology</Link>
  <Link to='/Hollywood' className='nav_element'>Hollywood</Link>
  <Link to='/Fitness' className='nav_element'>Fitness</Link>
  <Link to='/Food' className='nav_element'>Food</Link>
    </div>
        <hr id="hr"></hr>
   
    </>
  )
}

export default LinkCompo