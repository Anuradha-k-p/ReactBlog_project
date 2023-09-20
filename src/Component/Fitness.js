import React,{useContext} from 'react'
import {Store} from './ConAPI'
import { Link } from 'react-router-dom';
import arrowr from '../img/arrowr.svg'
function Fitness() {
  const [fitnessData]=useContext(Store);
  console.log(fitnessData)
  return (  <div>


<h1 className='b2'>The Latest</h1>
<div className='hmain2'>
<div className='hmain21s'> 
        {fitnessData.filter((item)=>  (item.id===55)  ).map((data,home)=>{
        return(
          <div className='hmain21'>
             <div   key={home}>
                <img className='himg3' src={data.image} alt='Not Found'/>
                </div>
                <div className='hdsc'>
                <Link to={`/Detail/${data.id}`}>  <h3>{data.Heading}</h3></Link>
                <p className='hds'>{data.description}</p>
                <p className='ds'>{data.date}</p>
                </div>
          </div>
        )
      })

      }
        </div>
        <div className='hmain21s'> 
        {fitnessData.filter((item)=> (item.id===58) ).map((data,home)=>{
        return(
          <div>
             <div   key={home}>
                <img className='himg3' src={data.image} alt='Not Found'/>
                </div>
                <div className='hdsc'>
                <Link to={`/Detail/${data.id}`}>  <h3>{data.Heading}</h3></Link>
                <p className='hds'>{data.description}</p>
                <p className='ds'>{data.date}</p>
                </div>
          </div>
        )
      })

      }
        </div>
        <div className='hmain21s'>
        {fitnessData.filter((item)=> (item.id===64)).map((data,home)=>{
        return(
          <div>
             <div   key={home}>
                <img className='himg3' src={data.image} alt='Not Found'/>
                </div>
                <div className='hdsc'>
                <Link to={`/Detail/${data.id}`}>  <h3>{data.Heading}</h3></Link>
                <p className='hds'>{data.description}</p>
                <p className='ds'>{data.date}</p>
                </div>
          </div>
        )
      })

      }
        </div>

</div>




    <div className='Outer'>
    <div className='seccnt'>
      <h1 className='b1'>Fitness</h1>
     {fitnessData.filter((item)=>item.cat==='Fitness').map((data,bolly)=>{
          return(
              <>
            
              <div className='bcontainer' key={bolly}>
                <div >
              <img className='img' src={data.image} alt='Not Found'/>
              </div>
              <div className='dsc'>
             <Link to={`/Detail/${data.id}`}> <h3>{data.Heading}</h3></Link>
              <p className='ds'>{data.description}</p>
              <p className='ds'>{data.date}</p>
              
              </div>
              
              </div>
              <hr className='hr'/>
              </>
               
          )
      })

      } 
      <p><span > Load More</span><img className='d' src={arrowr} alt='Not Found'/></p>
      </div>
      <div className='seccnt'>
        <h1  className='b1'>Top Posts</h1>
      {fitnessData.filter((item)=>(item.cat==='Fitness') && (item.id===58)).map((data,bolly)=>{
          return(
              <>
            
              <div className='blcontainer' key={bolly}>
                <div >
              <img className='bsimg' src={data.image} alt='Not Found'/>
              </div>
              <div className='bdsc'>
              <span className='bsh'>{data.Heading}</span> <span id='st'  className='number'>1</span>
              </div>
              <p className='ds'>{data.date}</p>
            <hr></hr>
              </div>
              </>
          )
      })
    }

{
fitnessData.filter((item)=>item.id===59).map((data,ind)=>{
  return(
    <div className='short' key={ind}>
      <div className='bsimg'>
       <img className='bsimg1' src={data.image} alt='Not Found'/>
       </div>
       <div className='bdsc2'>
              <h3 className='bsh'>{data.Heading}</h3> 
              <span className='ds'>{data.date}</span>
              </div>
              <div id='number'><span  className='number'>2</span></div>

           
    </div>
  )
 

})
}
      <hr/>
      {
fitnessData.filter((item)=>item.id===63).map((data,ind)=>{
  return(
    <div className='short' key={ind}>
      <div className='bsimg'>
       <img className='bsimg1' src={data.image} alt='Not Found'/>
       </div>
       <div className='bdsc2'>
              <h3 className='bsh'>{data.Heading}</h3> 
              <span className='ds'>{data.date}</span>
              </div>
              <div id='number'><span  className='number'>3</span></div>

           
    </div>
  )
 

})
}
      <hr/>
      {
fitnessData.filter((item)=>item.id===64).map((data,ind)=>{
  return(
    <div className='short' key={ind}>
      <div className='bsimg'>
       <img className='bsimg1' src={data.image} alt='Not Found'/>
       </div>
       <div className='bdsc2'>
              <h3 className='bsh'>{data.Heading}</h3> 
              <span className='ds'>{data.date}</span>
              </div>
              <div id='number'><span  className='number'>4</span></div>

           
    </div>
  )
 

})
}
<hr/>
      {
fitnessData.filter((item)=>item.id===62).map((data,ind)=>{
  return(
    <div className='short' key={ind}>
      <div className='bsimg'>
       <img className='bsimg1' src={data.image} alt='Not Found'/>
       </div>
       <div className='bdsc2'>
              <h3 className='bsh'>{data.Heading}</h3> 
              <span className='ds'>{data.date}</span>
              </div>
              <div id='number'><span  className='number'>5</span></div>

           
    </div>
  )
 

})
}
<hr/>
      {
fitnessData.filter((item)=>item.id===55).map((data,ind)=>{
  return(
    <div className='short' key={ind}>
      <div className='bsimg'>
       <img className='bsimg1' src={data.image} alt='Not Found'/>
       </div>
       <div className='bdsc2'>
              <h3 className='bsh'>{data.Heading}</h3> 
              <span className='ds'>{data.date}</span>
              </div>
              <div id='number'><span  className='number'>6</span></div>

           
    </div>
  )
 

})
}
<hr/>
      {
fitnessData.filter((item)=>item.id===54).map((data,ind)=>{
  return(
    <div className='short' key={ind}>
      <div className='bsimg'>
       <img className='bsimg1' src={data.image} alt='Not Found'/>
       </div>
       <div className='bdsc2'>
              <h3 className='bsh'>{data.Heading}</h3> 
              <span className='ds'>{data.date}</span>
              </div>
              <div id='number'><span  className='number'>7</span></div>

           
    </div>
  )
 

})
}
<hr/>
      {
fitnessData.filter((item)=>item.id===57).map((data,ind)=>{
  return(
    <div className='short' key={ind}>
      <div className='bsimg'>
       <img className='bsimg1' src={data.image} alt='Not Found'/>
       </div>
       <div className='bdsc2'>
              <h3 className='bsh'>{data.Heading}</h3> 
              <span className='ds'>{data.date}</span>
              </div>
              <div id='number'><span  className='number'>8</span></div>

           
    </div>
  )
 

})
}
<div className='Adds1'>
Advertisement
</div>

      </div>
      
  </div>
  </div>
  )
}

export default Fitness
