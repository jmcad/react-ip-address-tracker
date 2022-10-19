import React from "react";
import { useContext } from "react";
import { IpContext } from "../contexts/IPContext";

const Info = () => {
  const { ipData } = useContext(IpContext);
  const location = ipData.location?.city + ', ' + ipData.location?.country + ' ' + ipData.location?.postalCode;
  const timezone = ipData.location?.timezone

  return (
    <section>
      <div className="display-container flex">
        <article className="info-container separator">
          <p className="info-label">ip address</p>
          <p className="info-text">{ipData.ip}</p>
        </article>

        <article className="info-container separator">
          <p className="info-label">location</p>
          <p className="info-text">
            {ipData.location?.city !== undefined ? location : ''}
          </p>
        </article>

        <article className="info-container separator">
          <p className="info-label">timezone</p>
          <p className="info-text">{ipData.location?.timezone !== undefined ? 'UTC' + timezone : '' }</p>
        </article>

        <article className="info-container">
          <p className="info-label">isp</p>
          <p className="info-text">{ipData.isp}</p>
        </article>
      </div>
    </section>
  );
};

export default Info;
