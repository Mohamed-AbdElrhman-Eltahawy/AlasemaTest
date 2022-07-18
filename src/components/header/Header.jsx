import React from 'react'
import "./Header.scss"
import logo from "../../assets/logo.png"


export default function Header() {
    return (
        <div>
            <header>
                <div className="contianer">



                    <div className="nav-one">
                        <div className="contianer">
                            <nav className='navbar-1'>
                                <ul className="nav-items">
                                    <li><a>بحث <i class="fa-solid fa-magnifying-glass"></i></a></li>
                                    <li><a>مدينة نصر <i class="fa-solid fa-location-dot"></i></a></li>
                                    <li><a><i class="fa-solid fa-phone"></i></a></li>
                                    <li><a>alaasema.news@hotmail.com <i class="fa-solid fa-envelope"></i></a></li>
                                    <li><a><i class="fa-brands fa-youtube"></i></a></li>
                                    <li><a><i class="fa-brands fa-twitter"></i></a></li>
                                    <li><a><i class="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a className='active'>الجمعة, 15 يوليو 2022</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>





                    <div className="nav-two">
                        <nav className='navbar-2 container'>
                            <ul className="nav-item">
                                <li className="gray-white">رئيس التحرير</li>
                                <li>محمد سامى</li>
                                <br />
                                <li className="gray-white">المدير التنفيذى</li>
                                <li>حسام الجزار</li>
                            </ul>
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>
                        </nav>
                    </div>



                    <div class="nav-three">
                        <div class="navigation">
                            <ul class="menu">
                                <div class="close-btn"></div>
                                <li class="menu-item">
                                    <a class="sub-btn" href="#">المزيد <i class="fas fa-angle-down"></i></a>
                                    <ul class="sub-menu">
                                        <li class="sub-item"><a href="#">ازهر وكنيسه</a></li>
                                        <li class="sub-item"><a href="#"> اتصالات وتكنولوجيا </a></li>
                                        <li class="sub-item"><a href="#">تصريحات خاصه وحوارات</a></li>
                                        <li class="sub-item"><a href="#">فن وثقافه</a></li>
                                        <li class="sub-item"><a href="#"> صحافه المواطن</a></li>
                                        <li class="sub-item"><a href="#">خدمات </a></li>
                                        <li class="sub-item"><a href="#">منوعات </a></li>
                                        <li class="sub-item"><a href="#">السبوره التعليميه</a></li>
                                        <li class="sub-item"><a href="#"> شكاوي المواطنين</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item"><a href="#">تقارير وتحقيقات</a></li>
                                <li class="menu-item"><a href="#">عربي ودولي</a></li>
                                <li class="menu-item"><a href="#">محافظات</a></li>
                                <li class="menu-item"><a href="#">رياضه</a></li>
                                <li class="menu-item"><a href="#">حوادث وقضايا</a></li>
                                <li class="menu-item">
                                    <a class="sub-btn" href="#">اقتصاد <i class="fas fa-angle-down"></i></a>
                                    <ul class="sub-menu">
                                        <li class="sub-item"><a href="#">بنوك</a></li>
                                        <li class="sub-item"><a href="#">شركات وبورصه</a></li>
                                        <li class="sub-item"><a href="#">استثمار عقاري</a></li>
                                        <li class="sub-item"><a href="#">بترول وطاقه</a></li>
                                        <li class="sub-item"><a href="#">نقل وطيران</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item"><a href="#">اخبار مصر</a></li>
                                <li class="menu-item active"><a href="#">الرئيسيه</a></li>
                            </ul>
                        </div>
                        <div class="menu-btn"></div>
                    </div>







                </div>
            </header>
        </div>
    )
}
