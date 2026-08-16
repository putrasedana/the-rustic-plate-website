import { useLocation, useNavigate, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract current page from pathname
  const getCurrentPage = () => {
    const path = location.pathname.slice(1); // Remove leading slash
    return path || "home";
  };

  const handleNavigate = (page: string) => {
    if (page === "home") {
      navigate("/");
    } else {
      navigate(`/${page}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={getCurrentPage()} onNavigate={handleNavigate} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
