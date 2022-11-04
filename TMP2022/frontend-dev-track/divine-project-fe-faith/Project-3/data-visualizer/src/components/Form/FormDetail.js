import React, { useContext, useRef, useState } from "react";
import { UPDATE_USER_RANGE } from "../../lib/types";
import Store from "../../store/store-context";
import "./Form.css";

const FormDetail = (props) => {
  const { storeUpdate } = useContext(Store);
  const minRef = useRef();
  const maxRef = useRef();
  const [error, setError] = useState({ data: false, message: "" });

  const submitHandler = () => {
    const minVal = +minRef.current.value;
    const maxVal = +maxRef.current.value;

    // if minimum number is greater thn max number -reject
    if (minVal >= maxVal) {
      setError({ data: true, message: "max number must be greater" });
      return;
    }

    // empty string == reject
    if (!maxRef.current.value.trim() || !minRef.current.value) {
      setError({ data: true, message: "input valid number" });
      return;
    }

    // when min and max are in range of -10000 to 10000 -- valid
    if (
      minVal >= -10000 &&
      minVal <= 10000 &&
      maxVal >= -10000 &&
      maxVal <= 10000
    ) {
      setError({ data: false, message: "" });
      storeUpdate({
        type: UPDATE_USER_RANGE,
        userRangeObj: { min: minVal, max: maxVal },
      });
      maxRef.current.value = minRef.current.value = "";
      props.deactivate(); // remove form when conditons are met
      return;
    }

    // any absurd input -- reject
    else {
      setError({
        data: true,
        message: "must be less than -10,000 and greater than 10000",
      });
      return;
    }
  };

  return (
    <div className="form">
      <div className="form-main">
        <h1 className="form-header">Input min and max number </h1>
        <p className="form-nb">
          minimum number from -10,000 to max-number of 10,000
        </p>
        <div className="form-detail">
          <div>
            <label htmlFor="min">Min:</label>
            <input
              type="number"
              id="min"
              placeholder="Type a number"
              autoComplete="off"
              ref={minRef}
              // onInput={(e) => (e.target.value = e.target.value.slice(0, 6))}
            />
          </div>
          <div>
            <label htmlFor="min">Max:</label>
            <input
              type="number"
              id="max"
              placeholder="Type a number"
              autoComplete="off"
              ref={maxRef}
              // onInput={(e) => (e.target.value = e.target.value.slice(0, 5))}
            />
            {error.data && <div className="error">{error.message}</div>}
          </div>
        </div>
        <button type="submit" className="submit-btn" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormDetail;
