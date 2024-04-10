import CardListing from "../CardListing";
import './style.css'



const CardList = ({cards}) => {
  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <CardListing key={index} {...card} />
      ))}
    </div>
  );
}

export default CardList