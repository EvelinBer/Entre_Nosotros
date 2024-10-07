export default function Header() {
  return (
    <header className="navbar">
      <div className="container">
        <a href="#" className="logo">
          <i className="fas fa-users logo-icon"></i>
          Entre Nosotros
        </a>
        <nav>
          <ul className="nav-menu">
            <li>
              <a href="#principal" className="active">
                Principal
              </a>
            </li>
            <li>
              <a href="#historias">Historias</a>
            </li>
            <li>
              <a href="#ubicaciones">Ubicaciones</a>
            </li>
            <li>
              <a href="#about">Sobre Nosotros</a>
            </li>
            <li>
              <a href="#noticias">Noticias</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
