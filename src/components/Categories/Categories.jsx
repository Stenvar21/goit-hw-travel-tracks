import {
  BsWind,
  BsCupHot,
  BsDiagram3,
  BsFuelPump,
  BsDroplet,
  BsFire,
} from "react-icons/bs";
import {
  PiShower,
  PiTelevisionSimple,
  PiRadio,
  PiRefrigerator,
  PiMicrowave,
} from "react-icons/pi";

import css from "./Categories.module.css";

const Categories = ({ camper }) => {
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

    if (camper.radio) {
      badges.push({ label: "Radio", icon: <PiRadio size={20} /> });
    }

    if (camper.refrigerator) {
      badges.push({
        label: "Refrigerator",
        icon: <PiRefrigerator size={20} />,
      });
    }

    if (camper.microwave) {
      badges.push({ label: "Microwave", icon: <PiMicrowave size={20} /> });
    }

    if (camper.gas) {
      badges.push({ label: "Gas", icon: <BsFire size={20} /> });
    }

    if (camper.water) {
      badges.push({ label: "Water", icon: <BsDroplet size={20} /> });
    }

    return badges;
  };

  return (
    <ul className={css.list}>
      {getBadges().map((badge, index) => (
        <li key={index} className={css.badge}>
          {badge.icon}
          <span className={css.text}>{badge.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
