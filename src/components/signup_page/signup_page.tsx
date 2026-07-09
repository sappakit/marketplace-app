import { Button } from "@/components/ui/button"

export default function SignUpPage() {
    return (
        <main className="w-screen h-screen bg-rose-100 flex items-center justify-center">
            <div className="w-[70%] h-[90%] rounded-4xl flex items-start justify-evenly p-5">
                <section className="w-[62%] h-full bg-white rounded-2xl p-10 flex flex-col items-center justify-start">
                    <h1 className="self-start font-extrabold text-xl">Sign Up</h1>
                    <div className="w-full mt-4 p-4 rounded-xl">
                        <form className="flex flex-col gap-4">
                            <input type="text" placeholder="Username" className="p-2 border border-gray-300 rounded-md" />
                            <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded-md" />
                            <input type="password" placeholder="Password" className="p-2 border border-gray-300 rounded-md" />
                            <Button variant="default" type="submit" className="w-full p-2 rounded-md bg-red-500 text-white hover:bg-red-600">
                                Sign Up
                            </Button>
                        </form>
                    </div>
                </section>
            </div>
        </main>
    )
}