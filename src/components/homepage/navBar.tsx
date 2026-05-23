import { Button } from "@/components/ui/button";
import { House, BookOpenText, Bell, ShoppingCart, UserRound, Sun, Moon} from 'lucide-react';

function NavBar() {
  return (
    <nav className="bg-rose-200 h-[7vh] w-screen flex items-center justify-between p-6">
      <section className="h-[70%] w-[30%] sm:h-[55%] sm:w-[22%] xl:h-[40%] xl:w-[15%] flex items-center justify-center">
        <h1 className="text-[1.25rem] md:text-[2rem] text-center font-bold text-red-500">
          SHOPPER
        </h1>
      </section>                                                                      
      <section className="list-button">
        <ul className="flex gap-8">
          <li className="text-red-500 cursor-pointer">
            <House className="w-6 h-6 md:w-8 md:h-8 hover:text-red-300"/>
          </li>
          <li className="text-red-500 cursor-pointer">
            <BookOpenText className="w-6 h-6 md:w-8 md:h-8 hover:text-red-300"/>
          </li>
          <li className="text-[1.1rem] font-semibold text-red-500 cursor-pointer">
            <Bell className="w-6 h-6 md:w-8 md:h-8 hover:text-red-300"/>
          </li>
          <li className="text-[1.1rem] font-semibold text-red-500 cursor-pointer">
            <ShoppingCart className="w-6 h-6 md:w-8 md:h-8 hover:text-red-300"/>
          </li>
          <li className="text-[1.1rem] font-semibold text-red-500 cursor-pointer">
            <UserRound className="w-6 h-6 md:w-8 md:h-8 hover:text-red-300"/>
          </li>
        </ul>
      </section>
      <section className="right-button flex items-center gap-6">
        <div className="p-1 border-3 border-black rounded-full flex">
          <Sun className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"/>
          <Moon className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"/>
        </div>        
        <Button variant="secondary" className="w-6 h-6 md:w-8 md:h-8 cursor-pointer">LOGIN</Button>
        <Button variant="secondary" className="w-6 h-6 md:w-8 md:h-8 cursor-pointer">SIGN UP</Button>
      </section>    
    </nav>
  );
}

export default NavBar;