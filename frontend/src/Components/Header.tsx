
export default function Header() {
    return (
        <header className=" bg-black pt-6 px-4 sm:px-10">
            <div className="min-h-[90vh] headerImage relative text-white">
                <div className="mt-[100px] sm:mt-10 flex items-center justify-center">
                    <img
                        src="pawLogo.png"
                        className="w-[50px]"
                    />
                </div>
                <div className="flex flex-col items-center text-center">
                    <h1 className="font-bold text-[3.5rem] md:text-[5rem] lg:text-[6rem]">BRAND NAME</h1>
                    <h2 className="font-bold text-[2rem]">PET GROOMING SALON</h2>
                    <p>AUSTIN, TEXAS</p>
                </div>
                {/* <div className="flex items-center justify-center gap-6  mt-[50px] sm:mt-[200px]">
                    <button className="border-white border-2 text-xs sm:text-base p-3 sm:p-4 fade-in-right-bg">
                        JOIN OUR EMAIL LIST
                    </button>
                    <button className="border-white border-2 text-xs sm:text-base p-3 sm:p-4 fade-in-right-bg">
                        BOOK APPOINTMENT
                    </button>
                </div> */}
            </div>
        </header>
    )
}
