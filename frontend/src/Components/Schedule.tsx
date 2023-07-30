import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavOthers from "./NavOthers";
import { useEffect } from "react";

export function MainSchedule(){

    useEffect(()=>{
        window.scrollTo(0, 0)
    })

    return (
        <section className="mt-[100px] px-10 pb-[200px] flex flex-col items-center">
            <h2 className="font-semibold text-[1.5rem] tracking-wider">SCHEDULE</h2>
            <div className="max-w-[600px] mt-6 pb-20 border-b-2">
                <p className="font-semibold text-center font-dai">
                    PET DROP OFF IS BETWEEN 8 AM - 1 PM.<br />  
                    ALLOW 3 - 4 HOURS TO COMPLETE THE SERVICE AND WE'LL CALL YOU FOR PICK UP!
                    <br /><br />***IF NO APPOINTMENTS ARE AVAILABLE ON THE DATE YOU REQUESTED PLEASE CALL US (614)-414-7270.***
                </p>
                <p className="mt-20 font-dai text-center text-[#808080]">PLEASE ADD THE NAME AND BREED OF YOUR DOG AT BOOKING</p>
                <Link to='/bookAppointment' className="flex items-center justify-center mt-10">
                    <button className="py-6 px-20 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-[0.3s] ease-in">BOOK AN APPOINTMENT</button>
                </Link>
            </div>
            <div className="pt-20 max-w-[600px] flex flex-col items-center">
                <h3 className="text-center leading-[1] font-dai text-[3rem] md:text-[5rem]">YOURBRAND<br />FORMS</h3>
                <p className="text-center font-dai mt-6">PLEASE PRINT AND COMPLETE THE FOLLOWING FOR YOUT VISIT IF YOU HAVE NOT DONE SO ALREADY</p>
                <a href="/" download={true} className="px-10 py-4 border-2 border-blue-400 text-blue-400 mt-10 hover:bg-blue-400 hover:text-white transition-all duration-200 ease in">
                    GROOMING RELEASE FORM
                </a>
            </div>
        </section>
    )
}
export default function Schedule() {
    return (
        <section className="fade-in pb-10">
            <NavOthers />
            <MainSchedule />
            <Footer />
        </section>
    )
}
