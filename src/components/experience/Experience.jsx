import './experience.css'
import h1 from "../../img/h1.png"
import h2 from "../../img/h2.png"
import d1 from "../../img/d1.png"
import d2 from "../../img/d2.png"
import d3 from "../../img/d3.png"
import d4 from "../../img/d4.png"
import React from 'react'

export default function Experience() {
    return (
        <div  className="info">
            <hr size="5" width="100%" color="blueviolet"></hr>
            <br></br>
            <br></br>
            <span className="infoTitle">Programming Experience</span>
            <br></br>
            <div className="container">
            <div className='project'>
                    <div className='date'>May 2021</div>
                    <h2 className='title'>Data Structure & Algorithm Project</h2>
                    <h2 className='subtitle'>Hotel reservation web application </h2>
                    <div className='content'>
                        สำหรับ project งานกลุ่มนี้ จะเป็น web application ที่เกี่ยวกับการจองที่พักในโรงแรม และข้อมูลรายละเอียดของโรงแรม
                        โดยที่ตัวผมเองนั้น มีหน้าที่ในการออกแบบ web ในส่วนของ frontend ทั้งหมด เช่น หน้าต่างๆ แถบเมนู รายละเอียด รูปภาพ โดยใช้ภาษา HTML ในการจัดวางต่างๆ, Javascript ใน animation
                         และ CSS ในการตกแต่ง มาใช้ในการพัฒนา
                        เพื่อให้ได้หน้าตาและรูปแบบ web ให้เป็นไปตามที่ต้องการ และผู้ใช้สามารถใช้ได้ง่าย                     
                        <br></br>
                        <br></br>
                        <img src={h1} alt="" className="h1-img"></img>
                        <br></br>
                        <br></br>
                        นอกจากนี้ ผมยังได้ทำหน้าการจองอีกด้วย ซึ่งหน้านี้จะเป็นการ input ข้อมูลลงไปในช่อง
                        แล้วนำข้อมูลไปเชื่อมกับ backend หรือ database โดย project นี้จะใช้ Python และ Django ในการจัดการกับข้อมูลฝั่ง backend
                        <br></br>
                        <br></br>
                        <img src={h2} alt="" className="h1-img"></img>
                    </div>
                    <br></br>
                </div>
                </div>
                <br></br>
                <div className="container">
            <div className='project'>
            <div className='date'>November 2021</div>
                    <h2 className='title'>Software Development Process Project</h2>
                    <h2 className='subtitle'>DaisukiFigure web application </h2>
                    <div className='content'>
                        สำหรับ project งานกลุ่มนี้ จะเป็นโปรแกรม Daisuki Figure เป็นโปรแกรมในรูปแบบของ Website Application 
                        พัฒนาด้วยภาษา JavaScript เป็นหลัก และใช้ MERN STACK ประกอบไปด้วย mongo dB เป็นส่วนฐานข้อมูล และ expressJS, reactJS,  NodeJS
                        โดยเป็นโปรแกรมที่ออกแบบมาเป็นเว็บไซต์ในรูปแบบของ Community มีการให้ข้อมูลตัวโมเดลต่างๆ การสื่อสารการคุยแลกเปลี่ยนกัน การถามตอบ ฯลฯ         
                        <br></br>
                        <img src={d1} alt="" className="h1-img"></img>
                        <br></br>
                        สำหรับตัวผมเองนั้น ผมได้มีหน้าที่ในการออกแบบ ตกแต่งหน้าเว็บเกือบทั้งหมด เช่น หน้าถาม-ตอบ , login-register , ข้อมูล figure รวมทั้งแถบเมนูด้านบน (Navbar)   
                        และผมก็ได้พัฒนาในส่วนของระบบ login เข้าระบบ และ register เพื่อลงทะเบียนผู้ใช้  การแสดงผลข้อมูล figure ต่างๆ และระบบการ post ข้อความถาม-ตอบ และมีการ comment 
                        ในโพสต์นั้นๆ ด้วย และมีการตรวจจับว่าบางกิจกรรมใน web นี้ จะทำได้เมื่อ login มาแล้วเท่านั้นด้วย
                        <br></br>
                        <img src={d2} alt="" className="h1-img"></img>
                        <br></br>
                        ซึ่งการออกแบบและการพัฒนาทั้งหมดนี้ ตัวผมเองก็ใช้ ReactJS ในการพัฒนาเป็นหลัก
                        โดยมี CSS ช่วยในการตกแต่ง และ HTML ในการจัดวางต่างๆ และมีการนำข้อมูลจากฐานข้อมูลมาใช้งาน โดยเชื่อมจาก backend ด้วย MERN stack และ mongo DB
                        ทำให้ web นี้ เกิดความน่าสนใจกับผู้ใช้ และใช้งานง่ายมากขึ้น
                        <br></br>
                        <br></br>
                        <img src={d3} alt="" className="h1-img"></img>
                        <br></br>
                        <br></br>
                        การพัฒนาทั้งหมดนี้ ช่วยให้ผมเกิดความชำนาญเกี่ยวกับ ReactJS และ MERN Stack มากขึ้น
                        <br></br>
                        <br></br>
                        <img src={d4} alt="" className="h1-img"></img>
                        <br></br>
                        <br></br>
                        นอกจากนี้ ผมยังได้ทำเกี่ยวกับการ upload รูปหรือไฟล์ขึ้นระบบและ server อีกด้วยครับ
                        <br></br>
                    </div>
                    <br></br>
                    
                </div>
                </div>
                <br></br>
                <div className="container">
            <div className='project'>
                    <div className='date'>December 2021</div>
                    <h2 className='title'>ReactJS Portfolio website</h2>
                    <h2 className='subtitle'>Thamanoon portfolio website </h2>
                    <div className='content'>
                     website portfolio นี้ ผมได้พัฒนาโดยใช้ ReactJS เป็นหลักเช่นกัน และมีการใช้ responsive design เพื่อปรับค่าต่างๆ ให้เข้ากับขนาดหน้าจอ 
                     การทำ portfolio ในรูปแบบเว็บไซต์ จะช่วยให้เมีเทคนิคพิเศษในการทำ web สะสมผลงาน และบันทึกประวัติตนเอง โดยลดเวลาการแก้ไขลง                    
                        <br></br>
                        
                    </div>
                    <br></br>
                </div>
                </div>
                

            
        </div>
    )
}
