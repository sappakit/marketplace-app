import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Main() {
    return (
        <main className="w-screen h-screen p-10 bg-rose-100 flex justify-center items-start">
            <Card className="w-[70%] h-[50%] p-4 border-2 border-red-500 flex-row justify-center items-center">
                <figure className="w-[40%] h-[90%] border flex justify-center items-center bg-green-100">
                    <h2>Item Photo</h2>
                </figure>
                <div className="w-[60%] h-[90%] flex-col content-between justify-items-center">
                    <article>
                        <CardHeader>
                            <CardTitle>Product Name</CardTitle>
                            <CardDescription>
                                This is a brief description of the product. It highlights key features and benefits to entice customers to make a purchase.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-[1.2rem] text-gray-700">
                                This is a detailed description of the product. It provides more information about the product's specifications, usage, and any other relevant details that customers may find useful when considering a purchase.
                            </p>
                            <p className="text-[1.2rem] font-bold text-red-500">
                                $19.99
                            </p>
                        </CardContent>
                    </article>
                    <div className="w-full flex justify-end">
                        <CardFooter>
                            <Button className="love-button" variant="ghost">Love</Button>
                            <Button className="add-button" variant="ghost">Add</Button>
                        </CardFooter>
                    </div>                   
                </div>                
            </Card>
        </main>
    );
}