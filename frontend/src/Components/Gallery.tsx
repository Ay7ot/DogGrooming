import NavOthers from "./NavOthers";
import Footer from "./Footer";
// import { Slide } from "react-slideshow-image";

export function MainGallery(){

    return (
        <section className="mt-[100px] px-10 pb-[200px] flex flex-col items-center">
            <h2 className="font-semibold text-[1.5rem] tracking-wider">GALLERY</h2>
            
        </section>
    )
}
export default function Gallery() {

    

    return (
        <section className="fade-in pb-10">
            <NavOthers />
            <MainGallery />
            <Footer />
        </section>
        
    )
}
