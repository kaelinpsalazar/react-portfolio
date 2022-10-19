import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from "./components/Contact";
import Biography from "./components/Biography"
import Projects from "./components/Projects"
import { useState } from "react";


function App() {
  const [currentPage, setCurrentPage] = useState("HomePage");
  function render() {
    if (currentPage === "Biography") {
      return <Biography />;
    } else if (currentPage === "Contact") {
      return <Contact />;
    } else if (currentPage === "Projects") {
      return <Projects />;
    }
  }
  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />
      <div class="renderedData ">{render()}</div>
      <Footer />
    </>
  );
}

export default App;