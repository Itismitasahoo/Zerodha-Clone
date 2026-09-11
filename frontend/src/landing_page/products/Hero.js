import React from "react";
function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 p-4">
        <h2 className="mt-5 pt-5">Zerodha Products</h2>
        <h4 className="text-muted mt-3 fs-4">
          Sleek, modern, and intuitive trading platforms
        </h4>
        <p className="mt-3 mb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings →
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Hero;
