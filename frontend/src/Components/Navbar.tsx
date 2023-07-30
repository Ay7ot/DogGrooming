import { LiaTimesSolid } from 'react-icons/lia'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [showNavMobile, setShowNavMobile] = useState(false)
    function showNav(){
        setShowNavMobile(prevValue=>!prevValue);
    }

    return (
        <nav className="z-[99999] shadow-md sm:shadow-none sm:flex sm:items-center sm:justify-center sticky top-0 bg-black p-4 ">
            <div className='flex items-center justify-between'>
                <div className='sm:hidden'></div>
                <Link to="/" className="flex sm:hidden items-center font-montserrat">
                    <p className='text-white'> YOUR NAME HERE</p>
                </Link>
                <div className='hidden sm:flex gap-3 pt-10 text-[0.8rem] md:text-[1rem] md:gap-6 items-center justify-ceneter'>
                    <Link to='/' onClick={()=>setShowNavMobile(false)}>
                        <p className='text-white font-semibold hover:text-blue-300 focus:text-blue-300 font-dai'>HOME</p>
                    </Link>
                    <Link to='/about'>
                        <p className='text-white font-semibold hover:text-blue-300 focus:text-blue-300 font-dai'>ABOUT US</p>
                    </Link>
                    <Link to='/services'>
                        <p className='text-white font-semibold hover:text-blue-300 focus:text-blue-300 font-dai'>SERVICES</p>
                    </Link>
                    <Link to='/rates'>
                        <p className='text-white font-semibold hover:text-blue-300 focus:text-blue-300 font-dai'>RATES</p>
                    </Link>
                    {/* <Link to='/schedule'>
                        <p className='text-white font-semibold hover:text-blue-300 focus:text-blue-300 font-dai'>SCHEDULE</p>
                    </Link> */}
                    <Link to='/contact'>
                        <p className='text-white font-semibold hover:text-blue-300 focus:text-blue-300 font-dai'>CONTACT US</p>
                    </Link>
                </div>
                <button className='text-[2rem] sm:hidden text-white' onClick={showNav}>
                    <HiBars3BottomRight />
                </button>
            </div>
            <div className={`${showNavMobile ? 'navShown' : 'hide'} navMobile fixed top-0 bg-white h-screen w-[300px] right-0`}>
                <div className='flex justify-end h-[5rem] p-4 items-center'>
                    <i className='text-[2rem] text-black' onClick={showNav}>
                        {showNavMobile ?
                            <LiaTimesSolid /> :
                            <HiBars3BottomRight />
                        }
                    </i>
                </div>
                <div className='px-4'>
                    <Link to='/' onClick={()=>setShowNavMobile(false)}>
                        <p className='text-black pb-3 border-b-[1px] mb-6 border-b-[#000000]'>HOME</p>
                    </Link>
                    <Link to='/about'>
                        <p className='text-black pb-3 border-b-[1px] mb-6 border-b-[#000000]'>ABOUT US</p>
                    </Link>
                    <Link to='/services'>
                        <p className='text-black pb-3 border-b-[1px] mb-6 border-b-[#000000]'>SERVICES</p>
                    </Link>
                    <Link to='/rates'>
                        <p className='text-black pb-3 border-b-[1px] mb-6 border-b-[#000000]'>RATES</p>
                    </Link>
                    {/* <Link to='/schedule'>
                        <p className='text-black pb-3 border-b-[1px] mb-6 border-b-[#000000]'>SCHEDULE</p>
                    </Link> */}
                    <Link to='/contact'>
                        <p className='text-black pb-3 border-b-[1px] mb-6 border-b-[#000000]'>CONTACT US</p>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
