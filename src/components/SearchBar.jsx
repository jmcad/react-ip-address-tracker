import arrow from "/src/assets/icon-arrow.svg";
import { useContext, useEffect } from "react";
import { IpContext } from "../contexts/IPContext";
import axios from "axios";

const SearchBar = () => {
  const { setIpData, setPosition, setSearchValue, searchValue } =
    useContext(IpContext);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClick = async () => {
    if (searchValue !== "") {
      const response = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_jy7qLz01p7i8f6upsLwwmNbxQHCW0&ipAddress=${searchValue}`
      );
      const data = response.data;
      setIpData(data);
      setPosition([data.location.lat, data.location.lng]);
    }
  };

  return (
    <div>
      <form className="flex">
        <input
          className="search-bar"
          type="search"
          name="ipaddress"
          placeholder="Search for any IP address or domain"
          value={searchValue}
          onChange={handleChange}
        />
        <button className="arrow-btn" type="button" onClick={handleClick}>
          <img src={arrow} alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
