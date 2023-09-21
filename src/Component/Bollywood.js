import React,{useContext} from 'react'
import {Store} from './ConAPI'
import '../App.css'
import { Link } from 'react-router-dom';
import arrowr from '../img/arrowr.svg'
import Footer from './Footer';

function Bollywood() {
  const [bollyData]=useContext(Store);
  return (

    




    <div>

<h1 className='b2CP'>Bollywood</h1>
<div className='hmain2Cp'>
<div className='hmain21s'> 
        {bollyData.filter((item)=>  (item.id===6)  ).map((data,home)=>{
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
        {bollyData.filter((item)=> (item.id===7) ).map((data,home)=>{
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
        {bollyData.filter((item)=> (item.id===11)).map((data,home)=>{
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
       {bollyData.filter((item)=>(item.cat==='Bollywood') && (item.id<13)).map((data,bolly)=>{
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
        {bollyData.filter((item)=>(item.cat==='Bollywood') && (item.id===5)).map((data,bolly)=>{
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
  bollyData.filter((item)=>item.id===6).map((data,ind)=>{
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
  bollyData.filter((item)=>item.id===9).map((data,ind)=>{
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
  bollyData.filter((item)=>item.id===2).map((data,ind)=>{
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
      
<div className='Adds1'>
  Advertisement
</div>

        </div>
        
    </div>
 <Footer/>
</div>


  )
}

export default Bollywood
