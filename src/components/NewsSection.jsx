import CommunityCard from "./CommunityCard";
import feriasImg from "../assets/img/feriascucuta.jpeg";
import estoraquesImg from "../assets/img/estoraques.jpg";
import bioImg from "../assets/img/bio.jpg";

export default function NewsSection() {
  return (
    <section className="content-section" id="noticias">
      <div className="container">
        <h2>Últimas Noticias</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          <CommunityCard
            name="Festival Cultural en Cúcuta"
            description="La capital se prepara para celebrar la diversidad cultural con un evento sin precedentes."
            imageUrl={feriasImg}
          />
          <CommunityCard
            name="Descubrimiento Arqueológico"
            description="Importantes vestigios precolombinos son descubiertos en la región del Catatumbo."
            imageUrl={estoraquesImg}
          />
          <CommunityCard
            name="Protección de la Biodiversidad"
            description="Se lanza un ambicioso programa para conservar la fauna y flora únicas de la región."
            imageUrl={bioImg}
          />
        </div>
      </div>
    </section>
  );
}
