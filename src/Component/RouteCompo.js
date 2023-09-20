import React from 'react'
import Home from './Home'
import Bollywood from './Bollywood'
import Technology from './Technology'
import Hollywood from './Hollywood'
import Fitness from './Fitness'
import Food from './Food'
//import Error from './Error'
import LinkCompo from './NavBarCompo'
import {Routes,Route} from 'react-router-dom'
import DataStore from './ConAPI'
import Detail from './Detail'
function RouteCompo() {
 return (
    <>
     <LinkCompo />
     <DataStore >
    <Routes>
    

        <Route path='/' element={<Home/>}/>
        <Route path='/Detail/:id' element={<Detail/>}/>
        <Route path='/Bollywood' element={<Bollywood/>}/>
        <Route  path='/Technology' element={<Technology/>}/>
        <Route path='/Hollywood' element={<Hollywood/>}/>
        <Route path='/Fitness' element={<Fitness/>}/>
        <Route path='/Food' element={<Food/>}/>
       
    </Routes>

    </DataStore>
    </>
 )
}

export default RouteCompo
