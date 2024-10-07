export default function CommunityCard({ name, description, imageUrl }) {
  return (
    <div className="community-card">
      <img src={imageUrl} alt={name} className="community-image" />
      <div className="community-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <a href="#" className="btn community-content__btn">
          Conocer más
        </a>
      </div>
    </div>
  );
}
