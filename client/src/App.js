// import Sidebar from "./components/Sidebar";
import Home from "./screens/Home";
import About from "./screens/About.jsx";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";
import { Routes, Route } from "react-router-dom";
import { Screens } from "./components/styles/Screens.styled";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
      {/* <Sidebar /> */}
      <NavBar />
      <Screens>
        <AnimatePresence>
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Screens>
    </>
  );
}

export default App;
