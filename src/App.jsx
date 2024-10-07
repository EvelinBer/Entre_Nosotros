import "./index.css";
import Header from "./components/Header";
import CommunitiesSection from "./components/CommunitiesSection";
import HeroSection from "./components/HeroSection";
import MapSection from "./components/MapSection";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <HeroSection
        title="Norte de Santander: Un Departamento de Variedad"
        subtitle="Conoce tus raíces y la historia detrás de ellas"
        buttonText="Conocer"
      />
      <MapSection />
      <CommunitiesSection />
      <NewsSection />
      <Footer />
    </>
  );
}

export default App;
