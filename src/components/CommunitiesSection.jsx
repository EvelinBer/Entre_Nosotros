import CommunityCard from "./CommunityCard";
import yukpa from "../assets/img/yukpa.jpg";
import bari from "../assets/img/bari.jpeg";
import uwa from "../assets/img/uwa.jpeg";

export default function CommunitiesSection() {
  return (
    <section className="content-section" id="historias">
      <div className="container">
        <h2>Nuestras Comunidades</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          <CommunityCard
            name="Los Yukpa"
            slug="yukpa"
            description="Conoce más sobre nosotros. Según el Observatorio del Programa Presidencial de Derechos Humanos, su territorio se extiende por la Serranía del Perijá, entre Colombia y Venezuela."
            imageUrl={yukpa}
          />
          <CommunityCard
            name="Los Barí"
            slug="bari"
            description="Este pueblo indígena tiene una población de 5,923 personas, de los cuales 4,931 se encuentran en las comunidades del Catatumbo."
            imageUrl={bari}
          />
          <CommunityCard
            name="Los U'wa"
            slug="uwa"
            description="Conocidos como 'la gente inteligente que sabe hablar', los U'wa son guardianes ancestrales de la Sierra Nevada del Cocuy."
            imageUrl={uwa}
          />
        </div>
      </div>
    </section>
  );
}
