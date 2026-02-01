import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>404</h1>
      <p className={css.text}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className={css.button}>
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
