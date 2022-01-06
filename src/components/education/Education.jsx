import React from 'react'
import './education.css'
import t1 from "../../img/transcript3.png"



export default function Education() {
    return (
        <div className="info">
            
            <hr size="5" width="100%" color="blueviolet"></hr>
            <br></br>
            <br></br>
            <span className="infoTitle">Educational Informations</span>
            <br></br>
            <div className="container">
            <div className='project'>
                    <h2 className='edutitle'>ปัจจุบันกำลังศึกษาที่...</h2>
                    <h2 className='edusubtitle'>ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</h2>
                    <h2 className='edudetail'>ระดับ : ปริญญาตรี</h2>
                    <h2 className='edudetail'>ชั้นปีที่ : 3</h2>
                    <h2 className='edudetail'>GPA (As of 6 Jan 2022) : 2.95</h2>
                    <br></br>
                </div>
                </div>
                <br></br>

            <div className="container">
            <div className='project'>
                    <h2 className='edutitle'>Transcript ปัจจุบัน</h2>
                    
                    <img src={t1} alt="" className="h1-img"></img>
                    <br></br>
                </div>
            </div>  
            <br></br>
            <div className="container">
            <div className='project'>
                    <h2 className='edutitle'>วิชาที่สำคัญและเป็นทักษะในการทำงาน</h2>

                    <br></br>
            <span>&#11044; </span><label className="head">Object-Oriented Programming (Grade B) </label>
                 <br></br>
            <span className="body">วิชานี้เป็นการออกแบบและพัฒนา software โดยใช้การเขียนโปรแกรมเชิงวัตถุ เช่น object class การสืบทอด interface ฯลฯ
            ซึ่งผมก็ได้ฝึกทักษะในเรื่องของการระบุ object และ class ที่เหมาะสม ยังรวมถึง โครงสร้างข้อมูลเบื้องต้น การค้นหา การจัดเรียง 
            การติดต่อกับผู้ใช้แบบกราฟิก และการสร้างแบบจําลอง UML อีกด้วย</span>  
                <br></br>
                <br></br> 
                <br></br>
                <span>&#11044; </span><label className="head">Data Structure and Algorithm (Grade B+) </label>
                 <br></br>
            <span className="body">วิชานี้เป็นเรื่องของพื้นฐานที่สําคัญของการแก้ปัญหาโดยใช้โครงสร้างข้อมูล (Data Structure) ชนิดต่างๆ และ algorithm สําหรับการจัดเรียงและค้นหา วิชานี้จะใช้ภาษา python ในการเขียนเป็นหลัก
            ซึ่งผมได้นำความรู้และความเข้าใจจากเนื้อหาวิชานี้ มาสร้างเป็น project ที่เป็น web application เกี่ยวกับระบบการจอง โดยใช้ python ในเรื่องของโครงสร้างข้อมูลต่างๆ ร่วมกับ HTML และ CSS ในการจัดแต่งหน้าเว็บ แล้วใช้งานได้จริง
              </span>  
                <br></br>
                <br></br> 
                <br></br>
                <span>&#11044; </span><label className="head">Software Development Processes (Grade C+) </label>
                 <br></br>
            <span className="body">วิชานี้เป็นเรื่องของการแนะนําหลักการและการปฏิบัติสําหรับการพัฒนา software สมัยใหม่ รวมถึงกระบวนการทาง software ในการพัฒนาผลิตภัณฑ์ (product) ที่ใช้งานได้จริง
            ส่วนใหญ่ project วิชานี้จะเน้นไปในเรื่องของการออกแบบและพัฒนา software การทดสอบ และการปรับปรุง software ให้ดียิ่งขึ้น ซึ่งตัวผมเองนั้น ได้นำความรู้ของกระบวนการทาง software ในด้านต่างๆ 
            มาพัฒนาและปรับปรุงให้เกิด website ที่เป็นงานกลุ่มขึ้นมา โดยตัวผมเองได้ทำในส่วนของ frontend เพื่อให้ user ได้เห็นหน้าตาเว็บที่ดูดีและใช้งานได้อย่างถูกต้อง
              </span> 
              <br></br>
              <br></br>
                </div>
            </div>  
        </div>
    )
}
