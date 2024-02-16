import './style.css'

function CardListing({ name, card_images, type, attribute, desc, atk, def, level , scale, linkval}) {
    const imageUrl = card_images[0].image_url_small;

    return (
    <div className="card">
      <div className="card-image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-info">
        <h2 className='card-name'>{name}</h2>
        <p className='card-level'>{level}</p>
        {linkval ? <p className='card-linkval'>Link Val: {linkval}</p> : <></>}
        {scale ? <p className='card-scale'>Scale: {scale}</p> : <></>}
        <p className='card-type'>Type: {type}</p>
        <p className='card-desc'>{desc}</p>
        <p className='card-attribute'>Attribute: {attribute}</p>
        <div>
            <p className='card-atk'>Atk{atk}</p>
            <p className='card-def'>{def}</p>
        </div>
      </div>
    </div>
  );
}

export default CardListing