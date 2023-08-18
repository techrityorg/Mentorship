import "./App.css";
import { Countdown } from "./components/Countdown";
import { Footer } from "./components/Footer";
import { Social } from "./components/Social";


function App() {
  return (
    <div style={{ backgroundImage: "url(./assets/images/bg-stars.svg)" }}>
      <div className=" min-h-screen relative overflow-hidden flex items-center justify-center font-Red_hat">
        <Countdown future="Fri Jun 30 2023 08:50:23" />
       
      </div>
      <Social />
      <Footer />
    </div>
  );
}

export default App;
