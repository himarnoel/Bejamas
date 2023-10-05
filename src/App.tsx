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
        <Items />
      </div>
    </>
  );
}

export default App;
