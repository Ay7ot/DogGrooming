import { useEffect } from "react";
import Footer from "./Footer";
import NavOthers from "./NavOthers";
import { Link } from "react-router-dom";

export function MainAbout(){
    useEffect(()=>{
        window.scrollTo(0, 0)
    })
    
    return (
        <section className="item text-center mt-[100px] px-10 pb-10 flex flex-col items-center">
            <h2 className="font-semibold text-[1.5rem] tracking-wider">DISCLAIMERS</h2>
            <ol className="list-none max-w-[600px]  font-semibold pb-20 border-b-[1px] mt-6 flex flex-col gap-4">
                <li>1. DOORS DO NOT OPEN UNTIL 8AM</li>
                <li>2. APPOINTMENTS BOOKED BETWEEN 10AM-11AM HAVE VARRIED PICK-UP TIMES</li>
                <li>3. IF YOU HAVE NOT RECIEVED A CALL OR TEXT, YOUR DOG IS NOT READY</li>
                <li>4. LATE FEES MAY APPLY TO PICKUPS AFTER 5PM </li>
            </ol>
            <div className="max-w-[700px] mt-10 flex flex-col gap-6 md:grid md:grid-cols-3">
                <div>
                    <h3 className=" font-semibold text-[1.2rem]">CONTACT</h3>
                    <div className="flex flex-col gap-3 mt-3">
                        <a className="md:text-[0.8rem] font-semibold text-[#808080]" href="tel:+2348075200170">PHONE NUMBER: <span className="font-normal cursor-pointer hover:text-blue-300">{`(123)-456-7890`}</span></a>
                        <a className="md:text-[0.8rem] font-semibold text-[#808080]" href="mailto:ayomidotzee@gmail.com">E-MAIL: <span className="font-normal cursor-pointer hover:text-blue-300">contact@youremail.com</span></a>
                    </div>
                </div>
                <div>
                    <h3 className=" font-semibold">HOURS</h3>
                    <div className="flex flex-col gap-3 mt-3">
                        <p className="md:text-[0.8rem] font-semibold text-[#808080]">MON, TUE, THUR, FRI: <span className="font-normal">Salon: 8:00 AM - 5:00PM</span></p>
                        <p className="md:text-[0.8rem] font-semibold text-[#808080]">SATURDAY: <span className="font-normal">Salon: 8:00 AM - 5:00PM</span></p>
                        <p className="md:text-[0.8rem] font-semibold text-[#808080]">SUNDAY: <span className="font-normal">CLOSED</span></p>
                        <p className="md:text-[0.8rem] font-semibold text-[#808080]">WEDNESDAY: <span className="font-normal">CLOSED</span></p>
                    </div>
                </div>
                <div>
                    <h3 className=" font-semibold">LOCATION</h3>
                    <p className="md:text-[0.8rem] text-[#808080]">320 S. Hamilton Rd, Austin, Tx 43230 </p>
                </div>
            </div>
            <div className="flex flex-col gap-3 mt-10 pb-20 border-b-[1px]">
                <p className="font-semibold text-[#808080] ">PET DROP-OFF FOR GROOMING IS ANYTIME PRIOR TO OR AT YOUR APPOINTMENT TIME</p>
                <p className="font-semibold text-[#808080] ">PETS BEING GROOMED MUST BE PICKED UP PRIOR TO 5 PM</p>
                <p className="font-semibold text-[#808080] ">PLEASE ADD THE NAME AND BREED OF YOUR PET AT BOOKING</p>
            </div>
            <p className="py-10 max-w-[600px] md:px-10 text-[#808080]  border-b-[1px]">
                Here at Shampooch we specialize in making our customers, as well as their people, happy! We are located in the heart of Gahanna, Ohio along the famous Creekside. We are a family owned business with over 20 years combined experience! From a basic nail trim and ear cleaning, to a full hair cut, to dyed hair, or painted nails, we cater to WHATEVER your needs are. Call today and talk to one of our valued groomers about your pet! 
            </p>
             <Link to='/gallery'>
                <button className="mt-10 text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white py-4 px-10 border-2">
                    YOUR GALLERY
                </button>
             </Link>
        </section>
    )  
}

export default function About() {

    return (
        <div className="fade-in pb-10">
            <NavOthers />
            <MainAbout />
            <Footer />
        </div>
    )
}
