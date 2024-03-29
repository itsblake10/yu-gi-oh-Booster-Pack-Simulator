import "./ItemCard.css";

const ItemCard = ({ item }) => {
  return (
    <li className="booster__cardlist-item">
      <img
        className="booster__cardlist-image"
        src={item.cardImage}
        alt={item.name}
      />
    </li>
  );
};

export default ItemCard;
