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
} from "@/components/ui/sheet"


function NavBar({clickPage}: {clickPage: (page: string) => void}) {
  //////set stage change//////
  const [page, setPage] = useState("");

  //////set event handle//////
  //กำลังจะทำให้เป็นแบบเดียวกับ profile คือส่งค่าไปที่ App แล้วให้ App เปลี่ยนหน้า แต่ตอนนี้ยังไม่สำเร็จเลยใช้ setTimeout 
  //แทนเพื่อให้แน่ใจว่า state ได้รับการอัพเดตก่อนที่จะส่งค่าไปที่ App ซึ่งเป็นวิธีแก้ปัญหาชั่วคราวที่ไม่ค่อยดีนัก แต่ตอนนี้ยังไม่มีวิธีอื่นที่ดีกว่าในการจัดการกับปัญหานี้
  //Home page
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

<<<<<<< HEAD
  //rofile page
=======
  //profile page
>>>>>>> 48022da (15th commit add Log-in and Sign-up pages)
  const handleProfileClick = () => {
    setPage("profile");
  }

<<<<<<< HEAD
=======
  //Sign up page
  const handleSignUpClick = () => {
    setPage("signup");
  }

>>>>>>> 48022da (15th commit add Log-in and Sign-up pages)

  return (
    <nav className="sticky top-0 z-10 bg-rose-200 h-[7vh] w-screen flex items-center justify-between p-6">
      <section className="h-[70%] w-[30%] sm:h-[55%] sm:w-[22%] xl:h-[40%] xl:w-[15%] flex items-center justify-center">
        <h1 className="text-[1.25rem] md:text-[2rem] text-center font-bold text-red-500">
          SHOPPER
        </h1>
      </section>                                                                      
      <section className="list-button">
        <ul className="flex gap-8">
          <li className="text-red-500 cursor-pointer">
            <House className="w-6 h-6 md:w-8 md:h-8 hover:text-red-300" onClick={handleHomeClick}/>
          </li>
          <li className="text-red-500 cursor-pointer">
            <BookOpenText className="w-6 h-6 md:w-8 md:h-8 hover:text-red-300" onClick={handlePromotionClick}/>
          </li>
          <li className="text-[1.1rem] font-semibold text-red-500 cursor-pointer">
            <Sheet>
              <SheetTrigger>
                <Bell className="w-6 h-6 md:w-8 md:h-8 hover:text-red-300" onClick={handleNotificationClick}/>
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
            <ShoppingCart className="w-6 h-6 md:w-8 md:h-8 hover:text-red-300" onClick={handleBasketClick}/>
          </li>
          <li className="text-[1.1rem] font-semibold text-red-500 cursor-pointer">
            <UserRound className="w-6 h-6 md:w-8 md:h-8 hover:text-red-300" onClick={handleProfileClick}/>
          </li>
        </ul>
      </section>
      <section className="right-button flex items-center gap-6">
        <div className="p-1 border-3 border-black rounded-full flex">
          <Sun className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"/>
          <Moon className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"/>
<<<<<<< HEAD
        </div>        
        <Button variant="secondary" className="w-15 h-6 md:w-15 md:h-10 cursor-pointer">LOGIN</Button>
        <Button variant="secondary" className="w-15 h-6 md:w-15 md:h-10 cursor-pointer">SIGN UP</Button>
=======
        </div>
        <Sheet>
          <SheetTrigger>
            <Button variant="secondary" className="w-15 h-6 md:w-15 md:h-10 cursor-pointer">LOGIN</Button>
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
                  <Button variant="default" type="submit" className="w-full p-2 rounded-md bg-red-500 text-white hover:bg-red-600">
                    Login
                  </Button>
                </form>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>        
        <Button className="w-15 h-6 md:w-15 md:h-10 cursor-pointer p-2 bg-white text-black" onClick={handleSignUpClick}>SIGN UP</Button>
>>>>>>> 48022da (15th commit add Log-in and Sign-up pages)
      </section>    
    </nav>
  );
}

export default NavBar;