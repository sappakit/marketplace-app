import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Main() {
    return (
        <div>
            <Card className="w-[50rem] h-[50rem] border-2 border-red-500">
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
                </CardContent>
                <CardFooter>
                    <p className="text-[1.2rem] font-bold text-red-500">
                        $19.99
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}