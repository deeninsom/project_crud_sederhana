import './App.css';
import Home from "./page/Home"
import Add_data from './component/Add_data';
import Edit_data from './component/Edit_data';
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './component/Navbar';
import About from './page/About';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="add" element={<Add_data />} />
        <Route path="Update/:id" element={<Edit_data />} />
        <Route path="About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
