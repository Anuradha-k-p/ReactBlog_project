import { useContext } from "react"
import { Store } from "./ConAPI"; 

import {useParams } from "react-router-dom";
import {AiTwotoneLike} from 'react-icons/ai';
import {GrShareOption} from 'react-icons/gr';
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillTwitterSquare} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';

const Detail = () => {
    const [DData]=useContext(Store);
  var {id}=useParams();
  id=Number(id);

  return (
    <>
   <div className="dmainc">
<div className="detail1">

      {DData.filter((item)=>item.id===id).map((data,bolly)=>{
            return(
                <>
              <div className="mdetai"  key={bolly}> 
             
              <div className='like-share'>
             <div className='like'>
                 <AiTwotoneLike/> 
                     <p>Like</p>
                        </div>
                  <div className='share'>
                   <GrShareOption/> 
                   <p>Share</p>
                        </div>
    
              </div>
              
              <div>
                 <div className='mimage'>
                 <h3>{data.Heading}</h3>
                 <div className="avtaricon">
                 <div className="avtar">
                  
                   <div>
                  <p>{data.name}</p>
                  <p className='ds'>{data.date}</p>
                 </div>
                 </div>
                 <div className="lg">
                 < AiFillFacebook/>
                <AiFillTwitterSquare/>
                <AiFillInstagram/>
                <AiFillYoutube/>
                 </div>
                
                 </div>
                  <div >
                <img className='im' src={data.image} alt='Not Found'/>
                </div>
                <div className='dsc'>
                <p className='dtds'>{data.fulldescription}</p>
                </div>
                <div className="js1">
                <span className="js">☺️</span>  <span className="js">Review</span> <span  className="js">Comment</span>
              <p> <AiTwotoneLike/> </p>
              <hr/>
              <div className="avtar1">
                  
                   <div>
                    <span className='ds'>Written</span>
                  <p>{data.name}</p>
                  <p className='ds'>{data.date}</p>
                 </div>
                 </div>
              <hr/>
              </div>
                </div>
               
              </div>
             
              </div>
                </>
            )
        })

        }
   
</div>
<div className="dbox">
  <h4 >More From The Siren</h4>
    <hr className="mr1"/>
<div className="dmainc2">

    <div className="dmainc21">
    {DData.filter((item)=>(item.id===32)).map((data,bolly)=>{
          return(
              <>
             <div className='blcontainer1' key={bolly}>
               <img className='dmg' src={data.image} alt='Not Found'/>
               <p className='bsh'>{data.Heading}</p>
               <div className="avc">
              
              <div>
              
               <p className='dsbt'>{data.date}</p>
               <p className='dsbt'>{data.name}</p>
               </div>
               </div>
          </div>
              </>
          )
      })
    }
    </div>
    <div className="dmainc22">
    {DData.filter((item)=>(item.id===51)).map((data,bolly)=>{
          return(
              <>
             <div className='blcontainer1' key={bolly}>
               <img className='dmg' src={data.image} alt='Not Found'/>
               <p className='bsh'>{data.Heading}</p>
               <div className="avc">
             
              <div>
               <p className='dsbt'>{data.date}</p>
               <p className='dsbt'>{data.name}</p>
               </div>
               </div>
          </div>
              </>
          )
      })
    }
    </div>
    <div className="dmainc23">
    {DData.filter((item)=>(item.id===17)).map((data,bolly)=>{
          return(
              <>
             <div className='blcontainer1' key={bolly}>
               <img className='dmg' src={data.image} alt='Not Found'/>
               <p className='bsh'>{data.Heading}</p>
               <div className="avc">
             
              <div>
              
               <p className='dsbt'>{data.date}</p>
               <p className='dsbt'>{data.name}</p>
               </div>
               </div>
          </div>
              </>
          )
      })
    }
    </div>
    <div className="dmainc24">
    {DData.filter((item)=>(item.id===64)).map((data,bolly)=>{
          return(
              <>
             <div className='blcontainer1' key={bolly}>
               <img className='dmg' src={data.image} alt='Not Found'/>
               <p className='bsh'>{data.Heading}</p>
               <div className="avc">
              
              <div>
               <p className='dsbt'>{data.date}</p>
               <p className='dsbt'>{data.name}</p>
               </div>
               </div>
          </div>
              </>
          )
      })
    }
    </div>
  
</div>
   </div>
   </div>
        </>
  )
}

export default Detail
