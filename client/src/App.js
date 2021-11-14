

import Sidebar from './components/Sidebar';
import Home from './screens/Home'
import About from './screens/About.jsx'
import Projects from './screens/Projects'
import Contact from './screens/Contact'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
      <Sidebar />
    <Routes>
    <Route>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
    </Route>
      </Routes>
      </div>
  );
}

export default App;
