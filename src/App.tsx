import NavBar from "@/components/homepage/navBar";
import Intro from "@/components/homepage/introBar";
import Main from "@/components/homepage/main";

function App() {
  return (
    <>
      <header>
        <NavBar />
        <Intro />
      </header>
      <main className="bg-rose-50 h-[100vh] w-screen flex items-center justify-center">
        <Main />
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
