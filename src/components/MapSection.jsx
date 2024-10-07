import mapa from "../assets/img/mapa.png";

export default function MapSection() {
  return (
    <section className="content-section" id="ubicaciones">
      <div className="container">
        <h2>Ubicaciones</h2>
        <div className="map-container">
          <img
            src={mapa}
            alt="Mapa de Norte de Santander"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
