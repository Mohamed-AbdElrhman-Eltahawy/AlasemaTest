import React from 'react'
import one from "../../assets/sisi.jpg"
import two from "../../assets/bronay.jpg"
import three from "../../assets/face.jpg"
import four from "../../assets/weather.jpg"
import five from "../../assets/beramids.jpg"
import six from "../../assets/ahlay.jpg"

import "./banner.scss"

export default function banner() {
    return (
        <div className="section">
            <div className="container">

                <div className="table">
                    <div className="content-left">
                        <ul className="time-table">
                            <h2>مواقيت الصلاة</h2>
                            <li>الفجر<p>am 03:23</p></li>
                            <li>الشروق<p>am 05:05</p></li>
                            <li>الظهر<p>pm 12:01</p></li>
                            <li>العصر<p>pm 3:38</p></li>
                            <li>المغرب<p>pm 6:5</p></li>
                            <li>العشاء<p>pm 8:27</p></li>
                        </ul>
                    </div>
                   
                </div>


                <div className="Banner">
                    <div className="content">

                        <div className="images">
                            <img src={six} />
                            <img src={two} />
                            <img src={three} />
                            <img src={four} />
                            <img src={five} />
                        </div>
                        <div className="btm-sliders">
                            <h4>ننشر نص البيان المصري الأمريكي المشترك بعد لقاء السيسي وبايدن</h4>
                            <h4>منصة فيسبوك تختبر طريقة تسمح بإضافة صفحات تعريف للحساب الواحد</h4>
                            <h4>السيسي يعود إلى أرض الوطن اخيرا .. بعد المشاركة في قمة جدة امس</h4>
                            <h4>يمتلك 7000 سيارة فاخرة وطائرة مطلية بالذهب.. سلطان بروناي خيال</h4>
                            <h4>اليوم.. طقس حار رطب نهارًا... معتدل رطب ليلاً....... على كل الأنحاء</h4>
                        </div>
                    </div>


                </div>

            </div>
        </div>

    )
}
