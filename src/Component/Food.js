import React, { useContext } from 'react'
import { Store } from './ConAPI'
import '../App.css'
import { Link } from 'react-router-dom';

import Footer from './Footer';
function Food() {
  const [foodData]=useContext(Store);
  return ( 

  <>

  
<h1 className='b2CP'>Food</h1>
<div className='hmain2Cp'>
<div className='hmain21s'> 
        {foodData.filter((item)=>  (item.id===29)  ).map((data,home)=>{
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
        {foodData.filter((item)=> (item.id===34) ).map((data,home)=>{
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
        {foodData.filter((item)=> (item.id===41)).map((data,home)=>{
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
        <h1 className='b1'>The Letest</h1>
       {foodData.filter((item)=>(item.cat==='Food') && (item.id>=32)).map((data,bolly)=>{
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
    
        </div>

        <div className='seccnt'>
          <h1  className='b1'>Top Posts</h1>
        {/* {foodData.filter((item)=>(item.cat==='Food') && (item.id===36)).map((data,bolly)=>{
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
  foodData.filter((item)=>item.id===36).map((data,ind)=>{
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
  foodData.filter((item)=>item.id===31).map((data,ind)=>{
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
  foodData.filter((item)=>item.id===35).map((data,ind)=>{
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
  foodData.filter((item)=>item.id===33).map((data,ind)=>{
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

<div className='Adds1'>
  Advertisement
</div>

        </div>
        
    </div>
    <div className='food-footer'>
 <Footer/>
 </div>
   </>
  )
}

export default Food
