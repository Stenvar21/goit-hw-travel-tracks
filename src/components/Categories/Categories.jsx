import {
  BsWind,
  BsCupHot,
  BsDiagram3,
  BsFuelPump,
  BsDroplet,
  BsFire,
} from "react-icons/bs";
import { PiShower, PiTelevisionSimple, PiRadio } from "react-icons/pi";
import { LuMicrowave, LuRefrigerator } from "react-icons/lu";

import css from "./Categories.module.css";

const Categories = ({ camper, limit = null }) => {
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
        icon: <LuRefrigerator size={20} />,
      });
    }

    if (camper.microwave) {
      badges.push({ label: "Microwave", icon: <LuMicrowave size={20} /> });
    }

    if (camper.gas) {
      badges.push({ label: "Gas", icon: <BsFire size={20} /> });
    }

    if (camper.water) {
      badges.push({ label: "Water", icon: <BsDroplet size={20} /> });
    }

    return badges;
  };

  const allBadges = getBadges();

  const visibleBadges = limit ? allBadges.slice(0, limit) : allBadges;

  return (
    <ul className={css.list}>
      {visibleBadges.map((badge, index) => (
        <li key={index} className={css.badge}>
          {badge.icon}
          <span className={css.text}>{badge.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
