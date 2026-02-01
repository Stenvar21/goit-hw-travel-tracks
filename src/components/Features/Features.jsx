import { BsWind, BsCupHot, BsDiagram3, BsFuelPump } from "react-icons/bs";
import { PiShower, PiTelevisionSimple } from "react-icons/pi";
import css from "./Features.module.css";

const Features = ({ camper }) => {
  const getBadges = () => {
    const badges = [];

    badges.push({
      label: camper.transmission,
      icon: <BsDiagram3 size={20} />,
    });

    badges.push({
      label: camper.engine,
      icon: <BsFuelPump size={20} />,
    });

    if (camper.kitchen) {
      badges.push({ label: "Kitchen", icon: <BsCupHot size={20} /> });
    }

    if (camper.AC) {
      badges.push({ label: "AC", icon: <BsWind size={20} /> });
    }

    if (camper.bathroom) {
      badges.push({ label: "Bathroom", icon: <PiShower size={20} /> });
    }

    if (camper.TV) {
      badges.push({ label: "TV", icon: <PiTelevisionSimple size={20} /> });
    }

    return badges;
  };

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {getBadges().map((badge, index) => (
          <li key={index} className={css.badge}>
            {badge.icon}
            <span className={css.text}>{badge.label}</span>
          </li>
        ))}
      </ul>

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
