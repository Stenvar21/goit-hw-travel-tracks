import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import {
  selectCampers,
  selectLoading,
  selectError,
  selectTotal,
} from "../../redux/campers/selectors";
import CamperCard from "../../components/CamperCard/CamperCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  selectLocation,
  selectForm,
  selectEquipment,
} from "../../redux/filters/slice";
import Loader from "../../components/Loader/Loader";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const total = useSelector(selectTotal);

  const location = useSelector(selectLocation);
  const form = useSelector(selectForm);
  const equipment = useSelector(selectEquipment);

  const LIMIT = 4;

  const prevCampersLength = useRef(campers.length);

  useEffect(() => {
    if (campers.length === 0) {
      const filters = { location, form };
      equipment.forEach((item) => {
        if (item === "Automatic") {
          filters.transmission = "automatic";
        } else {
          filters[item] = true;
        }
      });

      dispatch(fetchCampers({ page: 1, limit: LIMIT, ...filters }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    if (campers.length > prevCampersLength.current) {
      if (prevCampersLength.current !== 0) {
        window.scrollBy({ top: 400, behavior: "smooth" });
      }
      prevCampersLength.current = campers.length;
    } else if (campers.length === 0) {
      prevCampersLength.current = 0;
    }
  }, [campers]);

  const handleLoadMore = () => {
    const nextPage = Math.ceil(campers.length / LIMIT) + 1;

    const filters = { location, form };
    equipment.forEach((item) => {
      if (item === "Automatic") {
        filters.transmission = "automatic";
      } else {
        filters[item] = true;
      }
    });

    dispatch(fetchCampers({ page: nextPage, limit: LIMIT, ...filters }));
  };

  const showLoadMore = campers.length < total;

  return (
    <div className={css.container}>
      <Sidebar />

      <div className={css.listWrapper}>
        <ul className={css.list}>
          {campers.map((camper) => (
            <li key={camper.id}>
              <CamperCard camper={camper} />
            </li>
          ))}
        </ul>

        {!isLoading && !error && campers.length === 0 && (
          <p className={css.notFound}>No campers found with these filters.</p>
        )}

        {isLoading && <Loader />}

        {error && <p className={css.error}>Something went wrong! Try again.</p>}

        {!isLoading && showLoadMore && campers.length > 0 && (
          <button className={css.loadMoreBtn} onClick={handleLoadMore}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
