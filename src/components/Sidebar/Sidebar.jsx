import { useDispatch, useSelector } from "react-redux";
import {
  BsWind,
  BsCupHot,
  BsDiagram3,
  BsGrid1X2,
  BsGrid,
  BsGrid3X3Gap,
} from "react-icons/bs";
import { PiShower, PiTelevisionSimple } from "react-icons/pi";
import { IoMapOutline } from "react-icons/io5"; // Іконка карти

import {
  changeLocation,
  changeForm,
  toggleEquipment,
  selectLocation,
  selectForm,
  selectEquipment,
} from "../../redux/filters/slice";
import { fetchCampers } from "../../redux/campers/operations";
import { resetCampers } from "../../redux/campers/slice";

import css from "./Sidebar.module.css";
import clsx from "clsx";

const Sidebar = () => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);
  const form = useSelector(selectForm);
  const equipment = useSelector(selectEquipment);

  const handleSearch = () => {
    dispatch(resetCampers());

    const filters = {
      location,
      form,
    };

    equipment.forEach((item) => {
      filters[item] = true;
    });

    dispatch(fetchCampers({ page: 1, limit: 4, ...filters }));
  };

  return (
    <aside className={css.sidebar}>
      <div className={css.block}>
        <label className={css.label}>Location</label>
        <div className={css.inputWrapper}>
          <IoMapOutline className={css.inputIcon} size={20} />
          <input
            type="text"
            className={css.input}
            placeholder="Kyiv, Ukraine"
            value={location}
            onChange={(e) => dispatch(changeLocation(e.target.value))}
          />
        </div>
      </div>

      <div className={css.separator}>Filters</div>

      <div className={css.block}>
        <h3 className={css.title}>Vehicle equipment</h3>
        <div className={css.grid}>
          {[
            { id: "AC", icon: <BsWind size={32} />, label: "AC" },
            {
              id: "automatic",
              icon: <BsDiagram3 size={32} />,
              label: "Automatic",
            },
            { id: "kitchen", icon: <BsCupHot size={32} />, label: "Kitchen" },
            { id: "TV", icon: <PiTelevisionSimple size={32} />, label: "TV" },
            { id: "bathroom", icon: <PiShower size={32} />, label: "Bathroom" },
          ].map((item) => (
            <div
              key={item.id}
              className={clsx(
                css.filterBox,
                equipment.includes(item.id) && css.active,
              )}
              onClick={() => dispatch(toggleEquipment(item.id))}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={css.block}>
        <h3 className={css.title}>Vehicle type</h3>
        <div className={css.grid}>
          {[
            { id: "panelTruck", icon: <BsGrid1X2 size={32} />, label: "Van" },
            {
              id: "fullyIntegrated",
              icon: <BsGrid size={32} />,
              label: "Fully Integrated",
            },
            { id: "alcove", icon: <BsGrid3X3Gap size={32} />, label: "Alcove" },
          ].map((item) => (
            <div
              key={item.id}
              className={clsx(css.filterBox, form === item.id && css.active)}
              onClick={() => dispatch(changeForm(item.id))}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <button className={css.searchBtn} onClick={handleSearch}>
        Search
      </button>
    </aside>
  );
};

export default Sidebar;
