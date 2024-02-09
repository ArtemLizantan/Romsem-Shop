import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Container from "./components/Container/Container";
function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <div className="wrapper-main">
          <Header />
          <main className="main">
            <Container>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Container>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
