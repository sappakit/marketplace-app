import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
//import Autoplay from "embla-carousel-react";
import gsap from "gsap";


// This is a Tween
gsap.to(".box", { rotation: 27, x: 100, duration: 1 });

// And this is a Timeline, containing three sequenced tweens
let tl = gsap.timeline();
tl.to(".green", {duration: 1, x: 786}, 1)
  .to(".blue", {duration: 2, x: 700}, "-=1")
  .to(".orange", {duration: 3, x: 600}, "+=3")
 
export default function Intro() { 
    return (
        <div className="w-full h-auto flex-col justify-center items-center">
            <form className="w-full h-[10%] p-2 fixed z-10 text-center">
                <input type="text" placeholder="Search for products, brands and more" className="w-[40%] h-10 md:w-[40%] md:h-12 xl:w-[20%] text-red-300 rounded-full border-2 border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-red-300"/>
                <button type="submit" className="ml-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">Search</button>
            </form>
            <section className="intro bg-slate-800 h-[30vh] w-full flex rounded-2xl items-center justify-center">
                <h1 className="text-[2.5rem] text-center font-bold text-red-500 wrap-break-word">
                    Welcome to Shopper!
                </h1>
            </section>
            <section className="description bg-slate-900 rounded-2xl h-auto w-full p-20 flex items-center justify-center">
                <Carousel 
                    className="w-150 h-140 xl:w-170 xl:h-120 rounded-4xl bg-white flex justify-center content-center"                   
                >
                    <CarouselContent className="w-full h-full">
                        <CarouselItem className="w-full h-full">
                            <img src="src\assets\shirts_stock\Shirt01.png" alt="gray-Tshirt" className="w-full h-full rounded-4xl"/>
                        </CarouselItem>
                        <CarouselItem className="w-full h-full">
                            <img src="src\assets\shirts_stock\Shirt02.png" alt="white-Tshirt" className="w-full h-full rounded-4xl"/>
                        </CarouselItem>
                        <CarouselItem className="w-full h-full">
                            <img src="src\assets\shirts_stock\Shirt03.png" alt="dark-Tshirt" className="w-full h-full rounded-4xl"/>
                        </CarouselItem>
                        <CarouselItem className="w-full h-full">
                            <img src="src\assets\shirts_stock\Shirt04.png" alt="jean" className="w-full h-full rounded-4xl"/>
                        </CarouselItem>
                        <CarouselItem className="w-full h-full">
                            <img src="src\assets\shirts_stock\Shirt05.png" alt="gray-hoodshirt" className="w-full h-full rounded-4xl"/>
                        </CarouselItem>
                        <CarouselItem className="w-full h-full">
                            <img src="src\assets\shirts_stock\Shirt06.png" alt="dark-yellow-trouser" className="w-full h-full rounded-4xl"/>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
            <div className="w-full h-40 flex-col content-center">
                <div className="box green w-5 h-5 z-10 bg-green-500"></div>
                <div className="box blue w-5 h-5 z-10 bg-sky-500"></div>
                <div className="box orange w-5 h-5 z-10 bg-orange-500"></div>
            </div>           
        </div>      
    );
}