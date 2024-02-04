import './App.css'
import Appbar from "./components/Appbar";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import GiftCards from "./components/GiftCards";
import Footer from "./components/Footer";

function App() {

  return (
    <>
        <header>
            <Appbar/>
        </header>
        <main className="container-fluid">
            <Routes>
                <Route path="/" element={(
                    <Home/>
                )}/>
                <Route path="/about-us" element={(
                    <AboutUs/>
                )}/>
                <Route path="/gif-card" element={(
                    <GiftCards/>
                )}/>
            </Routes>
        </main>
        <footer>
            <Footer/>
        </footer>
    </>
  )
}

export default App
