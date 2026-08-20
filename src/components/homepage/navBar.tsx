import { Button } from "@/components/ui/button";
import { House, BookOpenText, Bell, ShoppingCart, UserRound, Sun, Moon} from 'lucide-react';
import { useState , useEffect } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/ui/theme-provider";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SlowMo } from "gsap/EasePack";


function NavBar({clickPage}: {clickPage: (page: string) => void}) {
  //////set stage change//////
  const [page, setPage] = useState("");
  const { setTheme } = useTheme()

  //////set event handle//////
  
  useEffect(() => {
    if (page) {
      console.log(page,"click");
      clickPage(page);
    }

  }, [page]);
 
  const handleHomeClick = () => {
    setPage("home");
  } 
  //Promotion page
  const handlePromotionClick = () => {
    setPage("promotion");
  }

  //Notification page
  const handleNotificationClick = () => {
    setPage("notification");
  }

  //Basket page
  const handleBasketClick = () => {
    setPage("Basket");
  }

  //profile page
  const handleProfileClick = () => {
    setPage("profile");
  }

  //Sign up page
  const handleSignUpClick = () => {
    setPage("signup");
  }


  return (
    <nav className="sticky top-0 z-10 bg-slate-950 w-full h-auto  rounded-2xl flex items-center justify-between p-6">
      <section className="h-[70%] w-[30%] flex items-center justify-center">
        <h1 className="text-[1.25rem] md:text-[2rem] max-sm:text-[1rem] text-center font-bold text-red-500">
          SHOPPER
        </h1>
      </section>                                                                      
      <section className="list-button w-[40%] h-auto">
        <ul className="flex justify-center gap-8">
          <li className="text-red-500 cursor-pointer">
            <House className="w-6 h-6 md:w-8 md:h-8 max-sm:w-[1.2rem] max-sm:h-[1.2rem] hover:text-red-300" onClick={handleHomeClick}/>
          </li>
          <li className="text-red-500 cursor-pointer">
            <BookOpenText className="w-6 h-6 md:w-8 md:h-8 max-sm:w-[1.2rem] max-sm:h-[1.2rem] hover:text-red-300" onClick={handlePromotionClick}/>
          </li>
          <li className="text-[1.1rem] font-semibold text-red-500 cursor-pointer">
            <Sheet>
              <SheetTrigger>
                <Bell className="w-6 h-6 md:w-8 md:h-8 max-sm:w-[1.2rem] max-sm:h-[1.2rem] hover:text-red-300" onClick={handleNotificationClick}/>
              </SheetTrigger>
              <SheetContent 
                side="top"
                className="w-screen h-[30vh] bg-rose-100 flex items-center justify-center"
              >
                <SheetHeader>
                  <SheetTitle>Notification</SheetTitle>
                  <SheetDescription>
                    You have 3 new notifications.
                  </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                  <SheetClose render={<Button variant="outline">Close</Button>} />
                </SheetFooter>
              </SheetContent>
            </Sheet>            
          </li>
          <li className="text-[1.1rem] font-semibold text-red-500 cursor-pointer">
            <ShoppingCart className="w-6 h-6 md:w-8 md:h-8 max-sm:w-[1.2rem] max-sm:h-[1.2rem] hover:text-red-300" onClick={handleBasketClick}/>
          </li>
          <li className="text-[1.1rem] font-semibold text-red-500 cursor-pointer">
            <UserRound className="w-6 h-6 md:w-8 md:h-8 max-sm:w-[1.2rem] max-sm:h-[1.2rem] hover:text-red-300" onClick={handleProfileClick}/>
          </li>
        </ul>
      </section>
      <section className="right-button w-[30%] h-auto flex items-center gap-6">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline" size="icon" asChild>
              <div>
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h=[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle them</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}> 
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Sheet>
          <SheetTrigger>
            <Button variant="secondary" className="w-15 h-6 md:w-15 md:h-10 max-sm:w-[1.2rem] max-sm:h-[1.2rem] max-sm:text-[1rem] cursor-pointer wrap-break-word">LOGIN</Button>
          </SheetTrigger>
          <SheetContent 
            side="right"
            className="w-full h-full bg-rose-100 flex items-center justify-start p-5"
          >
            <SheetHeader>
              <SheetTitle>Login</SheetTitle>
              <SheetDescription>
                Please enter your login credentials.
                <form>
                  <input type="text" placeholder="Username" className="p-2 border border-gray-300 bg-white rounded-md w-full mb-4" />
                  <input type="password" placeholder="Password" className="p-2 border border-gray-300  bg-white rounded-md w-full mb-4" />
                  <Button variant="default" type="submit" className="w-full p-2 rounded-md bg-red-500 text-white hover:bg-red-600">Login</Button>
                </form>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>        
        <Button className="w-15 h-6 md:w-15 md:h-10 cursor-pointer p-2 bg-white text-black wrap-break-word" onClick={handleSignUpClick}>SIGN UP</Button>
      </section>
    </nav>
  );
}

export default NavBar;