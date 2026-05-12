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
            <section className="description bg-rose-50 h-[20vh] w-screen flex items-center justify-center">
                <Carousel 
                    className="w-[80%]"
                    
                >
                    <CarouselContent>
                        <CarouselItem>
                            <p className="text-[1.2rem] text-center text-gray-700">
                                Discover a wide range of products at unbeatable prices. Shop with confidence and enjoy a seamless shopping experience.
                            </p>
                        </CarouselItem>
                        <CarouselItem>
                            <p className="text-[1.2rem] text-center text-gray-700">
                                Find the latest trends and exclusive deals on our platform. We bring you the best shopping experience right at your fingertips.
                            </p>
                        </CarouselItem>
                        <CarouselItem>
                            <p className="text-[1.2rem] text-center text-gray-700">
                                Shop smarter, not harder. Explore our vast selection of products and enjoy fast shipping and excellent customer service.
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