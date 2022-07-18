import React from 'react'
import "./info-light.scss"
import four from "../../assets/btl.jpg"

export default function Infoo() {
    return (
        <div className="sctionn">
            <div className="container">
                <div className="info">
                    <h2>اقتصاد</h2>


                    <div className="content-up">
                        <img src={four} />
                        <div className="txt">
                            <h3>2.3 مليار جنيه ضرائب ورسوم بجمارك بورسعيد فى يونيو الماضي</h3>
                            <p> منذ 9 ساعات</p>
                            <button className="btn">اقرأ المزيد</button>
                        </div>
                    </div>

                    <div className="content-middle">


                        <div className="box-left">
                            <img src={four} />
                            <div className="txt">
                                <h6> طقس حار رطب نهارًا معتدل رطب ليلاً على كل الأنحاء</h6>
                                <p> منذ 9 ساعات</p>
                                <button className="btn">اقرأ المزيد</button>
                            </div>
                        </div>



                        <div className="box-right">
                            <img src={four} />
                            <div className="txt">
                                <h6> طقس حار رطب نهارًا معتدل رطب ليلاً على كل الأنحاء</h6>
                                <p> منذ 9 ساعات</p>
                                <button className="btn">اقرأ المزيد</button>
                            </div>
                        </div>
                    </div>


                    <div className="content-middle">


                        <div className="box-left">
                            <img src={four} />
                            <div className="txt">
                                <h6>طقس حار رطب نهارًا معتدل رطب ليلاً على كل الأنحاء</h6>
                                <p> منذ 9 ساعات</p>
                                <button className="btn">اقرأ المزيد</button>
                            </div>
                        </div>



                        <div className="box-right">
                            <img src={four} />
                            <div className="txt">
                                <h6> طقس حار رطب نهارًا معتدل رطب ليلاً على كل الأنحاء</h6>
                                <p> منذ 9 ساعات</p>
                                <button className="btn">اقرأ المزيد</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="table">
                    <div className="content-left">
                        <ul className="time-table">
                            <h2> مقالات الرأي</h2>



                            <div className="box">
                                <img src={four} />
                                <div className="txt">
                                    <li>كيف يمكنني اختيار شريك حياتي ؟!</li>
                                </div>
                            </div>
                            <div className="box">
                                <img src={four} />
                                <div className="txt">
                                    <li>جرائم سيبرانية</li>
                                </div>
                            </div>
                            <div className="box">
                                <img src={four} />
                                <div className="txt">
                                    <li>عن الفائدة..</li>
                                </div>
                            </div>
                            <div className="box">
                                <img src={four} />
                                <div className="txt">
                                    <li>مستقبل الريف المصرى </li>
                                </div>
                            </div>
                            <div className="box">
                                <img src={four} />
                                <div className="txt">
                                    <li>إياك أن تغلق جميع الأبواب</li>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}
