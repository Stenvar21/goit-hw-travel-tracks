import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { IoMapOutline } from "react-icons/io5";
import clsx from "clsx";
import { fetchCamperById } from "../../redux/campers/operations";
import { selectError } from "../../redux/campers/selectors";
import css from "./CamperDetailsPage.module.css";
import Features from "../../components/Features/Features";
import Reviews from "../../components/Reviews/Reviews";
import BookingForm from "../../components/BookingForm/BookingForm";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const camper = useSelector((state) => state.campers.selectedCamper);
  const isLoading = useSelector((state) => state.campers.loading);
  const error = useSelector(selectError);

  const [activeTab, setActiveTab] = useState("features");

  const [imageModal, setImageModal] = useState(null);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (!imageModal) return;

    const handleEsc = (e) => {
      if (e.code === "Escape") {
        setImageModal(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [imageModal]);

  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
        <h2>Error loading camper!</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (isLoading || !camper) {
    return <div className={css.loader}>Loading details...</div>;
  }

  return (
    <div className={css.container}>
      <div className={css.header}>
        <h2 className={css.title}>{camper.name}</h2>
        <div className={css.subHeader}>
          <div className={css.ratingWrapper}>
            <FaStar className={css.starIcon} />
            <span className={css.ratingText}>
              {camper.rating} ({camper.reviews.length} Reviews)
            </span>
          </div>
          <div className={css.locationWrapper}>
            <IoMapOutline size={20} />
            {camper.location}
          </div>
        </div>
        <div className={css.price}>€{camper.price.toFixed(2)}</div>
      </div>

      <ul className={css.gallery}>
        {camper.gallery &&
          camper.gallery.slice(0, 4).map((image, index) => (
            <li
              key={index}
              className={css.galleryItem}
              onClick={() => setImageModal(image.original)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={image.original}
                alt={camper.name}
                className={css.image}
              />
            </li>
          ))}
      </ul>

      <p className={css.description}>{camper.description}</p>

      <div className={css.tabs}>
        <button
          className={clsx(css.tabBtn, activeTab === "features" && css.active)}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={clsx(css.tabBtn, activeTab === "reviews" && css.active)}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className={css.bottomSection}>
        <div className={css.leftColumn}>
          {activeTab === "features" ? (
            <Features camper={camper} />
          ) : (
            <Reviews reviews={camper.reviews} />
          )}
        </div>

        <div className={css.rightColumn}>
          <BookingForm />
        </div>
      </div>

      {imageModal && (
        <div className={css.modalOverlay} onClick={() => setImageModal(null)}>
          <div className={css.modalContent}>
            <img src={imageModal} alt="Full view" className={css.modalImage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CamperDetailsPage;
