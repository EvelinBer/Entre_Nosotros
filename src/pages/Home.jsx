import About from "../components/About";
import CommunitiesSection from "../components/CommunitiesSection";
import HeroSection from "../components/HeroSection";
import MapSection from "../components/MapSection";
import NewsSection from "../components/NewsSection";

function Home() {
  return (
    <>
      <HeroSection
        title="Norte de Santander: Un Departamento de Variedad"
        subtitle="Conoce tus raíces y la historia detrás de ellas"
        buttonText="Conocer"
      />
      <MapSection />
      <About />
      <CommunitiesSection />
      <NewsSection />
    </>
  );
}

export default Home;