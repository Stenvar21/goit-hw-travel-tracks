import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        <Link to="/catalog" className={css.button}>
          View Now
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
