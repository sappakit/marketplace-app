import { Button } from "@/components/ui/button";
import { House, BookOpenText, Bell, ShoppingCart, UserRound} from 'lucide-react';

function NavBar() {
  return (
    <nav className="bg-rose-200 h-[10vh] w-screen flex items-center justify-between p-4">
      <section className="h-[35%] w-[30%] sm:h-[55%] sm:w-[22%] xl:h-[40%] xl:w-[15%] flex items-center justify-center border-red-500 border-2">
        <h1 className="w-full h-full text-[1rem] sm:text-[2rem] text-center font-bold text-red-500">
          SHOPPER
        </h1>
      </section>                                                                      
      <section className="list-button">
        <ul className="flex gap-4">
          <li className="text-red-500 cursor-pointer">
            <House className="w-8 h-8"/>
          </li>
          <li className="text-red-500 cursor-pointer">
            <BookOpenText className="w-8 h-8"/>
          </li>
          <li className="text-[1.1rem] font-semibold text-red-500 cursor-pointer">
            <Bell className="w-8 h-8"/>
          </li>
          <li className="text-[1.1rem] font-semibold text-red-500 cursor-pointer">
            <ShoppingCart className="w-8 h-8"/>
          </li>
          <li className="text-[1.1rem] font-semibold text-red-500 cursor-pointer">
            <UserRound className="w-8 h-8"/>
          </li>
        </ul>
      </section>
      <section className="authentication flex gap-4">
        <Button variant="ghost">LOGIN</Button>
        <Button variant="secondary">SIGN UP</Button>
      </section>    
    </nav>
  );
}

export default NavBar;