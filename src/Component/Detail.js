import { useContext } from "react"
import { Store } from "./ConAPI"; 
import { Link } from "react-router-dom";
import {useNavigate, useParams } from "react-router-dom";
import {AiFillGithub, AiTwotoneLike} from 'react-icons/ai';
import {GrShareOption} from 'react-icons/gr';
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillTwitterSquare} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import "./Details.css"





const Detail = () => {
    // const [DData]=useContext(Store);

   const[DData] = useContext(Store);




  var {id}=useParams();
  const Category = DData[id].cat
  
  const DynamicData = DData.filter((item) => item.cat === Category ).slice(0,3)
  console.log(DynamicData)
  console.log(Category)
  id=Number(id);



  const navi  = useNavigate();

  return (
    <>
  


    <button onClick={() => navi(-1)} className="back_but">back</button>



     
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



    <div className='detail-content'>
    {
    DData.filter((item)=>{return item.id===id}).map((element,index)=>(
    <div>
    <div className='detail-title' key={index}>
    <h2>{element.Heading}</h2>
    </div>
    <div className='person'>
  
    <div>
    <p className='name'>{element.name}</p>
    <p className='date'>{element.date}</p>
    </div>
    <div className='logos'>
    <AiFillFacebook/>
    <AiFillTwitterSquare/>
    <AiFillInstagram/>
    <AiFillGithub/>
    
    <AiFillYoutube/>
    </div>
    </div>
      <img src={element.image} alt="" className='detail-content-img'></img>
      <div className='detail-para'>
      <p>{element.fulldescription}</p>
      </div>
      </div>
    ))
    }
    </div>
    <div className='down-like'>
      
      <p></p>
    </div>
   
    {
    DData.filter((item)=>{return item.id===id}).map((element,index)=>(
    <div className='person-2' key={index}>
    <img src={element.avatar}  alt="" className='avatar'></img>
    <div>
    <p className='written'>&nbsp;&nbsp;WRITTEN BY</p>
    <p className='name'>{element.name}</p>
    <p className='date'>{element.date}</p>
    </div>
    </div>
    ))
    }
    <div className='footer'>
    <h2>More from The Siren</h2>
    <hr className='footer-hr'></hr>
    <div className='footer-items'>
    <div className='more-1'>
    {
   DynamicData.map((element,index)=>(
      <div className='more1-data' key={index}>
        <Link to={`/Detail/${element.id}`} className='link'><img  className="dyimg"  src={element.image} alt=""></img></Link>
        <Link to={`/Detail/${element.id}`} className='link'><h4>{element.Heading}</h4></Link>
        <div  className='more-avatar'>
        
        <div>
        <p className='name'>{element.name}</p>
        <p className='more-date'>{element.date}</p>
        </div>
        </div>
      </div>
    ))}
    </div>






{/* 
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
               */}

{/* 
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
                <AiFillGithub/>
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
 */}





{/* 

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
    <div className="dmainc21">
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
    <div className="dmainc21">
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
    

</div>
 */}




   </div>




   </div>


        </>
  )
}

export default Detail
