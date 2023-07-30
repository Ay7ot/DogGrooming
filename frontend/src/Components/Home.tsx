import { useEffect } from "react";
import { MainAbout } from "./About";
import { MainContact } from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import { MainRates } from "./Rates";
// import { MainSchedule } from "./Schedule";
import { MainService } from "./Services";

export default function Home() {

    useEffect(()=>{
        window.scrollTo(0, 0)
    })

    return (
        <div className="fade-in pb-10">
            <Navbar />
            <Header />
            <MainAbout /> 
            <div className="body1"></div>
            <MainService />
            <div className="body2"></div>
            <MainRates />
            <div className="body3"></div>
            {/* <MainSchedule /> */}
            <MainContact />
            <Footer />
        </div>
    )
}
