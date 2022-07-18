import React from "react";
import "./info-light.scss";
import four from "../../assets/btl.jpg";
import Card from "../../design-system/card";
import data from "./data";

export default function Infoo() {
  return (
    <div className="sctionn">
      <div className="container">
        <div className="info">
          <h2>اقتصاد</h2>

         
          <Card
            img={four}
            alt="economy"
            title="مليار جنيه ضرائب ورسوم بجمارك بورسعيد فى يونيو الماضي"
            time="9"
          />
    

    {data.map(card => {
        return(
            <div className="conatiner ">

            <Card
            img={card.image}
            alt={card.alt}
            title={card.title}
            time={card.time}
            />
            </div>
        )
    })}
      
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
