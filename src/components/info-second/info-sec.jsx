import React from 'react'
import "./info-sec.scss"
import four from "../../assets/salah.jpg"
import one from "../../assets/ahlay.jpg"
import onee from "../../assets/ahlay2.jpg"
import oneee from "../../assets/beramids.jpg"


export default function Inffo() {
    return (
        <div className="sctioon">
            <div className="info">
                <h2> رياضة</h2>







                <div className="content-up">
                    <img src={four} />
                    <div className="txt">
                        <h3>أسطورة ليفربول :  يدعم الدون لفريق أفضل من مانشستر يونايتد</h3>
                        <p> منذ 9 ساعات</p>
                        <button className="btn">اقرأ المزيد</button>
                    </div>
                </div>




                <div className="content-middle">


                    <div className="box-left">
                        <img src={one} />
                        <div className="txt">
                            <h4> الاهلي يكتسح الاسماعيلي بقوه كالعاده</h4>
                            <p> منذ 9 ساعات</p>
                            <button className="btn">اقرأ المزيد</button>
                        </div>
                    </div>



                    <div className="box-right">
                        <img src={onee} />
                        <div className="txt">
                            <h4> الاهلي يكتسح الزمالك بقوه كالعاده</h4>
                            <p> منذ 9 ساعات</p>
                            <button className="btn">اقرأ المزيد</button>
                        </div>
                    </div>
                </div>








                <div className="content-middle">


                    <div className="box-left">
                        <img src={onee} />
                        <div className="txt">
                            <h4>الاهلي يكتسح المصري بقوه كالعاده</h4>
                            <p> منذ 9 ساعات</p>
                            <button className="btn">اقرأ المزيد</button>
                        </div>
                    </div>



                    <div className="box-right">
                        <img src={oneee} />
                        <div className="txt">
                            <h4>الاهلي يكتسح بيراميدز بقوه كالعاده</h4>
                            <p> منذ 9 ساعات</p>
                            <button className="btn">اقرأ المزيد</button>
                        </div>
                    </div>
                </div>















            </div>

        </div>
    )
}
