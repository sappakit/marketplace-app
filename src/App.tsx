import NavBar from "@/components/homepage/navBar";
import Intro from "@/components/homepage/introBar";
import Main from "@/components/homepage/main";
import Footer from "@/components/homepage/footer";
import MainProfile from "@/components/profilepage/main_profile";
import { useState } from "react";

function App() {
  //set up hoot state
  const [userPage, setUserPage] = useState("");

  //set event handle
  //ติดปัญหาที่ปุ้มเปลี่ยนหน้าใน NavBar ยังมีค่าคงค้างจากการกดปุ่มก่อนหน้าอยู่ ทำให้เมื่อกดปุ่มเปลี่ยนหน้าแล้วค่าที่ส่งไปที่ App ยังเป็นค่าของหน้าก่อนหน้าอยู่ ต้องกดอย่างน้อย 2 ครั้ง ถึงจะเปลี่ยนเป็นหน้าที่ต้องการ
  //ตอนนี้เลยใช้ setTimeout เพื่อให้แน่ใจว่า state ได้รับการอัพเดตก่อนที่จะส่งค่าไปที่ App ซึ่งเป็นวิธีแก้ปัญหาชั่วคราวที่ไม่ค่อยดีนัก กำลังหาวิธีที่ดีกว่าในการจัดการกับปัญหานี้
  const handlePageClick = (e: string) => {
    setUserPage(e);
    console.log("userPage: ", userPage);
  };

  return (
    <>
      <NavBar clickPage={handlePageClick} />
      <Intro />
      {userPage === "profile" ? <MainProfile /> : <Main />}
      <Footer />
    </>
  );
}

export default App;
