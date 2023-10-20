import React from 'react'
import './education.css'
import tth from "../../img/transcript_thai.jpg"
import ten from "../../img/transcript_english.jpg"
import cth from "../../img/cert_thai.jpg"
import cen from "../../img/cert_eng.jpg"
import fullname from "../../img/name.png"
import kmitl from "../../img/kmitl.png"
import swr from "../../img/cropped-swrlogo.png"



export default function Education() {
    return (
        <section className="container_info">
  
        <div className="titledivider"></div>
            <h2 className="infoTitle">Education Information</h2>

            <div className="container">
            <li className="educationItem">
                        <img src={kmitl} alt="mobile" className="schoolicon"/>
                        <div className="educationItemText">
                            <h3 className="h_edu">สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</h3>
                            <h4> ปีการศึกษา 2562-2565</h4>
                            <p>ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์</p>
                            <p>สำเร็จการศึกษาเมื่อปี พ.ศ. 2566 ระดับปริญญาตรี GPA: 2.99</p>
                        </div>
                </li>
            </div>
            <br></br>
            <div className="container">
            <li className="educationItem">
                        <img src={swr} alt="mobile" className="schoolicon"/>
                        <div className="educationItemText">
                            <h3 className="h_edu">โรงเรียนสารสาสน์วิเทศร่มเกล้า</h3>
                            <h4> ปีการศึกษา 2550-2561</h4>
                            <p>แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์</p>
                            <p>สำเร็จการศึกษาเมื่อปี พ.ศ. 2562 GPA: 3.84</p>
                        </div>
                </li>
            </div>

            <div className="container">
            <div className='project'>
                    <h2 className='edutitle'>Transcript ปัจจุบัน</h2>
                    <div class="scroll-container">
                     <img src={tth} alt="" className="h1-img"></img>
                     <img src={ten} alt="" className="h1-img"></img>
                     <img src={cth} alt="" className="h1-img"></img>
                     <img src={cen} alt="" className="h1-img"></img>
                    </div>
                    
                    <br></br>
                </div>
            </div>  
            <br></br>
            <div className="container">
            <div className='project'>
                    <h2 className='edutitle'>วิชาที่สำคัญและเป็นทักษะในการทำงาน</h2>

                    <br></br>
            <span class="dot"> </span><label className="subjecttitle">Object-Oriented Programming  </label>
                 <br></br>
                 <br></br>
            <span className="subjectbody">วิชานี้เป็นการออกแบบและพัฒนา software โดยใช้การเขียนโปรแกรมเชิงวัตถุ เช่น object class การสืบทอด interface ฯลฯ
            ซึ่งผมก็ได้ฝึกทักษะในเรื่องของการระบุ object และ class ที่เหมาะสม ยังรวมถึง โครงสร้างข้อมูลเบื้องต้น การค้นหา การจัดเรียง 
            การติดต่อกับผู้ใช้แบบกราฟิก และการสร้างแบบจําลอง UML อีกด้วย</span>  
                <br></br>
                <br></br> 
                <br></br>
                <span class="dot"></span><label className="subjecttitle">Data Structure and Algorithm </label>
                 <br></br>
                 <br></br>
            <span className="subjectbody">วิชานี้เป็นเรื่องของพื้นฐานที่สําคัญของการแก้ปัญหาโดยใช้โครงสร้างข้อมูล (Data Structure) ชนิดต่างๆ และ algorithm สําหรับการจัดเรียงและค้นหา วิชานี้จะใช้ภาษา python ในการเขียนเป็นหลัก
            ซึ่งผมได้นำความรู้และความเข้าใจจากเนื้อหาวิชานี้ มาสร้างเป็น project ที่เป็น web application เกี่ยวกับระบบการจอง โดยใช้ python ในเรื่องของโครงสร้างข้อมูลต่างๆ ร่วมกับ HTML และ CSS ในการจัดแต่งหน้าเว็บ แล้วใช้งานได้จริง
              </span>  
                <br></br>
                <br></br> 
                <br></br>
                <span class="dot"></span><label className="subjecttitle">Software Development Processes </label>
                 <br></br>
                 <br></br>
            <span className="subjectbody">วิชานี้เป็นเรื่องของการแนะนําหลักการและการปฏิบัติสําหรับการพัฒนา software สมัยใหม่ รวมถึงกระบวนการทาง software ในการพัฒนาผลิตภัณฑ์ (product) ที่ใช้งานได้จริง
            ส่วนใหญ่ project วิชานี้จะเน้นไปในเรื่องของการออกแบบและพัฒนา software การทดสอบ และการปรับปรุง software ให้ดียิ่งขึ้น ซึ่งตัวผมเองนั้น ได้นำความรู้ของกระบวนการทาง software ในด้านต่างๆ 
            มาพัฒนาและปรับปรุงให้เกิด website ที่เป็นงานกลุ่มขึ้นมา โดยตัวผมเองได้ทำในส่วนของ frontend เพื่อให้ user ได้เห็นหน้าตาเว็บที่ดูดีและใช้งานได้อย่างถูกต้อง
              </span> 
              <br></br>
              <br></br>
              <br></br>
              <span class="dot"></span><label className="subjecttitle">User Experience and User Interface Design</label>
                 <br></br>
                 <br></br>
            <span className="subjectbody">วิชานี้แนะนําขั้นตอนของการออกแบบประสบการณ์และการออกแบบส่วนติดต่อผู้ใช้งาน (User Interface) เพื่อให้คุ้นเคยกับแนวคิด      
            วิธีปฏิบัติ และเทคนิคที่จําเป็นในการสร้างประสบการณ์ของผู้ใช้งาน (User Experience) สำหรับการออกแบบเว็บไซต์และ Application ต่างๆ ซึ่งผมได้มีโอกาสในการค้นหาทรัพยากร ความต้องการ พัฒนาทักษะและฝึกปฏิบัติที่จําเป็นต่อการออกแบบ
            พัฒนา และประเมินความต้องการ ลักษณะการใช้งาน จากมุมมองของผู้ใช้งาน เพื่อออกแบบขั้นตอนการทำงาน และ User Interface ให้เป็นไปตามความต้องการของ Application โดยใช้โปรแกรม Figma ช่วยในการออกแบบ
              </span> 
              <br></br>
              <br></br>
              <br></br>
              <span class="dot"></span><label className="subjecttitle">Database Systems </label>
                 <br></br>
                 <br></br>
            <span className="subjectbody">วิชานี้เป็นเรื่องของแนวคิดของระบบฐานข้อมูล แฟ้มข้อมูลและฐานข้อมูล สถาปัตยกรรมของระบบฐานข้อมูล หน่วยข้อมูลและความสัมพันธ์ของหน่วยข้อมูล 
            การออกแบบฐานข้อมูลด้วย ER Diagram การออกแบบฐานข้อมูลด้วยวิธี Normalization โครงสร้างฐานข้อมูลแบบลำดับชั้น แบบเครือข่าย และแบบเชิงสัมพันธ์ ภาษาฐานข้อมูลและภาษาเรียกค้นข้อมูล
            ซึ่งช่วยในการทำระบบ Backend และระบบข้อมูลใน application ต่างๆ ได้เป็นอย่างดี
              </span> 
              <br></br>
              <br></br>
              <br></br>
              <span class="dot"></span><label className="subjecttitle">Industrial Training (การฝึกงานภาคฤดูร้อน) </label>
                 <br></br>
                 <br></br>
            <span className="subjectbody">เป็นการฝึกงานภาคปฎิบัติที่จัดขึ้นตามสาขาวิชา เพื่อเป็นการเสริมสร้างประสบการณ์ในการทำงานในอนาคต
            ซึ่งในครั้งนี้ผมได้ฝึกงานกับบริษัท Skyfrog ในตำแหน่ง Developer ฝ่าย Software Development (full-stack) ผมมีหน้าที่ในการ
            ออกแบบ พัฒนา และแก้ไขโปรแกรมให้ให้เป็นไปตามความต้องการขององค์กรและลูกค้าในส่วนต่างๆ 
            ซึ่งการพัฒนาระบบจะใช้ Microsoft .net technologies เช่น ASP.NET, MVC, C#, WEB API, SQL ในการพัฒนา Web Application มีการใช้ HTML, CSS, JavaScript ด้วย AngularJS 
            ในการสร้างตัวหน้าเว็บส่วนที่ผู้ใช้มองเห็นได้ รวมถึงการ upload และ download ไฟล์ CSV กับ web เพื่อใช้กับฐานข้อมูลได้ด้วย
              </span> 
              <br></br>
              <br></br>
              <br></br>
              <span class="dot"></span><label className="subjecttitle">Introduction to Data Analytics</label>
                 <br></br>
                 <br></br>
            <span className="subjectbody"> วิชานี้แนะนำเทคนิคการวิเคราะห์ข้อมูลและโครงสร้างของข้อมูลที่หลากหลาย  ในกรอบการวิเคราะห์ข้อมูลที่แตกต่างกัน  
             การวิเคราะห์เชิงพรรณา การวิเคราะห์เชิงอนุมาน การวิเคราะห์เชิงพยากรณ์ และการวิเคราะห์เพื่อแนะนำการตัดสินใจ ซึ่งวิชานี้ใช้ภาษา Python ช่วยในการทำงานผ่าน Package NumPy, SciPy, Pandas, Scikit-learn เป็นต้น
              </span> 
              <br></br>
              <br></br>
              <br></br>
              <span class="dot"></span><label className="subjecttitle">Software Studio</label>
                 <br></br>
                 <br></br>
            <span className="subjectbody"> วิชานี้เป็นส่วนหนึ่งของการฝึกฝนด้านการพัฒนา software โดยให้ความสําคัญกับการสร้าง Web Application    
            ประกอบด้วย พื้นฐานของเว็บ HTML, CSS, Model-View-Controller, โมเดลของข้อมูลและ object,  แนวคิดในการออกแบบเว็บไซต์, JavaScript, DOM, PHP และ Ajax 
              </span> 
              <br></br>
              <br></br>
              <br></br>
              <span class="dot"></span><label className="subjecttitle">Project 1 & Project 2</label>
                 <br></br>
                 <br></br>
            <span className="subjectbody"> เป็นการทำโครงงานในหัวข้อที่เกี่ยวข้องกับวิศวกรรมคอมพิวเตอร์ เช่น สร้าง software, application ภายใต้การดูแลของอาจารย์ที่ปรึกษา 
            ในระหว่างภาคการศึกษามีการเสนอรายงานความคืบหน้าของงานอย่างสม่ำเสมอ 
            เมื่อจบภาคการศึกษา มีการส่งรายงานและบทสรุปของงาน พร้อมทั้งนำเสนอต่อคณะกรรมการสอบ 
              </span> 
              <br></br>
              <br></br>
              <span className="subjectbody"> โครงงานของผมเป็นสร้าง Mobile Application ท่องเที่ยวทางรถไฟโดยใช้ Flutter สำหรับ Mobile  โดยดึงข้อมูลผ่านวิธี Web Scraping ให้แสดงข้อมูลการเดินทางด้วยรถไฟตามแบบที่ต้องการได้  
              </span> 
              <br></br>
              <br></br>
              <br></br>
                </div>
            </div>  
        </section>
    )
}
