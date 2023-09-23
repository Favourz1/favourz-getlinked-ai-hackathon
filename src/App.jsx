import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Overview from './pages/Overview';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Register from "./pages/Register";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/timeline" element={<Timeline />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/faq" element={<Faq />} /> */}
        <Route path="/*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  )
}

export default App
