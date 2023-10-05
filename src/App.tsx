import "./App.css";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Items from "./Components/Items";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className=" mt-4">
        <Navbar />
        <Hero />
        <About />
        <div className="px-2">
          <div className="h-[4px] w-full mt-10 bg-[#E4E4E4]"></div>
        </div>
        <Items />
      </div>
    </>
  );
}

export default App;
