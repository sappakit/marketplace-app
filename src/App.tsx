import NavBar from "@/components/homepage/navBar";
import Intro from "@/components/homepage/introBar";
import Main from "@/components/homepage/main";
import Footer from "@/components/homepage/footer";
import MainProfile from "@/components/profilepage/main_profile";
import MainBasket from "@/components/basketpage/main_basket";
import MainPromotion from "@/components/promotionpage/main_promotion";
<<<<<<< HEAD
=======
import SignUpPage from "@/components/signup_page/signup_page";
>>>>>>> 48022da (15th commit add Log-in and Sign-up pages)
import { useState , useEffect } from "react";

function App() {
  //set up hoot state
  const [userPage, setUserPage] = useState("");
  const [mainPage, setMainPage] = useState(<Main />);

  //set page condition
  useEffect(() => {
    switch (userPage) {
      case "home":
        setMainPage(
          <>
            <Intro />
            <Main />
          </>       
        );
        break;
      case "promotion":
        setMainPage(<MainPromotion />);
        break;
      case "notification":
        setMainPage(mainPage);
        break;
      case "Basket":
        setMainPage(<MainBasket />);
        break;
      case "profile":
        setMainPage(<MainProfile />);
        break;
<<<<<<< HEAD
=======
      case "signup":
        setMainPage(<SignUpPage />);
        break;
>>>>>>> 48022da (15th commit add Log-in and Sign-up pages)
      default:
        setMainPage(          
          <>
            <Intro />
            <Main />
          </>   
        );
        break;
    }
  }, [userPage]);
  

  //set event handle
  const handlePageClick = (e: string) => {
    setUserPage(e);
    console.log("userPage: ", userPage);
  };

  
  return (
    <>
      <NavBar clickPage={handlePageClick} />
      {mainPage}
      <Footer />
    </>
  );
}

export default App;
