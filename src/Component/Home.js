import React, { useContext } from 'react'
import { Store } from './ConAPI'
import arrowr from '../img/arrowr.svg'

import { Link } from 'react-router-dom'
import Footer from './Footer'

function Home() {

  const [homeData]=useContext(Store)
  return (

    <>


    <div className='hmainhm'>
<div className='hmain1'>
<div className='hmain11'>
{
        homeData.filter((item)=>(item.cat==='Hollywood') && (item.id===13)).map((data,tech)=>{
            return(
                <>
                <div className='Hcontainer' key={tech}>   
                <img className='himg1' src={data.image} alt='Not Found'/>
                <div className='caption'>
                <h2>Pirates Caribbean</h2>
                <p>{data.date}</p>
                </div>
                </div>
                </>
            )
        })
      }
</div>
<div className='hmain12'>
{homeData.filter((item)=>((item.id===25)  ||  (item.id===33) )).map((data,tech)=>{
            return(
              
                <div className='Hcontainer' key={tech}>
                <img className='himg2' src={data.image} alt='Not Found'/>
                <div className='caption1'>
                <h3>Computer<br/> Technology
                </h3>
                <p>{data.date}</p>
                </div>
                <div className='caption2'>
                <h3>Shahi paneer
                </h3>
                <p>{data.date}</p>
                </div>
                </div>
              
            )
        })
      }
</div>
</div>

<h1 className='b2'>The Latest</h1>
<div className='hmain2'>
<div className='hmain21s'> 
        {homeData.filter((item)=>  (item.id===40)  ).map((data,home)=>{
        return(
          <div className='hmain21'>
             <div   key={home}>
                <img className='himg3h' src={data.image} alt='Not Found'/>
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
        {homeData.filter((item)=> (item.id===48) ).map((data,home)=>{
        return(
          <div>
             <div   key={home}>
                <img className='himg3h' src={data.image} alt='Not Found'/>
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
        {homeData.filter((item)=> (item.id===22)).map((data,home)=>{
        return(
          <div>
             <div   key={home}>
                <img className='himg3h' src={data.image} alt='Not Found'/>
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




<h1 className='b2l'>Latest Article</h1>

<div className='hmain3'>
<div className='hmain31'> 

<div className='latest-div'> 

{homeData.filter((item)=>((item.cat==='Technology') && (item.id>=26))).map((data,holly)=>{
            return(
                <>
              
                <div className='bcontainer1' key={holly}>
                  <div >
                <img className='himg5' src={data.image} alt='Not Found'/>
                </div>
                <div className='dsc1'>
                <Link to={`/Detail/${data.id}`}>  <h3>{data.Heading}</h3></Link>
                <p className='ds1'>{data.description}</p>
                </div>
                </div>
                </>
            )
        })
      }
  
</div>

{/* 
{homeData.filter((item)=>((item.cat==='Hollywood') && (item.id>=53))).map((data,holly)=>{
            return(
                <>
              
                <div className='bcontainer1' key={holly}>
                  <div >
                <img className='himg5' src={data.image} alt='Not Found'/>
                </div>
                <div className='dsc1'>
                <Link to={`/Detail/${data.id}`}>  <h3>{data.Heading}</h3></Link>
                <p className='ds1'>{data.description}</p>
                </div>
                </div>
                </>
            )
        })
      }
   */}


<div className='latest-div'> 

{homeData.filter((item)=>((item.cat==='Food') && (item.id>=41))).map((data,holly)=>{
            return(
                <>
              
                <div className='bcontainer1' key={holly}>
                  <div >
                <img className='himg5' src={data.image} alt='Not Found'/>
                </div>
                <div className='dsc1'>
                <Link to={`/Detail/${data.id}`}>  <h3>{data.Heading}</h3></Link>
                <p className='ds1'>{data.description}</p>
                </div>
                </div>
                </>
            )
        })
      }
  
</div>


<div className='latest-div'> 

{homeData.filter((item)=>((item.cat==='Fitness') && (item.id>=50))).map((data,holly)=>{
            return(
                <>
              
                <div className='bcontainer1' key={holly}>
                  <div >
                <img className='himg5' src={data.image} alt='Not Found'/>
                </div>
                <div className='dsc1'>
                <Link to={`/Detail/${data.id}`}>  <h3>{data.Heading}</h3></Link>
                <p className='ds1'>{data.description}</p>
                </div>
                </div>
                </>
            )
        })
      }
  
</div>



<div className='latest-div'> 
<p><img  src={arrowr} alt='Not Found'/><span className='dm'> Load More</span></p>  
{homeData.filter((item)=>((item.cat==='Bollywood') && (item.id>=52))).map((data,holly)=>{
            return(
                <>
              
                <div className='bcontainer1' key={holly}>
                  <div >
                <img className='himg5' src={data.image} alt='Not Found'/>
                </div>
                <div className='dsc1'>
                <Link to={`/Detail/${data.id}`}>  <h3>{data.Heading}</h3></Link>
                <p className='ds1'>{data.description}</p>
                </div>
                </div>
                </>
            )
        })
      }
  
</div>










 
{/* <h1  className='b1'>Top Posts</h1> */}
{/* <div className='hmain312'>
{homeData.filter(((item)=>(item.id===27))).map((data)=>{
            return(
                <>            
                <img className='himg6' src={data.image} alt='Not Found'/>
                </>
            )
        })
      }
   </div> */}




 
</div>
{/*  
<div className='hmain32'>
  <div className='Adds'>
 Advertisement
 
  </div>
   */}
  <div className='hmain322'>
    <div>
   <h1  className='b1'>Top Posts</h1>
    {homeData.filter((item)=>(item.id===5)).map((data,tech)=>{
            return(
                <>
                <div className='blcontainer' key={tech}>
                  <Link className='Link' to={`/Detail/${data.id}`}>
                  <div >

                <img className='bsimg' src={data.image} alt='Not Found'/>
                </div>
                <div className='bdsc'>
                <span className='bsh'>{data.Heading}</span> <span id='st'  className='number'>1</span>
                </div>
                </Link> 
                <p className='ds'>{data.date}</p>
              <hr></hr>
                </div>
                </>
            )
        })
      }
    </div>
    <div>
    {
  homeData.filter((item)=>item.id===39).map((data,ind)=>{
    return(
     
      <div className='shorthome' key={ind}>
        <div className='bsimg'>
         <img className='bsimg1' src={data.image} alt='Not Found'/>
         </div>
         <div className='bdsc2'>
                <h3 className='bsh'>{data.Heading}</h3> 
                <span className='ds'>{data.date}</span>
                </div>
                <div id='number'><span  className='number'>2</span>
                </div>
      </div>
    )
   

  })
}
    </div>
    <hr className='hrhome'/>
    <div>
    {
  homeData.filter((item)=>item.id===46).map((data,ind)=>{
    return(
     
      <div className='shorthome' key={ind}>
        <div className='bsimg'>
         <img className='bsimg1' src={data.image} alt='Not Found'/>
         </div>
         <div className='bdsc2'>
                <h3 className='bsh'>{data.Heading}</h3> 
                <span className='ds'>{data.date}</span>
                </div>
                <div id='number'><span  className='number'>3</span>
                </div>
      </div>
    )
   

  })
}
    </div>
    <hr/>
    <div>
    {
  homeData.filter((item)=>item.id===15).map((data,ind)=>{
    return(
     
      <div className='shorthome' key={ind}>
        <div className='bsimg'>
         <img className='bsimg1' src={data.image} alt='Not Found'/>
         </div>
         <div className='bdsc2'>
                <h3 className='bsh'>{data.Heading}</h3> 
                <span className='ds'>{data.date}</span>
                </div>
                <div id='number'><span  className='number'>4</span>
                </div>
      </div>
    )
   

  })
}
    </div>
 
  </div>
   </div>
    

 
   <div className='hmain32'>
  <div className='Adds'>
 Advertisement
 
  </div>

   </div> 

    </div>  

    <div className='home-footer'>
      < Footer/>
    </div>
    </>
  )
}

export default Home
