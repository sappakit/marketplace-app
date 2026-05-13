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
            <section className="intro bg-rose-100 h-[30vh] w-screen flex items-center justify-center">
                <h1 className="text-[3rem] font-bold text-red-500">
                    Welcome to Shopper!
                </h1>
            </section>
            <section className="description bg-rose-50 h-[60vh] w-screen p-[5rem] flex items-center justify-center">
                <Carousel 
                    className="w-[70%] h-[100%] p-[1rem] rounded-4xl bg-white flex justify-center items-center"                   
                >
                    <CarouselContent>
                        <CarouselItem>
                            <p className="text-[1.2rem] text-center text-gray-700">
                                Item01
                            </p>
                        </CarouselItem>
                        <CarouselItem>
                            <p className="text-[1.2rem] text-center text-gray-700">
                                Item02
                            </p>
                        </CarouselItem>
                        <CarouselItem>
                            <p className="text-[1.2rem] text-center text-gray-700">
                                Item03
                            </p>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
        </div>      
    );
}