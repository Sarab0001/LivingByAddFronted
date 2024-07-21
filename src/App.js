import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/CategoryM/CategoryM.jsx";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";

function App() {
  <meta
    name="viewport"
    content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
  />;

  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
        {/* <Newsletter /> */}
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
