import React from "react";
import "./info.scss";
import four from "../../assets/weather.jpg";

export default function Info() {
  return (
    <div className="sction">
      <div className="container">
        <div className="right">
          <h2>أخبار مصر</h2>
        
          <Card
            img={four}
            alt="news"
            title="اليوم.. طقس حار رطب نهارًا معتدل رطب ليلاً على كل الأنحاء"
            time="10"
          />
          {/*  */}
          <div className="content-down">
            <div className="content-middle-1">
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

            <div className="content-middle-2">
              <div className="box-left-2">
                <img src={four} />
                <div className="txt">
                  <h6>طقس حار رطب نهارًا معتدل رطب ليلاً على كل الأنحاء</h6>
                  <p> منذ 9 ساعات</p>
                  <button className="btn">اقرأ المزيد</button>
                </div>
              </div>
              <div className="box-right-2">
                <img src={four} />
                <div className="txt">
                  <h6> طقس حار رطب نهارًا معتدل رطب ليلاً على كل الأنحاء</h6>
                  <p> منذ 9 ساعات</p>
                  <button className="btn">اقرأ المزيد</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="left">
          <div className="table table-two">
            <div className="content-left">
              <ul className="time-table">
                <h2>أسعار العملات</h2>
                <li>
                  دولار أمريكي<p>18.88L.E</p>
                </li>
                <li>
                  يورو <span>hiiiiiii</span>
                  <p>19.03L.E</p>
                </li>
                <li>
                  جنيه إسترليني<p>22.38L.E</p>
                </li>
                <li>
                  ريال سعودي<span>i</span>
                  <p>5.03L.E</p>
                </li>
                <li>
                  درهم إماراتي<p>5.14L.E</p>
                </li>
                <li>
                  دينار كويتي<p>61.29L.E</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
