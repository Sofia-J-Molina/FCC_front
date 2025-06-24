import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Homepage/HomePage";
import { Club } from "./pages/Club/Club";
import { ClubDetail } from "./components/Club/ClubDetail";
import { Activities } from "./pages/Activities/Activities";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/c" element={<Club />} />
          <Route path="/club/:id" element={<ClubDetail />} />
          <Route path="/A" element={<Activities />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

/*          <Route path="/" element={<HomePage />} />
          <Route path="/club/:id" element={<AcademicOfferPage />} />
          <Route path="/activities/:id" element={<UniversityPage />} />*/
