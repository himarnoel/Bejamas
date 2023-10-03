import "./App.css";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className=" mt-4">
        <Navbar />
        <Hero />
        <About />
      </div>
    </>
  );
}

export default App;
