
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import { ContextGlobal } from "./Components/utils/global.context";



function App() {
  return (
      <div className="App">
        <BrowserRouter>
        {/* <ContextGlobal.Provider> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/detail/:id" element={<Detail/>}></Route>
          <Route path="/favorites" element={<Favs/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        {/* </ContextGlobal.Provider> */}
        </BrowserRouter>
        <Footer/>
      </div>
  );
}

export default App;
