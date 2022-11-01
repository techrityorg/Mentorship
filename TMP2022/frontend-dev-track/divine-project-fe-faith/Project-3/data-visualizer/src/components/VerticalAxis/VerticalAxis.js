import "./VerticalAxis.css";
import React, { useContext } from "react";
import Store from "../../store/store-context";

const VerticalAxis = () => {
  const { v_metrics } = useContext(Store);

  const metrics = v_metrics.map((el, i) => (
    <div style={{ height: `${el.Ypercent}%` }} key={i}>
      {el.V}
    </div>
  ));

  return (
    <div className="vertical_metrics">
    {metrics}
    </div>
  );
};

export default VerticalAxis;
