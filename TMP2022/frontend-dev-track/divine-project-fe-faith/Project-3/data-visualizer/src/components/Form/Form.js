import { useContext, useState } from "react";
import Store from "../../store/store-context";
import "./Form.css";
import FormDetail from "./FormDetail";

const Form = () => {
  const { error, loading } = useContext(Store);
  const [active, setActive] = useState(false); 

  const toggleHandler = () => {
    setActive((prevState) => !prevState);
  };

  const deactivate = () => {
    setActive(false);
  };

  return (
    <>
      {!loading && !error && (
        <div className="nav-pointer" onClick={toggleHandler}></div>
      )}
      {active && <FormDetail deactivate={deactivate} />}
    </>
  );
};

export default Form;
