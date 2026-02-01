import { FaStar } from "react-icons/fa";
import css from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
  return (
    <ul className={css.list}>
      {reviews.map((review, index) => (
        <li key={index} className={css.item}>
          <div className={css.header}>
            <div className={css.avatar}>
              {review.reviewer_name.charAt(0).toUpperCase()}
            </div>
            <div className={css.info}>
              <p className={css.name}>{review.reviewer_name}</p>
              <div className={css.stars}>
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={16}
                    color={i < review.reviewer_rating ? "#FFC531" : "#F2F4F7"}
                  />
                ))}
              </div>
            </div>
          </div>
          <p className={css.comment}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
