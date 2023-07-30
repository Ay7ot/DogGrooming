import { useEffect } from "react";
import Footer from "./Footer";
import NavOthers from "./NavOthers";

export function MainRates(){

    useEffect(()=>{
        window.scrollTo(0, 0)
    })

    return (
        <section className="mt-[100px] px-10 pb-[200px] flex flex-col items-center">
            <h2 className="font-semibold text-[1.5rem] tracking-wider">RATES</h2>
            <div className="py-20 mt-10 text-center border-y-[1px] max-w-[600px]">
                <h3 className=" font-semibold text-[1.2rem]">
                    CALL OR EMAIL US FOR EXACT RATES.<br />
                    RATES WILL CHANGE DEPENDING ON DOG SIZE AND SERVICES NEEDED.<br />
                    PRICING RANGES ARE LISTED BELOW.
                </h3>
                <div className="flex flex-col gap-3 mt-6">
                    <a className="md:text-[0.8rem] font-semibold text-[#808080]" href="tel:+2348075200170">PHONE NUMBER: <span className="font-normal cursor-pointer hover:text-blue-300">{`(123)-456-7890`}</span></a>
                    <a className="md:text-[0.8rem] font-semibold text-[#808080]" href="mailto:ayomidotzee@gmail.com">E-MAIL: <span className="font-normal cursor-pointer hover:text-blue-300">contact@youremail.com</span></a>
                </div>
                <div className="mt-10  flex flex-col gap-6 md:grid md:grid-cols-2">
                    <div>
                        <h4 className="font-semibold text-[1.1rem] text-black">DOG GROOMING</h4>
                        <div className="flex flex-col gap-3 mt-3">
                            <p className="font-semibold md:text-[0.8rem] text-[#808080]">Puppy: <span className="font-normal">$35.00</span></p>
                            <p className="font-semibold md:text-[0.8rem] text-[#808080]">XS Dog: <span className="font-normal">$50.00</span></p>
                            <p className="font-semibold md:text-[0.8rem] text-[#808080]">Small Dog: <span className="font-normal">$55.00 - $60.00</span></p>
                            <p className="font-semibold md:text-[0.8rem] text-[#808080]">Medium Dog: <span className="font-normal">$65.00 - $80.00</span></p>
                            <p className="font-semibold md:text-[0.8rem] text-[#808080]">Large Dog: <span className="font-normal">$85.00 - $95.00</span></p>
                            <p className="font-semibold md:text-[0.8rem] text-[#808080]">XL Dog: <span className="font-normal">$100.00+</span></p>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-[1.1rem] text-black">GROOMING ADD-ONS</h4>
                        <div className="flex flex-col gap-3 mt-3">
                        <p className="font-semibold md:text-[0.8rem] text-[#808080]">Anal Gland Expression: <span className="font-normal">$10.00</span></p>
                        <p className="font-semibold md:text-[0.8rem] text-[#808080]">De-matting Brush Out: <span className="font-normal">$10.00 - $20.00</span></p>
                        <p className="font-semibold md:text-[0.8rem] text-[#808080]">De-Shedding Treatment: <span className="font-normal">$25.00</span></p>
                        <p className="font-semibold md:text-[0.8rem] text-[#808080]">De-Skunking Treatment: <span className="font-normal">$10.00 - $25.00</span></p>
                        <p className="font-semibold md:text-[0.8rem] text-[#808080]">Ear Cleaning: <span className="font-normal">$12.00</span></p>
                        <p className="font-semibold md:text-[0.8rem] text-[#808080]">Hair Dye: <span className="font-normal">$15.00 - $30.00</span></p>
                        <p className="font-semibold md:text-[0.8rem] text-[#808080]">Nail Grind a la carte: <span className="font-normal">$10.00</span></p>
                        <p className="font-semibold md:text-[0.8rem] text-[#808080]">Nail Trim and File: <span className="font-normal">$10.00</span></p>
                        <p className="font-semibold md:text-[0.8rem] text-[#808080]">Sanitary Trim: <span className="font-normal">$7.00</span></p>
                        <p className="font-semibold md:text-[0.8rem] text-[#808080]">Special Shampoo: <span className="font-normal">$8.00</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function Rates() {
    return (
        <section className="fade-in pb-10">
            <NavOthers />
            <MainRates />
            <Footer />
        </section>
    )
}
