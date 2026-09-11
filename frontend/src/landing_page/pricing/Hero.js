import React from "react";

function Hero() {
  return (
    <div className="container pt-5 mt-5">
      <div className="row p-5 border-bottom text-center">
        <h2>Charges</h2>
        <h3 className="text-muted fs-5 mt-3">List of all charges and taxes</h3>
      </div>
      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
          <img
            src="/media/images/pricingEquity.svg"
            style={{ width: "120px" }}
          />
          <h1 className="fs-4">Free equity delivery</h1>
          <p className="text-muted fs-6">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="/media/images/intradayTrades.svg" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trade
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            src="/media/images/pricingEquity.svg"
            style={{ width: "120px" }}
          />
          <h1 className="fs-4">Free direct MF</h1>
          <p className="text-muted fs-6">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
