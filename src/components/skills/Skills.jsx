import React from 'react'
import './skills.css'
import star from "../../img/118669.png"
import html from "../../img/html.png"
import css from "../../img/css.png"
import java from "../../img/java.png"
import javaa from "../../img/javaa.png"
import cc from "../../img/Cc.png"
import cpp from "../../img/cplusplus.png"
import python from "../../img/python.png"
import flutter from "../../img/flutter-icon.png"
import re from "../../img/react.png"
import angu from "../../img/angularjs.png"
import jsonn from "../../img/jsonn.png"

export default function Skills() {
    return (
        <section className="container_info">
            <div className="titledivider"></div>
            <h2 className="infoTitle">Programming Language Skills</h2>
            
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
                <div className='event-date'>C++</div>
                    <img src={cpp} alt="" className="html-img"></img>
                    
                    <span className='language'> C++ </span>

                    <div className='timeline-content'>
                    เป็นภาษาโปรแกรมคอมพิวเตอร์อเนกประสงค์ มีโครงสร้างภาษาที่มีการจัดชนิดข้อมูลแบบสแตติก (statically typed) 
                    และสนับสนุนรูปแบบการเขียนโปรแกรมที่หลากหลาย (multi-paradigm language)
                    </div>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
   
                </div>

                <div className='event'>
                <div className='event-date'>C#</div>
                    <img src={cc} alt="" className="html-img"></img>
                    
                    <span className='language'> C# </span>

                    <div className='timeline-content'>
                    เป็นภาษาโปรแกรมแบบหลายโมเดล ที่ใช้ระบบชนิดข้อมูลแบบรัดกุม (strong typing) และสนับสนุนการเขียนโปรแกรมเชิงคำสั่ง
                    เชิงประกาศ เชิงฟังก์ชัน เชิงกระบวนการ โปรแกรมเชิงวัตถุ (แบบคลาส) และการเขียนโปรแกรมเชิงส่วนประกอบ
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
                    <img src={star} alt="" className="html-img"></img>
   
                </div>

                <div className='event'>
                <div className='event-date'>Flutter</div>
                    <img src={flutter} alt="" className="html-img"></img>
                    
                    <span className='language'> Flutter </span>

                    <div className='timeline-content'>
                    Flutter คือชุดพัฒนา software UI แบบ open source พัฒนาโดย google ใช้ภาษา Dart ในการพ้ฒนา 
                    สามารถใช้พัฒนาแอปพลิเคชั่นแบบข้ามแพลตฟอร์มได้โดยใช้ codebase เดียวกัน เช่น Android,iOS, macOS, Windows, Linux เป็นต้น 
                    โดย code มากกว่า 80% ที่เขียนสามารถใชได้กับ ทุก platform ได้โดยตรง เพราะอาจมีการปรับการทาํงานในหน้าต่างๆ ให้เหมาะสมกับแต่ละ platform ที่ต่างกัน
                    </div>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
   
                </div>

                <div className='event'>
                <div className='event-date'>ReactJS</div>
                    <img src={re} alt="" className="html-img"></img>
                    
                    <span className='language'> ReactJS </span>

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
                <div className='event-date'>AngularJS</div>
                    <img src={angu} alt="" className="html-img"></img>
                    
                    <span className='language'> AngularJS </span>

                    <div className='timeline-content'>
                    AngularJS เป็น JavaScript Framework ตัวหนึ่งที่ถูกพัฒนาขึ้นโดยทีมวิศวกรของ Google ซึ่งถ้าเทียบกับ 
                    JavaScript Framework ตัวอื่นๆ ก็อาจจะเปรียบเทียบได้กับ jQuery โดยใช้ AngularJS ในการจัดการการแสดงผลในหน้าเว็บ 
                    ซึ่งมีลักษณะการเขียนเป็น MVC ที่จะช่วยให้การสร้างเว็บสามารถแยกส่วนกันอย่างชัดเพื่อไม่ให้ส่งผลกระทบต่อกันมากนักหากเกิดข้อผิดพลาดขึ้น
                    </div>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
                    <img src={star} alt="" className="html-img"></img>
          
                </div>

                <div className='event'>
                <div className='event-date'>Java</div>
                    <img src={javaa} alt="" className="html-img"></img>
                    
                    <span className='language'> Java </span>

                    <div className='timeline-content'>
                    เป็นภาษาโปรแกรมเชิงวัตถุ (OOP) ซึ่งไม่ขึ้นกับแพลตฟอร์ม (สถาปัตยกรรม และ ระบบปฏิบัติการ)
                    เหมาะกับการใช้ในระบบเครือข่าย พร้อมมีไลบรารีสนับสนุน
                    และเรียกใช้งานจากระยะไกลได้อย่างปลอดภัย
                    </div>
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
            
        
        </section>
        
    )
}
