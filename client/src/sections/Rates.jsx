import React from "react";

export default function Rates() {
  return (
    <div className="section__container">
      <picture>
        <source
          type="image/webp"
          srcSet="https://lto-moonbase.s3.amazonaws.com/ltomoonbase-banner.webp"
        ></source>
        <source
          type="image/jpg"
          srcSet="https://lto-moonbase.s3.amazonaws.com/ltomoonbase-banner.jpg"
        ></source>
        <img
          className="banner"
          src="https://lto-moonbase.s3.amazonaws.com/ltomoonbase-banner.jpg"
          alt="banner for lto moonbase"
        />
      </picture>
      <header className="rates__header">
        <h2>Leasing Information</h2>
      </header>
      <div className="rates__info grid grid--1x2">
        <div className="card card--secondary">
          <header className="card__header">Payout</header>
          <div className="card_body">
            <p className="rates__text">
              MoonBase Node pays 98% of earned LTO to its leasers. Current node
              fee is 2% to cover server costs.
            </p>
          </div>
        </div>
        <div className="card card--secondary">
          <header className="card__header">Payout Schedule</header>
          <div className="card_body">
            <p className="rates__text">
              Every Saturday MoonBase Node pays out the LTO it's earned from
              blocks on the LTO Blockchain.
            </p>
          </div>
        </div>
        <div className="card card--secondary rates__vip">
          <header className="card__header">
            <div className="vip__header">VIP</div>
          </header>
          <div className="card_body">
            <p className="rates__text">
              Tier 1- Anyone who leases 50,000+ LTO will pay a node fee of 1.75%
            </p>
            <p className="rates__text">
              Tier 2- Anyone who leases 100,000+ LTO will pay a node fee of 1.5%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
