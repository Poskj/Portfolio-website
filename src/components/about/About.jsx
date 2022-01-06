import "./about.css"
import mail from "../../img/mail.png"

const About = () => {
    return (
        
        <div className="info">
            <hr size="5" width="100%" color="blueviolet"></hr>
            <br></br>
            <br></br>
            <span className="infoTitle">Personal Information</span>
            <div className="Form">
                <div className="left">
            <span>&#11044; </span><label className="head">Name (ชื่อจริง) </label>
                <br></br>
            <span className="body">Thamanoon (ธรรมนูญ)</span>  
                <br></br>
                <br></br>
            <span>&#11044; </span><label className="head">LastName (นามสกุล) </label>
                 <br></br>
            <span className="body">Kitlertphairoj (กิจเลิศไพโรจน์) </span>  
                <br></br>
                <br></br>
            <span>&#11044; </span><label className="head">Nickname (ชื่อเล่น) </label>
                 <br></br>
            <span className="body">Posh (พอช)</span>  
                <br></br>
                <br></br>    
            <span>&#11044; </span><label className="head">Date of birth</label>
                 <br></br>
            <span className="body">10 December 2000</span>  
                <br></br>
                <br></br> 

            <span>&#11044; </span><label className="head">Address (ที่อยู่) </label>
                 <br></br>
            <span className="body">51/25 ถนนเฉลิมพระเกียรติ์ ร.9 ซอย 15 แขวงหนองบอน เขตประเวศ กรุงเทพฯ 10250 </span>  
                <br></br>
                <br></br> 
                </div>
                <div className="right">
            <span>&#11044; </span><label className="head">Phone No (เบอร์มือถือ) </label>
                 <br></br>
            <span className="body">062-6593924 </span>  
                <br></br>
                <br></br> 

            <span>&#11044;</span><label className="head">E-mail </label>
                 <br></br>
 
            <span className="body">posh.thammanoon@gmail.com </span>  
                <br></br>
                <br></br> 

            <span>&#11044; </span><label className="head">Facebook </label>
                 <br></br>
            <span className="body">Thammanoon Kitlertphairoj</span>  
                <br></br>
                <br></br>     

            <span>&#11044; </span><label className="head">Line ID </label>
                 <br></br>
            <span className="body">poshy1012 </span>  
                <br></br>
                <br></br> 
                
            <span>&#11044; </span><label className="head">My interests </label>
                 <br></br>
            <span className="body">- Keep practicing on Web Development</span>  
                <br></br>
            <span className="body">- create and design web application</span>     
                <br></br>  
            <span className="body">- learning new web technology</span>     
                <br></br>          
            <span className="body">- testing and debugging frontend part </span>     
                <br></br>   
            <span className="body">- New idea about web design patterns </span>     
                <br></br>    
                </div>  
            </div>
                     
        </div>
    )
}

export default About