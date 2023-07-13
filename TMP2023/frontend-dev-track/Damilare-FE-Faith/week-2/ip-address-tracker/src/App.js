import bg from "./images/pattern-bg-desktop.png";
import "leaflet/dist/leaflet.css";
import arrow from "./images/icon-arrow.svg";
import { useState } from "react";
import Map from "./components/Map";

function App() {
  const [inputAddress, setInputAddress] = useState("8.8.8.8");
  const [resAddress, setResAddress] = useState(null);
  const getApiData = async () => {
    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_qKUYdN2vubVZwknKeYJio01Oi7JOU&ipAddress=${inputAddress}`
      );
      const data = await response.json();
      setResAddress(data);
      console.log("fetch");
    } catch (error) {
      console.log(error);
    }
  };

  useState(() => {
    getApiData();
    setInputAddress("");
  }, []);

  // console.log(resAddress.ip)
  const handleSubmit = (e) => {
    e.preventDefault();
    getApiData();
    setInputAddress("");
    console.log(inputAddress);
  };

  return (
    <div>
      <header className="flex flex-col justify-center  ">
        <div>
          <img
            className="w-full py-4 h-72 md:h-80 object-cover absolute  "
            src={bg}
            alt="header background"
          />
        </div>
        <div className="py-8 relative w-full  ">
          <h2 className="text-white font-Rubik text-[14px] mb-4 md:text-xl text-center lg:text-4xl  font-bold">
            IP Address Tracker
          </h2>
          <form
            onSubmit={handleSubmit}
            className=" flex justify-center sm:max-w-[50%] md:max-w-xl mx-auto "
          >
            <input
              type="text"
              placeholder="search for any IP address or domains"
              className="py-2 px-3 text-[] rounded-l-lg outline-none md:w-full "
              value={inputAddress}
              onChange={(e) => setInputAddress(e.target.value)}
            />
            <button className="bg-black p-4 rounded-r-lg " type="submit">
              <img src={arrow} alt=" icon-arrow" />
            </button>
          </form>
        </div>
        {resAddress && (
          <>
            <div className="p-4 relative w-full">
              <div
                className="bg-white relative  rounded-lg p-8 sm:mx-4 md:mx-12 gap-3 text-center grid sm:grid-cols-1  md:grid-cols-2 md:text-left lg:grid-cols-4  "
                style={{
                  zIndex: 99000,
                }}
              >
                <div className=" md:border-r-4">
                  <h2 className="text-custom_dark_gray mb-4  font-bold text-[14px] uppercase tracking-wider ">
                    Ip Address
                  </h2>
                  <p className="text-custom_v_dark_gray font-semibold sm:text-[18px] md:text-xl tracking-wider">
                    {resAddress.ip}
                  </p>
                </div>
                <div className="  md:border-r-4  ">
                  <h2 className="text-custom_dark_gray font-bold mb-4 text-[14px] uppercase tracking-wider ">
                    Location
                  </h2>
                  <p className="text-custom_v_dark_gray   tracking-wider  font-bold sm:text-[18px]   md:text-xl ">
                    {resAddress.location.region}, {resAddress.location.city}{" "}
                    {resAddress.location.postalCode}
                  </p>
                </div>
                <div className=" md:border-r-4">
                  <h2 className="text-custom_dark_gray mb-4 font-semibold text-[14px] uppercase tracking-wider ">
                    Timezone
                  </h2>
                  <p className="text-custom_v_dark_gray tracking-wider  font-bold sm:text-[18px]   md:text-xl   ">
                    UTC{resAddress.location.timezone}
                  </p>
                </div>
                <div className=" ">
                  <h2 className="text-custom_dark_gray mb-4 font-semibold text-[14px] uppercase tracking-wider ">
                    ISP
                  </h2>
                  <p className="text-custom_v_dark_gray tracking-wider  font-bold sm:text-[18px]   md:text-xl   ">
                    {resAddress.isp}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </header>
      <section className="mt-[-50px]  ">
        {resAddress && (
          <>
            <Map lat={resAddress.location.lat} lng={resAddress.location.lng} />
          </>
        )}
      </section>
    </div>
  );
}

export default App;
