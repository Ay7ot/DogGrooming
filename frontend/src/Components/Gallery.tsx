import NavOthers from "./NavOthers";
import Footer from "./Footer";
import { useCallback, useEffect, useState } from 'react'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'

export function SlideShow(){
    const slidesData = [
        {
            id:1,
            imageUrl: 'body1.jpg',
            caption: 'Image 1'
        },
        {
            id:2,
            imageUrl: 'body2.jpg',
            caption: 'Image 2'
        },
        {
            id:3,
            imageUrl: 'body3.jpg',
            caption: 'Image 3'
        },
        {
            id:4,
            imageUrl: 'body4.jpg',
            caption: 'Image 4'
        },
    ]

    const [currentSlide, setCurrentSlide ] = useState(0)

    function handlePrevSlide(){
        setCurrentSlide((prevSlide)=> (prevSlide === 0 ? slidesData.length-1 : prevSlide-1))
    }

    const handleNextSlide = useCallback(() => {
        setCurrentSlide((prevSlide) => (prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1));
    }, [slidesData.length]);

    useEffect(() => {
        // Function to automatically change slides
        const autoPlay = () => {
          handleNextSlide();
        };
    
        // Set up the interval for autoplay
        const interval = setInterval(autoPlay, 3000);
    
        // Clear the interval when the component unmounts or when slides change
        return () => {
          clearInterval(interval);
        };
      }, [currentSlide, handleNextSlide]);

    return (
        <div className="mt-10 w-full max-w-[600px]">
            <div className="slideshow-container w-full min-h-[250px] sm:h-[400px]">
                {slidesData.map((slide, index) => (
                    <div
                    key={slide.id}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    >
                        <img src={slide.imageUrl} alt={slide.caption} />
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center mt-6">
                <button onClick={handlePrevSlide} className="text-[2rem] "><BsArrowLeftCircle /></button>
                <button onClick={handleNextSlide} className="text-[2rem]"><BsArrowRightCircle /></button>
            </div>
        </div>
    )
}
export function MainGallery(){

    return (
        <section className="mt-[100px] w-full px-10 pb-[200px] flex flex-col items-center">
            <h2 className="font-semibold text-[1.5rem] tracking-wider">GALLERY</h2>
            <SlideShow />
        </section>
    )
}

export default function Gallery() {
    
    useEffect(()=>{
        window.scrollTo(0,0)
    })

    return (
        <section className="fade-in pb-10">
            <NavOthers />
            <MainGallery />
            <Footer />
        </section>
        
    )
}
