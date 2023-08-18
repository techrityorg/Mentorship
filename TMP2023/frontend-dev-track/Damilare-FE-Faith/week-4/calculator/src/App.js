import logo from "./logo.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [screenValue, setScreenValue] = useState("0");
  const [operand, setOperand] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [theme, setTheme] = useState(0);
  const [postion, setPosition] = useState("");

  const handleKeypad = (value) => {
    if (value === "+" || value === "-" || value === "x" || value === "/") {
      setPreviousValue(screenValue);
      setOperand(value);
      setScreenValue("0");
    } else if (value === ".") {
      if (!screenValue.includes(".")) {
        setScreenValue(screenValue + ".");
      }
    } else if (value === "del") {
      setScreenValue(screenValue.slice(0, -1));
    } else if (value === "reset") {
      setScreenValue("0");
      setOperand("");
      setPreviousValue("");
    } else {
      if (screenValue === "0") {
        setScreenValue(value);
      } else {
        setScreenValue(screenValue + value);
      }
    }
  };

  const handleEqual = () => {
    if (operand && setPreviousValue) {
      let result;
      switch (operand) {
        case "+":
          result = parseFloat(previousValue) + parseFloat(screenValue);
          break;
        case "x":
          result = parseFloat(previousValue) * parseFloat(screenValue);
          break;
        case "/":
          result = parseFloat(previousValue) / parseFloat(screenValue);
          break;
        case "-":
          result = parseFloat(previousValue) - parseFloat(screenValue);
          break;

        default:
          break;
      }
      setScreenValue(result.toString());
      setOperand("");
      setPreviousValue("");
    }
  };

  const handleTheme = () => {
    setTheme((prevState) => (prevState + 1) % 3);
    // if (theme === 1) {
    //   setPosition("justify-center");
    // } else if (theme === 2) {
    //   setPosition("justify-end");
    // } else {
    //   setPosition("justify-start");
    // }
  };
  console.log(theme);

  return (
    <div
      className={
        theme === 1
          ? `App theme-2 bg-custom-main h-screen w-full flex justify-center items-center`
          : theme === 2
          ? `App theme-3  bg-custom-main h-screen w-full flex justify-center items-center  `
          : `App   bg-custom-main h-screen w-full flex justify-center items-center  `
      }
    >
      <div className="max-w-max mx-auto ">
        <div className="text-custom-key-white flex justify-between p-3 mt-4">
          <h2 className="text-2xl uppercase text-custom-screen-text font-bold ">
            cal
          </h2>
          <div className="text-sm  flex justify-center items-center gap-4">
            <div className="pt-4 text-custom-screen-text ">Theme</div>
            <div>
              <div className="flex justify-center items-center text-custom-screen-text gap-3">
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </div>
              <div
                onClick={handleTheme}
                className={
                  theme === 1
                    ? `w-16 bg-custom-screen p-1 flex justify-center  items-center rounded-full `
                    : theme === 2
                    ? `w-16 bg-custom-screen p-1 flex justify-end  items-center rounded-full `
                    : `w-16 bg-custom-screen p-1 flex  justify-start items-center rounded-full `
                }
              >
                <div className="w-3 h-3 bg-custom-red rounded-full "></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-custom-screen p-6 rounded-lg text-custom-screen-text text-3xl font-Spartan text-right mb-4">
          {screenValue}
        </div>
        {/* key-start */}
        <div className="bg-custom-keypad grid grid-cols-4 gap-4 p-7 rounded-md font-Spartan ">
          {/* FIRST ROW  */}
          <button className="btn__key  " onClick={() => handleKeypad("7")}>
            7
          </button>
          <button className="btn__key" onClick={() => handleKeypad("8")}>
            8
          </button>
          <button className="btn__key" onClick={() => handleKeypad("9")}>
            9
          </button>
          <button onClick={() => handleKeypad("del")} className="btn__key-2">
            del
          </button>
          {/* SECOND ROW  */}
          <button className="btn__key " onClick={() => handleKeypad("4")}>
            4
          </button>
          <button className="btn__key" onClick={() => handleKeypad("5")}>
            5
          </button>
          <button className="btn__key" onClick={() => handleKeypad("6")}>
            6
          </button>
          <button onClick={() => handleKeypad("+")} className="btn__key">
            +
          </button>
          {/* THIRD ROW  */}
          <button className="btn__key " onClick={() => handleKeypad("1")}>
            1
          </button>
          <button className="btn__key" onClick={() => handleKeypad("2")}>
            2
          </button>
          <button className="btn__key" onClick={() => handleKeypad("3")}>
            3
          </button>
          <button onClick={() => handleKeypad("-")} className="btn__key">
            -
          </button>
          {/* FORTH ROW  */}
          <button className="btn__key " onClick={() => handleKeypad(".")}>
            .
          </button>
          <button className="btn__key" onClick={() => handleKeypad("0")}>
            0
          </button>
          <button onClick={() => handleKeypad("/")} className="btn__key">
            /
          </button>
          <button onClick={() => handleKeypad("x")} className="btn__key">
            x
          </button>
          {/* FIFTY ROW  */}
          <button
            onClick={() => handleKeypad("reset")}
            className="  btn__key-3  bg-custom-blue shadow-key-shadow-blue font-Spartan font-bold text-white "
          >
            reset
          </button>
          <button
            onClick={handleEqual}
            className="  btn__key-3 bg-custom-red text-white shadow-key-shadow-red "
          >
            {" "}
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
