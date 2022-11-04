import { useState } from "react";
import style from "./Main.module.css";

const Main = () => {
  const [error, setError] = useState(false);

  const errorFunc = () => {
    setError(true);
  };

  return (
    <div className={style.FooterMain}>
      <h1 className={style.title}>
        An enterprise template to ramp up your company website
      </h1>

      <div className={style.footerBtn}>
        <input
          type="email"
          placeholder="Your email address"
          className={style.input}
        />
        <button className={style.btn} onClick={errorFunc}>
          Start Now
        </button>
        {error && (
          <div className={style.error}>
            Oops! Something went wrong while submitting the form.
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
