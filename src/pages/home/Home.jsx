import React from 'react'
import Slider from "../../components/slider/Slider"
import Hero from '../../components/hero/hero'
import Info from '../../components/info/info'
import Infoo from '../../components/info-light/info-light'
import Inffo from '../../components/info-second/info-sec'
import Banner from '../../components/banner/banner'


export default function Home() {
    return (
        <div>
            {/* <Slider /> */}
            <Hero />
            <Banner />
            <Info />
             <Infoo />
            <Inffo /> 
        </div>
    )
}
