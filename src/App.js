import './App.css';

import RouteCompo from './Component/RouteCompo';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
<div className='hdl'>
<h1>
<span id="titlethe">THE </span>
          <span id="titlesiren">SIREN</span>
        </h1>
        </div>
 
    <BrowserRouter>
    
    <RouteCompo/>
  
    </BrowserRouter>
  
    </>
  );
}

export default App;
