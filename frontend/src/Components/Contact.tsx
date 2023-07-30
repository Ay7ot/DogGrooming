import { useEffect, useState } from "react";
import NavOthers from "./NavOthers";
import Footer from "./Footer";
import axios from "axios";

export function MainContact(){
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        phoneNumber: '',
        message: ''
    })

    useEffect(()=>{
        window.scrollTo(0, 0)
    })

    async function handleSubmit(){
        axios.post('https://dog-groomer.onrender.com/send-email', formData)
    }

    return (
        <section className="mt-[100px] px-10 pb-[200px] flex flex-col items-center">
            <h2 className="font-semibold text-[1.5rem] tracking-wider">CONTACT US</h2>
            <p className="font-dai text-center text-[#808080] mt-6">
                Contact us if you have any questions or concerns. <br />We are always available to help! <br /><br />
                Contact us through email below or give us a call at: (614) - 414 - 7270
            </p>

            <form className="flex flex-col gap-6 w-full max-w-[400px] mt-10" onSubmit={(e)=>{e.preventDefault(); handleSubmit();}}>
                <label className="flex flex-col">
                   <p className="font-dai text-[#808080]">Name</p>
                    <input 
                        className="border-[#808080] outline-none border-[1px] p-2"
                        value={formData.name}
                        name="name"
                        onChange={(e)=>{
                            const { name, value } = e.target;
                            setFormData((prevData) => ({ ...prevData, [name]: value }));
                        }}
                        type="text"
                    />
                </label>
                <label className="flex flex-col">
                    <p className="font-dai text-[#808080]">Email Address</p>
                    <input 
                        className="border-[#808080] outline-none border-[1px] p-2"
                        value={formData.email}
                        name="email"
                        onChange={(e)=>{
                            const { name, value } = e.target;
                            setFormData((prevData) => ({ ...prevData, [name]: value }));
                        }}
                        type="email"
                    />
                </label>
                <label className="flex flex-col">
                    <p className="font-dai text-[#808080]">Phone Number</p>
                    <input 
                        className="border-[#808080] outline-none border-[1px] p-2"
                        value={formData.phoneNumber}
                        name="phoneNumber"
                        onChange={(e)=>{
                            const { name, value } = e.target;
                            setFormData((prevData) => ({ ...prevData, [name]: value }));
                        }}
                        type="text"
                    />
                </label>
                <label className="flex flex-col">
                    <p className="font-dai text-[#808080]">{`Tell us about your dog (Pet Name and Breed as well please)`}</p>
                    <textarea 
                        rows={4}
                        value={formData.message}
                        name="message"
                        onChange={(e)=>{
                            const { name, value } = e.target;
                            setFormData((prevData) => ({ ...prevData, [name]: value }));
                        }}
                        className="border-[1px] border-[#808080] outline-none p-2"
                    />
                </label>
                <button className="p-4 bg-blue-400 md:bg-transparent border-blue-400 border-2 text-white md:hover:bg-blue-400 md:hover:text-white transition-all duration-200 ease-in md:text-blue-400 hover:">
                    SUBMIT
                </button>
            </form>
        </section>
    )
}

export default function Contact() {
    return (
        <section className="fade-in pb-10">
            <NavOthers />
            <MainContact />
            <Footer />
        </section>
    )
}
