import "./contact.css"
import mail from "../../img/mail.png"
import mobile from "../../img/mobile.png"
import facebook from "../../img/facebook.png"
import instagram from "../../img/Instagram.png"
import line from "../../img/Line_logo.png"
import gmail from "../../img/Gmail_icon.png"
import github from "../../img/github.png"


const Contact = () => {
    return (
        
        <section className="container_info">
            <div className="titledivider"></div>
            <h2 className="infoTitle">Contact</h2>
            <div className="aboutcontent">
                <ul className="aboutItems">
                <li className="aboutcontactItem">
                        <img src={facebook} alt="mobile" className="icon"/>
                        <div className="aboutItemText">
                            <h3 className="face">Facebook</h3>
                            <p>Thammanoon Kitlertphairoj</p>
                        </div>
                </li>
                <li className="aboutcontactItem">
                        <img src={instagram} alt="instagram" className="icon"/>
                        <div className="aboutItemText">
                            <h3 className="ig">Instagram</h3>
                            <p>poshy1012</p>
                        </div>
                    </li>
                    <li className="aboutcontactItem">
                        <img src={line} alt="line" className="icon"/>
                        <div className="aboutItemText">
                            <h3 className="line">Line ID</h3>
                            <p>poshy1012</p>
                        </div>
                    </li>
                </ul>
                <ul className="aboutItems">
                    <li className="aboutcontactItem">
                        <img src={github} alt="github" className="icon"/>
                        <div className="aboutItemText">
                            <h3 className="git">GitHub</h3>
                            <p>https://github.com/Poskj</p>
                        </div>
                    </li>
                    <li className="aboutcontactItem">
                        <img src={gmail} alt="gmaik" className="icon"/>
                        <div className="aboutItemText">
                            <h3 className="gmail">Gmail</h3>
                            <p>posh.thammanoon@gmail.com</p>
                        </div>
                    </li>
                    <li className="aboutcontactItem">
                        <img src={mobile} alt="mobile" className="icon"/>
                        <div className="aboutItemText">
                            <h3 className="other">Phone No. (เบอร์มือถือ)</h3>
                            <p>0626593924</p>
                        </div>
                    </li>
                </ul>
            </div>
            
           
                     
        </section>
    )
}

export default Contact