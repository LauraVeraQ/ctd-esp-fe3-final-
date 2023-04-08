
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
// import { useCallback, useMemo, useState } from "react";
import Layout from "./Components/Layout";
import { GlobalContextProvider } from "./Components/utils/context";



function App() {
  // const [theme, setTheme] = useState(themes.light)
  // const handleChangeTheme = useCallback(() => {
  //   if (theme === themes.dark) setTheme(themes.light)
  //   if (theme === themes.light) setTheme(themes.dark)
  // },[theme])
  // const providerValue = useMemo(()=>({theme,handleChangeTheme}),[theme,handleChangeTheme])
  return (
    <div className="App">
      <GlobalContextProvider>
        <BrowserRouter>
          <Layout>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/detail/:id" element={<Detail/>}></Route>
              <Route path="/favorites" element={<Favs/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
          </Layout> 
        </BrowserRouter>
        <Footer/>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
