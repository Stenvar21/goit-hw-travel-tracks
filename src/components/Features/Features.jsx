import css from "./Features.module.css";
import Categories from "../Categories/Categories";

const Features = ({ camper }) => {
  return (
    <div className={css.container}>
      <div className={css.badgesWrapper}>
        <Categories camper={camper} />
      </div>

      <h3 className={css.detailsTitle}>Vehicle details</h3>

      <div className={css.separator}></div>

      <ul className={css.detailsList}>
        <li className={css.detailItem}>
          <span className={css.detailLabel}>Form</span>
          <span className={css.detailValue}>{camper.form}</span>
        </li>
        <li className={css.detailItem}>
          <span className={css.detailLabel}>Length</span>
          <span className={css.detailValue}>{camper.length}</span>
        </li>
        <li className={css.detailItem}>
          <span className={css.detailLabel}>Width</span>
          <span className={css.detailValue}>{camper.width}</span>
        </li>
        <li className={css.detailItem}>
          <span className={css.detailLabel}>Height</span>
          <span className={css.detailValue}>{camper.height}</span>
        </li>
        <li className={css.detailItem}>
          <span className={css.detailLabel}>Tank</span>
          <span className={css.detailValue}>{camper.tank}</span>
        </li>
        <li className={css.detailItem}>
          <span className={css.detailLabel}>Consumption</span>
          <span className={css.detailValue}>{camper.consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default Features;
