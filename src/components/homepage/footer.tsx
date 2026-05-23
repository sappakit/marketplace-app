import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";


export default function Footer() {
    return (
        <footer className="w-screen h-[30vh] bg-gray-100 flex-col">
            <section className="w-[70%] h-[90%] p-10 justify-self-center flex justify-center items-center">
                <div className="w-[50%] h-full leading-20 flex-col justify-items-center content-center">
                    <p className="text-[3rem] sm:text-[2rem] text-center font-bold text-red-500">
                        SHOPPER
                    </p>
                    <div className="w-full h-[50%] flex justify-center items-center gap-10">
                        <FaFacebook className="w-7 h-auto cursor-pointer hover:scale-120"/>
                        <RiInstagramFill className="w-7 h-auto cursor-pointer hover:scale-120"/>
                        <BsTwitterX className="w-7 h-auto cursor-pointer hover:scale-120"/>
                    </div>
                </div>
                <div className="w-[50%] h-full p-10 flex justify-evenly items-center">
                    <ul className="self-start leading-10">
                        <li className="cursor-pointer hover:underline">Privacy</li>
                        <li className="cursor-pointer hover:underline">Term</li>
                        <li className="cursor-pointer hover:underline">About us</li>
                    </ul>
                    <ul className="self-start leading-10">
                        <li className="cursor-pointer hover:underline">Contact us</li>
                        <li className="cursor-pointer hover:underline">Map</li>
                    </ul>
                </div>
            </section>
            <section className="w-full h-[10%] self-end flex justify-center items-center bg-gray-800 text-white">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </section>
        </footer>
    )
}