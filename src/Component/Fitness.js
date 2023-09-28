import React,{useContext} from 'react'
import {Store} from './ConAPI'
import { Link } from 'react-router-dom';
// import arrowr from '../img/arrowr.svg'
import Footer from './Footer';
function Fitness() {
  const [fitnessData]=useContext(Store);
  console.log(fitnessData)
  return (  <div>


<h1 className='b2CP'>Fitness</h1>
<div className='hmain2Cp'>
<div className='hmain21s'> 
        {fitnessData.filter((item)=>  (item.id===44)  ).map((data,home)=>{
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
        {fitnessData.filter((item)=> (item.id===46) ).map((data,home)=>{
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
        {/* {fitnessData.filter((item)=> (item.id===47)).map((data,home)=>{
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

      } */}



{fitnessData.filter((item)=> (item.id===49) ).map((data,home)=>{
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




    <div className='OuterCp'>
    <div className='seccnt'>
      <h1 className='b1'>Letest</h1>
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

{/* 
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
    } */}









      {/* <p><span > Load More</span><img className='d' src={arrowr} alt='Not Found'/></p> */}
      </div>
      <div className='seccnt'>
        <h1  className='b1'>Top Posts</h1>
      {/* {fitnessData.filter((item)=>(item.cat==='Fitness') && (item.id===43)).map((data,bolly)=>{
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
    } */}

{
fitnessData.filter((item)=>item.id===43).map((data,ind)=>{
  return(
    <div className='short' key={ind}>
      <div className='bsimg'>
       <img className='bsimg1' src={data.image} alt='Not Found'/>
       </div>
       <div className='bdsc2'>
       <Link to={`/Detail/${data.id}`}><h3 className='bsh'>{data.Heading}</h3></Link> 
              {/* <span className='ds'>{data.date}</span> */}
              </div>
              <div id='number'><span  className='number'>1</span></div>

           
    </div>
  )
 

})
}
      <hr/>




{
fitnessData.filter((item)=>item.id===50).map((data,ind)=>{
  return(
    <div className='short' key={ind}>
      <div className='bsimg'>
       <img className='bsimg1' src={data.image} alt='Not Found'/>
       </div>
       <div className='bdsc2'>
       <Link to={`/Detail/${data.id}`}><h3 className='bsh'>{data.Heading}</h3></Link> 
              {/* <span className='ds'>{data.date}</span> */}
              </div>
              <div id='number'><span  className='number'>2</span></div>

           
    </div>
  )
 

})
}
      <hr/>


      {
fitnessData.filter((item)=>item.id===51).map((data,ind)=>{
  return(
    <div className='short' key={ind}>
      <div className='bsimg'>
       <img className='bsimg1' src={data.image} alt='Not Found'/>
       </div>
       <div className='bdsc2'>
       <Link to={`/Detail/${data.id}`}><h3 className='bsh'>{data.Heading}</h3></Link> 
              {/* <span className='ds'>{data.date}</span> */}
              </div>
              <div id='number'><span  className='number'>3</span></div>

           
    </div>
  )
 

})
}
      <hr/>
      {
fitnessData.filter((item)=>item.id===43).map((data,ind)=>{
  return(
    <div className='short' key={ind}>
      <div className='bsimg'>
       <img className='bsimg1' src={data.image} alt='Not Found'/>
       </div>
       <div className='bdsc2'>
       <Link to={`/Detail/${data.id}`}><h3 className='bsh'>{data.Heading}</h3></Link> 
              {/* <span className='ds'>{data.date}</span> */}
              </div>
              <div id='number'><span  className='number'>4</span></div>

           
    </div>
  )
 

})
}
<hr/>
    
<div className='Adds1'>
Advertisement
</div>

      </div>
      
  </div>
  <div className='Fitness-footer'>
 <Footer/>
 </div>
  </div>
  )
}

export default Fitness
