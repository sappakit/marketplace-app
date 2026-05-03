export default function NavBar() {
  return (
    <nav className="bg-rose-200 h-[10vh] w-screen flex items-center justify-between p-4">
      <section className="h-[50%] w-[15%] flex items-center justify-center border-red-500 border-2">
        <h1 className="w-full h-full text-[2rem] text-center font-bold text-red-500">
          SHOPPER
        </h1>
      </section> 
      <section className="list-button">
        <ul className="flex gap-4">
          <li className="text-[1.1rem] font-semibold text-red-500 cursor-pointer">
            HOME
          </li>
          <li className="text-[1.1rem] font-semibold text-red-500 cursor-pointer">
            PROMOTION
          </li>
          <li className="text-[1.1rem] font-semibold text-red-500 cursor-pointer">
            NOTIFICATION
          </li>
          <li className="text-[1.1rem] font-semibold text-red-500 cursor-pointer">
            BASKET
          </li>
          <li className="text-[1.1rem] font-semibold text-red-500 cursor-pointer">
            PROFILE
          </li>
        </ul>
      </section>
      <section className="authentication flex gap-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold">
          LOGIN
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold">
          SIGN UP
        </button>
      </section>    
    </nav>
  );
}