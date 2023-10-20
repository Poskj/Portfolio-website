import "./intro.css"
import {Link} from 'react-scroll'
import potrait from "../../img/62010404_thamanoon_pundit.jpg"

function Intro() {
    return (
        <div>
        <div className="bg">
            <div className="outside">
            <div className="content">
                <h2 className="title1">Hello, I'm</h2>
                <h1 className="title2">Thamanoon Kitlertphairoj</h1>
                <p className="description">
                    สวัสดีครับ ผมชื่อ ธรรมนูญ กิจเลิศไพโรจน์ จากภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
                    ความสนใจของผม คือการออกแบบและพัฒนา Web Application และ Mobile Application เป็นประจำ ผมยังใช้ ReactJs, AngularJS, nodeJS 
                    มาช่วยในการพัฒนาและเขียนโค้ดเพื่อช่วยให้เว็บไซต์หรือ Mobile Application ทำงานได้ง่ายขึ้น นอกจากนี้ ผมยังมีความสามารถในการใช้ภาษาอังกฤษ
                    ได้ดีมากครับ
                </p>
                <Link to='contact' smooth={true}  className="contactBtn">Contact me</Link>
                </div>
                <img src={potrait} alt="" className="heroimg"></img>
                <div className="topBlur"></div>
                <div className="style.bottomBlur"></div>
           
        </div>
        </div>
        <div className="bggradient"></div>
        </div>
        
    )
}

export default Intro
