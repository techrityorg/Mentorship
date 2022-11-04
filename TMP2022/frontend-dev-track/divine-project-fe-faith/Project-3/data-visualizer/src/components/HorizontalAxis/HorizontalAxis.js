import { useContext } from "react";
import Store from "../../store/store-context";
import "./HorizontalAxis.css";

const HorizontalAxis = () => {
  const {x_axis} = useContext(Store);

  const data = x_axis.map((num, i) => <div key={i}>{num}</div>)

  return (
    <div className="horizontal-metrics">
     {data}
    </div>
  );
};

export default HorizontalAxis;
