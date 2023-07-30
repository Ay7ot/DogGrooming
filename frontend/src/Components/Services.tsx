import { useEffect } from "react";
import Footer from "./Footer";
import NavOthers from "./NavOthers";

export function MainService(){

    useEffect(()=>{
        window.scrollTo(0, 0)
    })

    return (
        <section className="mt-[100px] px-10 pb-[200px] flex flex-col items-center">
            <h2 className="font-semibold text-[1.5rem] tracking-wider">OUR SERVICES</h2>
            <div className=" mt-10 flex flex-col md:grid md:grid-cols-2 gap-6 max-w-[600px]">
                <div>
                    <h3 className="text-black font-semibold text-[1.1rem]">DOG GROOMING</h3>
                    <p className="text-[#808080] mt-4">Includes hair cut, bath, nail trim, ear clean out, and bow/bandana.</p>
                </div>
                <div>
                     <h3 className="text-black font-semibold text-[1.1rem]">FELINE GROOMING</h3>
                      <p className="text-[#000000] font-bold mt-4">****WE CURRENTLY DO NOT OFFER GROOMING SERVICES****</p>
                </div>
                <div>
                     <h3 className="text-black font-semibold text-[1.1rem]">PUPPY GROOMING</h3>
                      <p className="text-[#808080] mt-4">Dogs that are 6 months and younger. This includes face trim, feet trim, nails and a sanitary trim. This is to acclimate puppies to a wonderful spa day in the future!</p>
                </div>
                <div>
                     <h3 className="text-black font-semibold text-[1.1rem]">BATH ONLY</h3>
                      <p className="text-[#808080] mt-4">This includes only a dog shampooed bath.</p>
                </div>
            </div>
            <div className="mt-6  max-w-[600px]">
                <h3 className="text-black font-semibold text-[1.1rem]">GROOMING ADD-ON</h3>
                <p className="text-[#808080] mt-4">Grooming add-on's will include: Anal Gland Expression, Dematting Brush Out, De-Shedding Treatment, De-Skunking Treatment, Ear Cleaning, Express Service, Flea Bath, Flea/Tick Shampoo, Hair Dye, Nail Grind ala carte, Nail Grind with Groom, Nail Painting, Nail Trim and File, Sanitary Trim, Special Shampoo, Teeth Brushing, Buckeye Pet Package (Scented shampoo, Nail grind, Teeth Brush, Bow/Bandana)</p>
            </div>
        </section>
    )
}
export default function Services() {
    return (
        <section className="fade-in pb-10">
            <NavOthers />
            <MainService />
            <Footer />
        </section>
    )
}
