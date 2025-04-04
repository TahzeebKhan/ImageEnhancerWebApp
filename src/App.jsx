import React from "react";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 overflow-hidden">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
