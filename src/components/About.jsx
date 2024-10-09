import sitae from "../assets/img/sitae2.png";
import silux from "../assets/img/silux.png";

function About() {
  return (
    <>
      <section className="content-section" id="about">
        <div className="container">
          <h2>Sobre Nosotros</h2>

          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={sitae}
              alt={"Semillero Sitae"}
              className="community-image"
            />
            <p className="community-content text-md about-element">
              El semillero de investigación SITAE (Semillero de Investigación en
              Trabajo Social y Estudios de la Conciencia) de la Universidad
              Francisco de Paula Santander (UFPS) se dedica al estudio de las
              comunidades y la conciencia humana, con un enfoque especial en las
              comunidades indígenas. A través de diversos proyectos
              colaborativos, SITAE ha logrado llevar sus investigaciones a
              eventos regionales y nacionales, promoviendo el intercambio de
              conocimientos y experiencias entre los estudiantes y las
              comunidades. Además, su activa participación en congresos
              académicos no solo eleva la visibilidad de su trabajo, sino que
              también contribuye al desarrollo de nuevas investigaciones en el
              campo del trabajo social, fortaleciendo así el compromiso social y
              académico de la universidad.
            </p>
          </div>
        </div>
        <div className="container mt-2">
          <div style={{ display: "flex", alignItems: "center" }}>
            <p className="community-content text-md about-element">
              Silux, semillero de software libre y programación competitiva, es
              un semillero que tiene dos ramas de enfoque, las cuales son la
              investigativa y la programación competitiva. A lo largo de la vida
              del semillero, nos hemos centrado en construir proyectos que den
              solución a problemáticas cotidianas con el componente de software
              libre. Hemos participado en eventos nacionales e internacionales.
              La programación competitiva es otra rama en la cual hemos estado
              muy activos desde hace 10 años, participando y organizando
              competencias cuyo principal objetivo es desarrollar el componente
              de resolución algorítmica eficiente y el pensamiento
              computacional.
            </p>
            <img
              src={silux}
              alt={"Semillero Silux"}
              className="community-image"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
