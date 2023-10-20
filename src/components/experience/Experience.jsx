import './experience.css'
import h1 from "../../img/h11.png"
import h12 from "../../img/h12.png"
import h2 from "../../img/h2.png"
import d1 from "../../img/d1.png"
import d2 from "../../img/d2.png"
import d3 from "../../img/d3.png"
import d4 from "../../img/d4.png"
import skf1 from "../../img/skf1.png"
import skf2 from "../../img/skf2.png"
import skf3 from "../../img/skf3.png"
import skf4 from "../../img/skf4.png"
import skf5 from "../../img/skf5.png"
import pj1 from "../../img/pj1.png"
import pj3 from "../../img/pj3.png"
import pj4 from "../../img/pj4.png"
import pj5 from "../../img/pj5.png"
import aimachine from "../../img/AI_Machine.jpg"
import aideep from "../../img/AI_Deep.jpg"
import futureskill from "../../img/futureskill.png"
import React from 'react'

export default function Experience() {
    return (
        <section className="container_info">
            <div className="titledivider"></div>
            <div className="titledivider"></div>
            <span className="infoTitle">Programming Experience</span>
            <br></br>
            <div className="workContainer">
            <div className='project'>
                    <div className='date'>May 2021</div>
                    <h2 className='extitle'>Data Structure & Algorithm Project</h2>
                    <h2 className='exsubtitle'>Hotel reservation web application </h2>
                    <div className='excontent'>
                        สำหรับ project งานกลุ่มนี้ จะเป็น web application ที่เกี่ยวกับการจองที่พักในโรงแรม และข้อมูลรายละเอียดของโรงแรม
                        โดยที่ตัวผมเองนั้น มีหน้าที่ในการออกแบบ web ในส่วนของ frontend ทั้งหมด เช่น หน้าต่างๆ แถบเมนู รายละเอียด รูปภาพ โดยใช้ภาษา HTML ในการจัดวางต่างๆ, Javascript ใน animation
                        และ CSS ในการตกแต่ง มาใช้ในการพัฒนา
                        เพื่อให้ได้หน้าตาและรูปแบบ web ให้เป็นไปตามที่ต้องการ และผู้ใช้สามารถใช้ได้ง่าย และผมก็ได้ทำในเรื่องการจัดการข้อมูลทั้งหมดใน web app อีกด้วยครับ                   
                        <br></br>
                        <br></br>
                        <img src={h1} alt="" className="h1-img"></img>
                        <br></br>
                        <img src={h12} alt="" className="h1-img"></img>
                        <br></br>
                        <br></br>
                        นอกจากนี้ ผมยังได้ทำหน้าการจองอีกด้วย ซึ่งหน้านี้จะเป็นการ input ข้อมูลลงไปในช่อง
                        แล้วนำข้อมูลไปเชื่อมกับ backend หรือฐานข้อมูล (database) โดย project นี้จะใช้ Python, C#, RestfulAPI และ Django ในการจัดการกับข้อมูลฝั่ง backend และฐานข้อมูลที่เก็บไว้
                        และมีการใช้ responsive design เพื่อปรับค่าต่างๆ ให้เข้ากับขนาดหน้าจออีกด้วยครับ
                        <br></br>
                        <br></br>
                        <img src={h2} alt="" className="h1-img"></img>
                    </div>
                    <br></br>
                </div>
                </div>
                <br></br>
                <div className="workContainer">
            <div className='project'>
            <div className='date'>November 2021</div>
                    <h2 className='extitle'>Software Development Process Project</h2>
                    <h2 className='exsubtitle'>DaisukiFigure web application </h2>
                    <div className='excontent'>
                        สำหรับ project งานกลุ่มนี้ จะเป็นโปรแกรมชื่อว่า Daisuki Figure เป็นโปรแกรมในรูปแบบของ Website Application 
                        พัฒนาด้วยภาษา JavaScript เป็นหลัก และใช้ MERN STACK ประกอบไปด้วย mongo dB, expressJS, reactJS, NodeJS ในการพัฒนา website
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
                        โดยมี CSS ช่วยในการตกแต่ง และ HTML ในการจัดวางต่างๆ และการนำข้อมูลจากฐานข้อมูลมาใช้งาน โดยเชื่อมจากฐานข้อมูลและ backend ด้วย JSON, SQL และ mongo DB
                        ทำให้ web นี้ เกิดความน่าสนใจกับผู้ใช้ และใช้งานง่ายมากขึ้น
                        <br></br>
                        <br></br>
                        <img src={d3} alt="" className="h1-img"></img>
                        <br></br>
                        <br></br>
                        การพัฒนาทั้งหมดนี้ ช่วยให้ผมเกิดความชำนาญเกี่ยวกับ ReactJS, OOP และ MERN Stack มากขึ้น และรู้วิธีในการจัดการกับฐานข้อมูลได้มากขึ้น
                        <br></br>
                        <br></br>
                        <img src={d4} alt="" className="h1-img"></img>
                        <br></br>
                        <br></br>
                        นอกจากนี้ ผมยังได้ทำเกี่ยวกับการ upload รูปหรือไฟล์ขึ้นระบบฐานข้อมูลและ server และมีการใช้ responsive design เพื่อปรับค่าต่างๆ ให้เข้ากับขนาดหน้าจออีกด้วยครับ
                        <br></br>
                    </div>
                    <br></br>
                    
                </div>
                </div>
                <br></br>
                <div className="workContainer">
            <div className='project'>
                    <div className='date'>June-July 2022</div>
                    <h2 className='extitle'>การฝึกงานภาคฤดูร้อนกับบริษัท Skyfrog</h2>
                    <h2 className='exsubtitle'>Skyfrog E-Market Web application project </h2>
                    <div className='excontent'>
                    เป็นการฝึกงานภาคปฎิบัติที่จัดขึ้นตามสาขาวิชา เพื่อเป็นการเสริมสร้างประสบการณ์ในการทำงานในอนาคต
                    ซึ่งในครั้งนี้ผมได้ฝึกงานกับบริษัท Skyfrog ในตำแหน่ง Developer ฝ่าย Software Development (full-stack) ผมมีหน้าที่ในการ
                    พัฒนาระบบโปรแกรมหรือ web application ให้เป็นไปตามความต้องการของบริษัทและลูกค้าในส่วนต่างๆ ที่ของเดิมบริษัทยังไม่ได้ทำ หรือสิ่งที่จำเป็นได้ขาดหายไป 
                    ซึ่งการพัฒนาระบบจะใช้ Microsoft .net technologies เช่น ASP.NET, MVC, C#, WEB API, SQL ในการพัฒนา Web Application มีการใช้ HTML, CSS, JavaScript ด้วย AngularJS Framework 
                    มาช่วยในการสร้างตัวหน้าเว็บส่วนที่ผู้ใช้มองเห็นได้ 
                    <br></br>
                        <br></br>
                        ในการฝึกงานคร้ังน้ีได้รับมอบหมายให้ไปศึกษาระบบ website E-market ของบริษัท
                        Skyfrog ที่มีอยู่เดิมว่ามีโครงสร้างอย่างไร ใช้งานอย่างไรได้บ้าง พร้อมกับดู Source Code ของ
                        website ดังกล่าว ต่อมาก็มอบหมายให้เพิ่มหน้าเว็บใหม่ และฟังก์ชั่นการทำงานใหม่ชนิดต่างๆ ที่
                        เกี่ยวข้องกับระบบหน้าเว็บ ข้อมูล Database โดยเป็นการเพิ่มหรือแก้ไข Code ที่มีอยู่เดิมให้รองรับ
                        การทำงานท้้ง frontend และ backend จากการศึกษาและประยุกต์วิธีใช้งานจากแหล่งข้อมูลต่างๆ โดยมีตัวอย่างที่ทำแล้วเสร็จดังนี้
                        <br></br>
                        <br></br>
                        <img src={skf1} alt="" className="h1-img"></img>
                        <br></br>
                        <br></br>
                        สำหรับหน้านี้ ได้มอบหมายให้สร้างเป็นตารางแสดงข้อมูลจากฐานข้อมูลโดยใช้ API ดึงข้อมูลจาก database มาแสดง พร้อมกับสร้างปุ่ม
                        สำหรับการเพิ่มข้อมูลที่ด้านบนตาราง และไอคอนการแก้ไขและลบข้อมูลตามแถวในตาราง เพื่อ
                        เปิดกล่อง modal สำหรับการจัดการกับ ท้้งการเพิ่ม แก้ไข หรือลบ จากน้ันจึงเรียกใช้ API ต่างๆ สำหรับการแก้ไขข้อมูล กับ code ในส่วน frontend เพื่อเป็นฟังก์ชั่นในการรับ input
                        ต่างๆ เพื่อเข้าสู่ API รวมท้งัตรวจสอบ exception สำหรับข้อมูลและการเพิ่มด้วย ซึ่งสามารถเพิ่ม แก้ไข และลบข้อมูลต่างๆ กับสามารถ Update กับ database ได้อย่างถูกต้อง
                        <br></br>
                        <br></br>
                        <img src={skf2} alt="" className="h1-img"></img>
                        <br></br>
                        <br></br>
                        ที่หน้าดังกล่าว ผมได้ทำฟังก์ชั่นและการกรอกข้อมูลการเพิ่ม แก้ไข และลบข้อมูลจากหน้าเว็บที่เชื่อมกับฐานข้อมูลด้วย API กับ Microsoft .net technologies ในการรับส่งข้อมูล
                        <br></br>
                        <br></br>
                        <img src={skf3} alt="" className="h1-img"></img>
                        <br></br>
                        <br></br>
                        <img src={skf4} alt="" className="h1-img"></img>
                        <br></br>
                        <br></br>
                        หัวหน้างานต้องการเพิ่มข้อมูลหลายแถวในการกดเพิ่มเพียงคร้ังเดียว โดยการ Upload ไฟล์ชนิด CSV (Comma Separated Value) เป็นไฟล์ข้อความประเภทหนึ่งที่ใช้สำหรับเก็บข้อมูลในรูปแบบตาราง 
                        ใช้เครื่องหมาย comma ในการแบ่งแต่ละคอลัมน์
                        ไฟล์ CSV ที่จะ upload เข้าสู่เว็บ e-market จะแสดงตารางข้อมูลของไฟล์ CSV ให้ผู้ใช้ดูรายละเอียด
                        ข้อมูลต่างๆ ที่จะ upload เข้าสู่ฐานข้อมูลเพื่อให้ทราบว่าค่าของข้อมูลเป็นอย่างไร 
                        จากนั้น จึงนำข้อมูลจากตารางสู่ฐานข้อมูล เพื่อเพิ่มในฐานข้อมูล ดังนั้น ผมจึงพัฒนาในส่วน
                        การทำงานใหม่ดังกล่าวในหน้าเว็บที่สร้างใหม่และแก้ไข API สำหรับการเพิ่มไฟล์ CSV ด้วย
                        <br></br>
                        <br></br>
                        <img src={skf5} alt="" className="h1-img"></img>
                        <br></br>
                        <br></br>
                        นอกจากนี้ยังสามารถ download ไฟล์ CSV จากตารางข้อมูลในหน้าเว็บเข้าสู่เครื่องตัวเองเพื่อเปิดใน Excel ได้ด้วย
                        <br></br>
                        <br></br>

                    </div>
                    <br></br>
                </div>
                </div>
                <div className="workContainer">
            <div className='project'>
                    <div className='date'>August 2022 - April 2023</div>
                    <h2 className='extitle'>Project 1 & Project 2 (โครงงานจบการศึกษา)</h2>
                    <h2 className='exsubtitle'>Application For Travel </h2>
                    <div className='excontent'>
                    โครงงานนี้เป็นการทำ Mobile Application สำหรับการท่องเที่ยวทางรถไฟซึ่งรวมข้อมูลที่จำเป็นสำหรับการเดินทางด้วยรถไฟ  โดยแหล่งข้อมูลหลักนั้นจะนํามาจากการทํา web scraping จากเว็บไซต์ของการรถไฟซึ่งจะมีข้อมูลพื้นฐาน
                    เช่น สถานี ขบวนรถ ชั้นที่นั่ง เวลาเดินรถ แล้วผู้จัดทําได้เพิ่มข้อมูลเพิ่มเติม เช่น ข้อมูลสถานีและทิวทัศน์ โดยโครงสร้างของระบบจะมีระบบหลักเป็นการค้นหาข้อมูลต่างๆ อาทิเช่น ข้อมูลของแต่ละเส้นทางโดยค้นหาจากต้นทาง-ปลายทาง
                    ระบบการสร้างแผนการเดินทางและระบบการบันทึกรายการโปรด เป็นต้น
                        <br></br>
                        <br></br>
                        <img src={pj1} alt="" className="h2-img"></img>
                        <br></br>
                        <br></br>
                        แอปพลิเคชั่นนี้ เป็นระบบที่ไม่ต้องเชื่อมต่ออินเตอร์เน็ตในการใช้งาน ยกเว้นตอนดึงข้อมูลเพื่อ Update ข้อมูลในบางครั้ง โครงสร้างระบบจึงไม่ซับซ้อนและสามารถติดตั้งระบบเป็นแบบกลุ่มเดียวได้ 
                        จึงใช้สถาปัตยกรรมระบบแบบ Monolithic ได้ซึ่งง่ายต่อการพัฒนาและการทดสอบ Deploy ออกมาใช้งาน และเหมาะสมกับงานระดับเริ่มต้นที่ไม่ซับซ้อน 
                        <br></br>
                        <br></br>
                        Application นี้ มีเครื่องมือพัฒนาเช่น Flutter สำหรับการพัฒนาระบบต่างๆ ทั้งหมดของ Application การเชื่อมโยงระหว่างหน้า, Android Studio สำหรับการพัฒนาและทดสอบ
                        Mobile Application ทีจะรันบนระบบปฏิบัติการ Android ซึ่งสามารถสร้างและรันโปรแกรมจำลองของระบบปฏิบัติการ และรันแอปพลิเคชั้นที deploy ออกมาได้
                        ส่วนการใช้ Web Scraping จะใช้เทคนิคด้วยภาษา Python เพื่อดึงข้อมูลการเดินทางจากเว็บไซต์ของการรถไฟ และ SQLite สำหรับการบันทึกแผนการเดินทางและเก็บข้อมูลตารางเวลาเดินรถ
                        <br></br>
                        <br></br>
                        ซึ่งตัวอย่างหน้าจอของ Application มีเช่น
                        <br></br>
                        <br></br>
                        <img src={pj3} alt="" className="h1-img"></img>
                        <br></br>
                        ในการค้นหาเส้นทางนั้นจะให้ค้นหาเส้นทางการเดินทางและดูผลการค้นหาได้ทันที มีการแนะนํา
                        จุดหมายยอดนิยมซึ่งจะไปที่หน้าของสถานีตามจุดหมาย และโปรแกรมท่องเที่ยวที่น่าสนใจนํามาแสดงที่หน้าแรก
                        ในผลการค้นหา จะมีรายการตัวเลือกขบวนที่หลากหลาย ซึ่งแต่ละรายการจะแสดงเวลาออกต้นทาง
                        เวลาถึงปลายทาง ประเภทขบวน (ด่วนพิเศษ เร็ว ธรรมดา) เลขขบวนรถ ชั้นที่นั่งในขบวน และ
                        ประเภทตู้โดยสารภาพรวมเพื่อประกอบการตัดสินใจเลือกขบวนที่ต้องการได้ ซึ่งข้อมูลที่แสดงจะเป็นข้อมูลจากกำหนดเวลาเดินรถ โดยใช้วิธี Web Scraping จากเว็บไซต์การรถไฟ แล้วนำมาประมวลผลกับการค้นหาโดยใช้ SQLite ในการจัดเก็บข้อมูลการเดินรถ
                        <br></br>
                        <br></br>
                        <img src={pj4} alt="" className="h1-img"></img>
                        <br></br>
                        เมื่อผู้ใช้อยากทราบรายละเอียดเกี่ยวกับขบวนให้มากขึ้น สามารถกดดูรายละเอียดขบวนได้ 
                        ที่หน้ารายละเอียดขบวนจะมีทั้งข้อมูลการเดินรถ ช่วงเวลาเดินทางกับสถานีที่จอด 
                        ทัศนียภาพ ข้อมูลชนิดตู้โดยสารในขบวน ผังขบวนรถกับผังที่นั่ง พร้อมบอกทิศการเดินทาง รูป
                        ขบวนรถทั้งภายนอกภายใน เพื่อสามารถประกอบการตัดสินใจในการเดินทางได้ ซึ่งข้อมูลที่แสดง
                        งจะเป็นข้อมูลจากกำหนดเวลาเดินรถ โดยใช้วิธี Web Scraping จากเว็บไซต์การรถไฟ และการ mapping ข้อมูลและรูปภาพใน Flutter และเข้าเงื่อนไขตามเลขขบวน
                        <br></br>
                        <br></br>
                        <img src={pj5} alt="" className="h1-img"></img>
                        <br></br>
                        เมื่อผู้ใช้อยากเดินทางด้วยรถไฟในการท่องเที่ยวต่างๆ ผู้ใช้สามารถสร้างแผนการเดินทางใหม่ในแอปพลิเคชั่นเดียวกันได้ทันที สามารถใส่รายละเอียดกิจกรรม การเดินทาง วันที่และเวลาได้อิสระ 
                        ระบบจะเรียงวันและเวลาให้ตามลำดับก่อน-หลังอัตโนมัติ ซึ่งใช้ SQLite ในการบันทึกแผนการเดินทางและจัดการลำดับเวลาก่อน-หลัง
                        <br></br>
                        <br></br>
                        เมื่อพัฒนาเสร็จแล้ว ผมสามารถ deploy จาก Android Studio ได้ไฟล์ .apk แล้วทดลองดาวน์โหลดใส่โทรศัพท์ Android ของจริง ปรากฎว่าสามารถ run ได้อย่างปกติ


                    </div>
                    <br></br>
                </div>
                </div>
                <div className="workContainer">
            <div className='project'>
                    <div className='date'>June-July 2022</div>
                    <h2 className='extitle'>ReactJS Portfolio website</h2>
                    <h2 className='exsubtitle'>Thamanoon portfolio website </h2>
                    <div className='excontent'>
                     website portfolio นี้ ผมได้พัฒนาโดยใช้ ReactJS เป็นหลักเช่นกัน และมีการใช้ responsive design เพื่อปรับค่าต่างๆ ให้เข้ากับขนาดหน้าจอ 
                     การทำ portfolio ในรูปแบบเว็บไซต์ จะช่วยให้เมีเทคนิคพิเศษในการทำ web สะสมผลงาน และบันทึกประวัติตนเอง โดยลดเวลาการแก้ไขลงครับ                    

                        
                    </div>
                    <br></br>
                </div>
                </div>
                <div className="workContainer">
            <div className='project'>
                    <div className='date'>July 2023</div>
                    <h2 className='extitle'>Machine Learning with Object Classification</h2>
                    <h2 className='exsubtitle'>การเรียนรู้เพิ่มเติมจากแหล่งข้อมูลออนไลน์</h2>
                    <div className='excontent'>
                    เป็นการเรียนรู้ Machine Learning โดยใช้ภาษา Python ในการทำ Object classification สำหรับการแยกข้อมูลและรูปภาพ ซึ่งเนื้อหามีเช่น
                    image classification เบื้องต้น, Neural Network, Dealing with overfitting, การใช้ Image Data, Reusing Model เป็นต้น                         
                    </div>
                    <br></br>
                    <img src={futureskill} alt="" className="h2-img"></img>
            </div>
           </div>
           <div className="workContainer">
            <div className='project'>
                    <div className='date'>August 2023</div>
                    <h2 className='extitle'>AI Machine Learning with Python</h2>
                    <h2 className='exsubtitle'>การเรียนรู้เพิ่มเติมจากแหล่งข้อมูลออนไลน์</h2>
                    <div className='excontent'>
                    คอร์สเรียนนี้มีการใช้ภาษา Python และใช้ไลบรารี Scikit-learn ยอดนิยมสำหรับ Machine Learning มีเนื้อหาครอบคลุมการติดตั้งโปรแกรม พื้นฐานทั่วไป การเตรียมข้อมูล การสร้าง Model การปรับแต่ง เน้นการลงมือปฏิบัติ Workshop โดยมี code ตัวอย่างให้ทดลอง 
                    เรียนรู้อัลกอริทึมต่าง ๆ ที่สำคัญ เช่น Regression, Decision Tree, Support Vector Machine (SVM), k-Nearest Neighbors ฯลฯ เพื่อเป็นพื้นฐานนำไปต่อยอดประยุกต์ใช้งาน รวมถึงต่อยอด Deep Learning ได้ด้วย                  
                    </div>
                    <br></br>
                    <img src={aimachine} alt="" className="h2-img"></img>
                    <br></br>
                    <br></br>
            </div>
           </div>
           <div className="workContainer">
            <div className='project'>
                    <div className='date'>September 2023</div>
                    <h2 className='extitle'>AI Deep Learning with Python</h2>
                    <h2 className='exsubtitle'>การเรียนรู้เพิ่มเติมจากแหล่งข้อมูลออนไลน์</h2>
                    <div className='excontent'>
                    คอร์สเรียนนี้มีเนื้อหาเช่น Artificial Neural Network, เครือข่ายแบบหลายชั้น (Multi-layer Perceptron), หลักการ Deep Learning, กลไก Gradient Descent,
                    การ Train ข้อมูล, การใช้ TensorFlow Keras, การสร้าง Mode, การวิเคราะห์กราฟผลของการ Train ข้อมูล, การเพิ่มประสิทธิภาพ Model, Convolutional Neural Network: CNN, การบันทึกและโหลดใช้งาน Model ที่ Train แล้ว และการติดตั้งและใช้งาน GPU เป็นต้น                  
                    </div>
                    <br></br>
                    <img src={aideep} alt="" className="h2-img"></img>
                    <br></br>
                    <br></br>
            </div>
           </div>
                
                

            
       
        </section>
    )
}
