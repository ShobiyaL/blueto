import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Company from "./pages/Company";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className='  bg-slate-900  min-h-screen px-0 md:px-10'>
      <Header />
      <div className='background-gradient absolute inset-0  max-h-screen' />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/company' element={<Company />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
