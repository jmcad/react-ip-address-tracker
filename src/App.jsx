import Info from "./components/Info";
import Header from "./components/Header";
import Map from "./components/Map";
import { useEffect, useState } from "react";
import { IpContext } from "./contexts/IPContext";
import axios from "axios";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [ipData, setIpData] = useState({});
  const [position, setPosition] = useState([0, 0]);

  // default location at start
  const getDefault = async () => {
    const response = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_jy7qLz01p7i8f6upsLwwmNbxQHCW0&ipAddress=${searchValue}`
    );
    const data = response.data;
    setIpData(data);
    setPosition([data.location.lat, data.location.lng]);
  };

  useEffect(() => {
    getDefault();
  }, []);

  return (
    <IpContext.Provider
      value={{
        searchValue,
        setSearchValue,
        ipData,
        setIpData,
        position,
        setPosition,
      }}
    >
      <div className="flex-column">
        <Header />
        <Info />
        <Map />
      </div>
    </IpContext.Provider>
  );
}

export default App;
