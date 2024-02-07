import "./styles/index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <>
      <div className="wrapper">
        <div className="layout">
          <Sidebar />
          <div className="wrapper-main">
            <Header />
            <main className="main">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
