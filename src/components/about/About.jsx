import "./about.css"
import mail from "../../img/mail.png"
import mobile from "../../img/mobile.png"
import address from "../../img/address.png"
import birthdate from "../../img/birth.png"
import fullname from "../../img/name.png"


const About = () => {
    return (
        
        <section className="container_info">
            <div className="titledivider"></div>
            <h2 className="infoTitle">Personal Information</h2>
            <div className="aboutcontent">
                <ul className="aboutItems">
                <li className="aboutItem">
                        <img src={fullname} alt="mobile" className="icon"/>
                        <div className="aboutItemText">
                            <h3 className="hh">Name (ชื่อจริง)</h3>
                            <p>Thamanoon Kitlertphairoj</p>
                            <p>ธรรมนูญ กิจเลิศไพโรจน์</p>
                        </div>
                </li>
                <li className="aboutItem">
                        <img src={fullname} alt="mail" className="icon"/>
                        <div className="aboutItemText">
                            <h3 className="hh">Nickname (ชื่อเล่น)</h3>
                            <p>Posh (พอช)</p>
                        </div>
                    </li>
                    <li className="aboutItem">
                        <img src={mail} alt="mail" className="icon"/>
                        <div className="aboutItemText">
                            <h3 className="hh">Address (ที่อยู่)</h3>
                            <p>51/25 ถนนเฉลิมพระเกียรติ์ ร.9 ซอย 15 แขวงหนองบอน เขตประเวศ กรุงเทพฯ 10250</p>
                        </div>
                    </li>
                </ul>
                <ul className="aboutItems">
                    <li className="aboutItem">
                        <img src={birthdate} alt="mobile" className="icon"/>
                        <div className="aboutItemText">
                            <h3 className="hh">Date of Birth </h3>
                            <p>10 December 2000</p>
                        </div>
                    </li>
                    <li className="aboutItem">
                        <img src={mail} alt="mail" className="icon"/>
                        <div className="aboutItemText">
                            <h3 className="hh">E-mail</h3>
                            <p>posh.thammanoon@gmail.com</p>
                        </div>
                    </li>
                    <li className="aboutItem">
                        <img src={mobile} alt="mobile" className="icon"/>
                        <div className="aboutItemText">
                            <h3 className="hh">Phone No. (เบอร์มือถือ)</h3>
                            <p>0626593924</p>
                        </div>
                    </li>
                </ul>
            </div>
            
           
                     
        </section>
    )
}

export default About