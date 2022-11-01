import { useContext } from "react";
import { UPDATE_USER_RANGE } from "../../lib/types";
import Store from "../../store/store-context";
import "./Refetch.css";

const Refetch = () => {
  const { storeUpdate } = useContext(Store);

  const minRandom = Math.trunc(Math.random() * 15 + 1);
  const maxRandom = 50
  
  // generate random values
  const refetchHandler = () => {
    storeUpdate({
      type: UPDATE_USER_RANGE,
      userRangeObj: { min: minRandom, max: maxRandom },
    });
  };

  return (
    <button className="regenerate" onClick={refetchHandler}>
      Regenerate data
    </button>
  );
};

export default Refetch;
