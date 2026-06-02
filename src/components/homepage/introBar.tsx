import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
//import Autoplay from "embla-carousel-react";

export default function Intro() { 
    return (
        <div>
            <form className="w-screen h-[10vh] p-2 fixed z-10 text-center">
                <input type="text" placeholder="Search for products, brands and more" className="w-[40%] h-10 md:w-[40%] md:h-12 xl:w-[20%] rounded-full border-2 border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-red-300"/>
                <button type="submit" className="ml-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">Search</button>
            </form>
            <section className="intro bg-rose-100 h-[30vh] w-screen flex items-center justify-center">
                <h1 className="text-[2.5rem] font-bold text-red-500">
                    Welcome to Shopper!
                </h1>
            </section>
            <section className="description bg-rose-50 h-[60vh] w-screen p-20 flex items-center justify-center">
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
        </div>      
    );
}