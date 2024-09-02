import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Detail from "./pages/Detail";
import Home from "./pages/Hero";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray min-h-screen px-4 py-6 md:px-6 md:py-8 lg:px-8 xl:px-[60px] xl:py-[32px] ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
