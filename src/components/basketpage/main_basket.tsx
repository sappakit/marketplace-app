import { MinusIcon, PlusIcon, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export default function MainBasket() {
    return (
        <main className="w-screen h-screen bg-rose-100 flex items-center justify-center">
            <div className="w-[70%] h-[90%] rounded-4xl flex items-start justify-evenly p-5">
                <section className="w-[62%] h-[100%] bg-white rounded-2xl p-10 flex flex-col items-center justify-start">
                    <h1 className="self-start font-extrabold text-xl">Save Items</h1>
                    <div className="w-full mt-4 p-4 rounded-xl">
                        <figure className="w-[100%] h-[20vh] flex items-center justify-center gap-4 border-2 border-red-400 rounded-xl">
                            <img src="src\assets\shirts_stock\Shirt01.png" alt="Product A" className="w-[40%] h-[100%] rounded-xl object-cover"></img>
                            <div>
                                <figcaption className="flex flex-col items-start justify-center gap-2">
                                    <h2 className="font-extrabold text-lg">Product A</h2>
                                    <p className="text-sm">Description of Product A</p>
                                    <p className="text-sm font-bold text-red-500">$10.00</p>
                                </figcaption>
                                <ButtonGroup
                                    orientation="horizontal"
                                    aria-label="Media controls"
                                    className="h-fit mt-2"
                                >
                                    <Button variant="outline" size="icon">
                                        <PlusIcon />
                                    </Button>
                                    <Button variant="outline" size="icon">
                                        <p>1</p>
                                    </Button>
                                    <Button variant="outline" size="icon">
                                        <MinusIcon />
                                    </Button>
                                </ButtonGroup>
                            </div>                          
                        </figure>
                        <figure className="w-[100%] h-[20vh] flex items-center justify-center gap-4 mt-4 border-2 border-red-400 rounded-xl">
                            <img src="src\assets\shirts_stock\Shirt02.png" alt="Product B" className="w-[40%] h-[100%] rounded-xl object-cover"></img>
                            <div>
                                <figcaption className="flex flex-col items-start justify-center gap-2">
                                    <h2 className="font-extrabold text-lg">Product B</h2>
                                    <p className="text-sm">Description of Product B</p>
                                    <p className="text-sm font-bold text-red-500">$13.00</p>
                                </figcaption>
                                <ButtonGroup
                                    orientation="horizontal"
                                    aria-label="Media controls"
                                    className="h-fit mt-2"
                                >
                                    <Button variant="outline" size="icon">
                                        <PlusIcon />
                                    </Button>
                                    <Button variant="outline" size="icon">
                                        <p>2</p>
                                    </Button>
                                    <Button variant="outline" size="icon">
                                        <MinusIcon />
                                    </Button>
                                </ButtonGroup>
                            </div>                          
                        </figure>
                        <figure className="w-[100%] h-[20vh] flex items-center justify-center gap-4 mt-4 border-2 border-red-400 rounded-xl">
                            <img src="src\assets\shirts_stock\Shirt03.png" alt="Product C" className="w-[40%] h-[100%] rounded-xl object-cover"></img>
                            <div>
                                <figcaption className="flex flex-col items-start justify-center gap-2">
                                    <h2 className="font-extrabold text-lg">Product C</h2>
                                    <p className="text-sm">Description of Product C</p>
                                    <p className="text-sm font-bold text-red-500">$20.00</p>
                                </figcaption>
                                <ButtonGroup
                                    orientation="horizontal"
                                    aria-label="Media controls"
                                    className="h-fit mt-2"
                                >
                                    <Button variant="outline" size="icon">
                                        <PlusIcon />
                                    </Button>
                                    <Button variant="outline" size="icon">
                                        <p>1</p>
                                    </Button>
                                    <Button variant="outline" size="icon">
                                        <MinusIcon />
                                    </Button>
                                </ButtonGroup>
                            </div>                          
                        </figure>
                    </div>
                </section>
                <aside className="w-[34%] h-[100%] bg-rose-400 rounded-2xl p-7 flex flex-col items-center justify-start">
                    <h2 className="self-start font-extrabold text-xl text-white">Low price Low season!</h2>
                    <div className="w-full mt-4 rounded-xl">                    
                        <figure className="w-[100%] h-[30%] p-3 flex items-center justify-center gap-4 border-2 border-white rounded-xl">
                            <img src="src\assets\shirts_stock\Shirt04.png" alt="Product A" className="w-[40%] h-[100%] rounded-xl object-cover"></img>
                            <div>
                                <figcaption className="flex flex-col items-start justify-center gap-2">
                                    <h2 className="font-extrabold text-lg">Product A</h2>
                                    <p className="text-sm">Description of Product A</p>
                                </figcaption>
                                <div className="flex items-center gap-1">
                                    <Star className="w-5 h-5 text-yellow-200 mt-2"/>
                                    <Star className="w-5 h-5 text-yellow-200 mt-2"/>
                                </div>                               
                            </div>                          
                        </figure>
                        <figure className="w-[100%] h-[30%] p-3 flex items-center justify-center gap-4 mt-4 border-2 border-white rounded-xl">
                            <img src="src\assets\shirts_stock\Shirt05.png" alt="Product B" className="w-[40%] h-[100%] rounded-xl object-cover"></img>
                            <div>
                                <figcaption className="flex flex-col items-start justify-center gap-2">
                                    <h2 className="font-extrabold text-lg">Product B</h2>
                                    <p className="text-sm">Description of Product B</p>
                                </figcaption>
                                <div className="flex items-center gap-1">
                                    <Star className="w-5 h-5 text-yellow-200 mt-2"/>
                                </div>    
                            </div>                          
                        </figure>
                        <figure className="w-[100%] h-[30%] p-3 flex items-center justify-center gap-4 mt-4 border-2 border-white rounded-xl">
                            <img src="src\assets\shirts_stock\Shirt06.png" alt="Product C" className="w-[40%] h-[100%] rounded-xl object-cover"></img>
                            <div>
                                <figcaption className="flex flex-col items-start justify-center gap-2">
                                    <h2 className="font-extrabold text-lg">Product C</h2>
                                    <p className="text-sm">Description of Product C</p>
                                </figcaption>
                                <div className="flex items-center gap-1">
                                    <Star className="w-5 h-5 text-yellow-200 mt-2"/>
                                    <Star className="w-5 h-5 text-yellow-200 mt-2"/>
                                    <Star className="w-5 h-5 text-yellow-200 mt-2"/>
                                </div>    
                            </div>                          
                        </figure>
                    </div>
                </aside>
            </div>
        </main>
    )
}