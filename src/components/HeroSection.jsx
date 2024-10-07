export default function HeroSection({ title, subtitle, buttonText }) {
  return (
    <section className="hero-section" id="principal">
      <div className="container hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <a href="#historias" className="btn">
          {buttonText}
        </a>
      </div>
    </section>
  );
}
