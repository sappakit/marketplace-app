import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, ShoppingCart } from 'lucide-react';

export default function Main() {
    return (
        <main className="w-full h-auto p-10 rounded-2xl bg-slate-800 flex justify-center items-start">
            <Card className="w-[60%] h-auto max-sm:h-[30%] xl:w-[40%] xl:h-[40%] p-4">
                <section className="profile w-full h-[20%] flex items-center gap-4 cursor-pointer">
                    <img src="src\assets\profile_image.jpg" alt="Edward Elric profile" className="w-15 h-15 rounded-full object-cover"></img>
                    <h1 className="text-[1rem] font-bold text-black-500 mb-4 wrap-break-word">
                        Jonathan Doe's Store
                    </h1>
                </section>
                <section className="content w-full h-auto flex justify-between items-center">
                    <figure className="w-[50%] h-full flex justify-center items-center">
                        <img src="src\assets\shirts_stock\Shirt07.png" alt="Edward Elric profile" className="w-full h-auto rounded-xl"></img>
                    </figure>
                    <div className="w-[50%] h-full flex-col items-between justify-items-center">
                        <article className="w-full h-[80%]">
                            <CardHeader>
                                <CardTitle className="text-xl wrap-break-word">-Dark Trouser-</CardTitle>                   
                                <CardDescription className="text-base wrap-break-word">
                                    This dark trouser is made from high-quality materials, ensuring durability and comfort. It features a sleek design that can be dressed up or down for any occasion.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-base text-black font-bold wrap-break-word">
                                    Only one left in stock!
                                </p>
                                <p className="text-[1.2rem] font-bold text-red-500">
                                    $19.99
                                </p>
                            </CardContent>
                        </article>
                        <div className="w-full h-[20%] self-end flex justify-end">
                            <CardFooter className="w-25 h-20 flex justify-end gap-4 bg-transparent">
                                <Heart className="w-[80%] h-[80%] cursor-pointer hover:scale-120 hover:text-red-500"/>
                                <ShoppingCart className="w-[80%] h-[80%] cursor-pointer hover:scale-120 hover:text-red-500"/>
                            </CardFooter>
                        </div>                   
                    </div>        
                </section>                      
            </Card>
        </main>
    );
}