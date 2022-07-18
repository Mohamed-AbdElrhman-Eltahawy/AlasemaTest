import React from 'react'
import "./footer.scss"
export default function footer() {
    return (
        <div className='footer'>
            <div className="container">
                <ul className="navbar">
                    <li title='فيسبوك'><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li title='تويتر'><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                    <li title='يوتيوب'><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                </ul>
                <div className="text">
                    <div className="copy-right">
                        <h2>جميع الحقوق محفوظة - العاصمة نيوز © 2022</h2>
                    </div>
                    <div className="web-designer">
                        <h2 title='Crafted with Mo'>Crafted By: <span className='span'>Mo Salem</span></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}