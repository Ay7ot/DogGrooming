import { BiSolidPhoneCall } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'

export default function CallButton() {
    return (
        <div className='flex flex-col gap-6 fixed bottom-[3rem] right-3 '>
            <a href='mailto:ayomidotzee@gmail.com' className='p-2 rounded-full bg-green-300 hover:bg-blue-300 transition-colors duration-150 ease-in-out text-slate-500 text-[2rem]'><MdEmail /></a>
            <a href='tel:+2348075200170' className='p-2 rounded-full bg-green-300 hover:bg-blue-300 transition-colors duration-150 ease-in-out text-slate-500 text-[2rem]'><BiSolidPhoneCall /></a>
        </div>
    )
}
