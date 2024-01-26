import './style.css'

function CardListing({ name, card_images, type, attribute }) {
    const imageUrl = card_images[0].image_url_small;

    return (
    <div className="card">
      <div className="card-image">
        <img src={imageUrl} alt="" />
        Potato
      </div>
      <div className="card-info">
        <p>{name}</p>
        <p>{type}</p>
        <p>{attribute}</p>
        <p>x {}</p>
      </div>
    </div>
  );
}

export default CardListing