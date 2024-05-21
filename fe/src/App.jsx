import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainLayout from "./layout/MainLayout";
import Home from "./Pages/Home/Home";
import Basket from "./Pages/Basket/Basket";
import Add from "./Pages/Add/Add";
import WishList from "./Pages/WishList/WishList";
import Admin from "./Pages/Admin/Admin";
import Detail from "./Pages/Detail/Detail";
import MainProvider from "./context/MainProvider";
import { HelmetProvider } from "react-helmet-async";

function App() {

  return (
    <>
    <HelmetProvider>
    <MainProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="Basket" element={<Basket />} />
          <Route path="Add" element={<Add />} />
          <Route path="WishList" element={<WishList />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="Detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </MainProvider>
    </HelmetProvider>
    </>
  )
}

export default App
