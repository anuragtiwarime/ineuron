import "./App.css";
import Footer from "./components/footer";
import Header from "./components/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import MainSection from "./components/mainsection";
import Cards from "./components/cards";
import Mentor from "./components/mentor";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Aboutus from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
