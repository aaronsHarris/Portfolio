

import Sidebar from './components/Sidebar';
import Home from './screens/Home'
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
    </Route>
      </Routes>
      </div>
  );
}

export default App;
