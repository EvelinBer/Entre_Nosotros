import { Link } from "react-router-dom";

export default function CommunityCard({ name, description, imageUrl, slug }) {
  return (
    <div className="community-card">
      <img src={imageUrl} alt={name} className="community-image" />
      <div className="community-content">
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div>
          <Link to={slug} className="btn community-content__btn">
            Conocer más
          </Link>
        </div>
      </div>
    </div>
  );
}
