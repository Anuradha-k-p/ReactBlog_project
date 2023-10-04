
import { Link } from "react-router-dom"
import {FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaGithub} from "react-icons/fa";


const Footer = () =>{
 return(
    <>
    <div className="container">

        <div className="child">
           <h4> <bold>About Us :</bold></h4>
            

            <p> "The man who reads <br/>nothing at all is better<br/> educated than the man<br/> who reads nothing <br/>but newspapers"
            </p>
         <div className="icon">
             <FaFacebook/>&nbsp;&nbsp;&nbsp;&nbsp;
             <FaTwitter/>  &nbsp;&nbsp;&nbsp;&nbsp;
             <FaInstagram/> &nbsp;&nbsp;&nbsp;&nbsp;
             <FaWhatsapp/> &nbsp;&nbsp;&nbsp;&nbsp;
             <FaGithub/> &nbsp;&nbsp;&nbsp;&nbsp;</div>
            


        </div>
        <div className="child">
          <h4>Navigation</h4>
          <p> <Link to='/' className="decor"> Home</Link></p>
          <p> <Link to='/Bollywood' className="decor"> Bollywood</Link></p>
          <p> <Link to='/Technology' className="decor"> Technology</Link></p>
          <p> <Link to='/Hollywood' className="decor"> Hollywood</Link></p>
          <p> <Link to='/Fitness' className="decor"> Fitness</Link></p>
          <p> <Link to='/Food' className="decor"> Food</Link></p>

         
        </div>

        <div className="child">
            <h4>Contact Details</h4>
            <p><bold>Address :444 West 19th Street<br/> - Suite 304 New York,<br/> NY 10011</bold>  </p>
            <p><bold>Contact No :</bold><br/> +91 123-456-6780  </p>
            <p><bold>E-mail :</bold><br/> abc@gmail.com  </p>




        </div>
{/* 
        <div className="child" id='ch'>
        <h4>Free for enquiry : </h4>
            <label> Name: </label>
            <input/><br/><br/><br/><br/>
            <label> Number: </label>
            <input/><br/><br/><br/><br/>
            <label> E-mail: </label>
            <input/><br/><br/><br/>


            <label> Address : </label>
            <textarea rows='3' column='3'>

            </textarea><br/><br/><br/>


            <button className="button">send</button>

        </div> */}


    </div>
    
    
    </>
 )


}
export default Footer
