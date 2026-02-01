import { useDispatch, useSelector } from "react-redux";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import css from "./CamperCard.module.css";
import { toggleFavorite, selectFavorites } from "../../redux/favorites/slice";
import Categories from "../Categories/Categories";

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.includes(camper.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(camper.id));
  };

  return (
    <div className={css.card}>
      <div className={css.imageWrapper}>
        <img
          src={camper.gallery[0].thumb}
          alt={camper.name}
          className={css.image}
        />
      </div>

      <div className={css.content}>
        <div className={css.header}>
          <h2 className={css.title}>{camper.name}</h2>
          <div className={css.priceWrapper}>
            <span className={css.price}>€{camper.price.toFixed(2)}</span>

            <button className={css.heartBtn} onClick={handleFavoriteClick}>
              {isFavorite ? (
                <FaHeart size={24} color="#E44848" />
              ) : (
                <FaRegHeart size={24} color="#101828" />
              )}
            </button>
          </div>
        </div>

        <div className={css.subHeader}>
          <div className={css.rating}>
            <FaStar className={css.starIcon} />
            <span className={css.ratingText}>
              {camper.rating} ({camper.reviews.length} Reviews)
            </span>
          </div>
          <div className={css.location}>📍 {camper.location}</div>
        </div>

        <p className={css.description}>{camper.description}</p>

        <Categories camper={camper} limit={7} />

        <Link to={`/catalog/${camper.id}`} className={css.button}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
