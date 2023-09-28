import React, { useState } from 'react';
import '../App.css';
 import { NavLink} from 'react-router-dom';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { RxCross2 } from 'react-icons/rx';


function LinkCompo() {
  const [count,setCount] = useState(false);

  return (
    <>
      {/* <div className='hdl'>
        <h1>
          <span id="titlethe">THE </span>
          <span id="titlesiren">SIREN</span>
        </h1>
      </div>
      */}


<div id="navlink">
    <ul>
        <li>
    <NavLink  to="/" className="link" >Home</NavLink></li>
        <li>
    <NavLink  to="/Hollywood" className="link" >Hollywood</NavLink></li>
        <li>
    <NavLink  to="/Bollywood" className="link" >Bollywood</NavLink></li>
        <li>
    <NavLink  to="/Technology"  className="link">Technology </NavLink></li>
        <li>
    <NavLink  to="/Fitness"  className="link">Fitness</NavLink></li>
        <li>
        <NavLink  to="/Food"  className="link">Food</NavLink></li>
        
</ul>
<div onClick={()=>setCount(!count)} className="display"><i className="fa-solid fa-bars"  >+</i></div>


</div>

<div className={(count)?"hambergerlinks show":"hambergerlinks hide"}>
<ul>
        <li>
    <NavLink  onClick={()=>setCount(!count)} to="/" className="link" >Home</NavLink></li>
        <li>
    <NavLink   onClick={()=>setCount(!count)}  to="/Hollywood" className="link" >Hollywood</NavLink></li>
        <li>
    <NavLink   onClick={()=>setCount(!count)}  to="/Bollywood" className="link" >Bollywood</NavLink></li>
        <li>
    <NavLink   onClick={()=>setCount(!count)}  to="/Technology"  className="link">Technology </NavLink></li>
        <li>
    <NavLink   onClick={()=>setCount(!count)}  to="/Fitness"  className="link">Fitness</NavLink></li>
        <li>
        <NavLink   onClick={()=>setCount(!count)}  to="/Food"  className="link">Food</NavLink></li>
        
</ul>
</div>

    </>
  );
}

export default LinkCompo;

