import React from 'react'
import './skills.css'
import star from "../../img/star.png"
import html from "../../img/html.png"
import css from "../../img/css.png"
import java from "../../img/java.png"
import python from "../../img/python.png"
import re from "../../img/react.png"

export default function Skills() {
    return (
        <div className='info'>
            <hr size="5" width="100%" color="blueviolet"></hr>
            <br></br>
            <br></br>
            <span className="infoTitle">Programming Language Skills</span>
            <br></br>
            <div className="timeline-container">
                <div className='event'>
                <div className='event-date'>HTML</div>
                    <img src={html} alt="" className="html-img"></img>
                    
                    <span className='language'> HTML </span>

                    <div className='timeline-content'>
                    เป็นภาษาคอมพิวเตอร์ที่ใช้ในการพัฒนาเว็บเพจ ใช้สร้างเค้าโครง หรือใส่เนื้อหาข้อความต่างๆ ในหน้าเว็บ 
                    </div>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                </div>

                <div className='event'>
                <div className='event-date'>CSS</div>
                    <img src={css} alt="" className="html-img"></img>
                    
                    <span className='language'> CSS </span>

                    <div className='timeline-content'>
                    เป็นภาษาที่ใช้พัฒนาลักษณะรูปแบบ ใส่พื้นหลัง หรือเพิ่มกรอบข้อความ ของหน้าเว็บ เพื่อเพิ่มความสวยงามให้หน้าเว็บ
                    </div>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                </div>

                <div className='event'>
                <div className='event-date'>JS</div>
                    <img src={java} alt="" className="html-img"></img>
                    
                    <span className='language'> JavaScript (JS) </span>

                    <div className='timeline-content'>
                    เป็นภาษาคอมพิวเตอร์ที่ใช้พัฒนา web ร่วมกับ HTML ที่ทำให้หน้าเว็บมี animation ต่างๆ อาจใช้ตรวจสอบความถูกต้องของข้อมูลที่ผู้ใช้งานกรอก 
                    หรือใช้เพื่อให้เกิดความเปลี่ยนแปลงบนหน้าเว็บ และเพิ่มลูกเล่นให้กับผู้ใช้ได้
                    </div>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
   
                </div>

                <div className='event'>
                <div className='event-date'>Python</div>
                    <img src={python} alt="" className="html-img"></img>
                    
                    <span className='language'> Python </span>

                    <div className='timeline-content'>
                    เป็นภาษาการเขียนโปรแกรมระดับสูง ถูกออกแบบมาให้เรียนรู้ได้ง่าย และมีไวยากรณ์ที่ช่วยให้เขียนโค้ดสั้นกว่าภาษาอื่นๆ สนับสนุนกระบวนทัศน์การเขียนโปรแกรม (Programming paradigms) 
                    เช่น การเขียนโปรแกรมเชิงวัตถุ (OOP : Object Oriented Programming) การเขียนโปรแกรมเชิงคำสั่ง (Imperative Programming) การเขียนโปรแกรมเชิงฟังก์ชั่น (Functional)
                    และการเขียนโปรแกรมเชิงกระบวนการ
                    </div>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
   
                </div>

                <div className='event'>
                <div className='event-date'>React</div>
                    <img src={re} alt="" className="html-img"></img>
                    
                    <span className='language'> ReactJS (stack ที่ถนัด) </span>

                    <div className='timeline-content'>
                    React เป็น JavaScript library ที่ใช้สำหรับสร้าง user interface ที่ให้เราสามารถเขียนโค้ดในการสร้าง UI ที่มีความซับซ้อนแบ่งเป็นส่วนเล็กๆออกจากกันได้
                     ซึ่งแต่ละส่วนสามารถแยกการทำงานออกจากกันได้อย่างอิสระ และทำให้สามารถนำชิ้นส่วน UI เหล่านั้นไปใช้ซ้ำได้อีก
                    </div>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
          
                </div>

                <div className='event'>
                <div className='event-date'>Web</div>
                    
                    
                    <span className='language'> Web Design </span>

                    <div className='timeline-content'>
                    การออกแบบ website หรือ web application ให้เกิดความง่ายและเหมาะสมกับการใช้งานของผู้ใช้มากที่สุด โดยใช้ภาษาโปรแกรมต่างๆ มาใช้ออกแบบร่วมด้วย
                    </div>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
          
                </div>

            </div>
            
        </div>
    )
}
