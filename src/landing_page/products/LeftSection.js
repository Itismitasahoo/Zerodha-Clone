import React from "react";
function LeftSection({
  imgURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-6  ">
          <img src={imgURL} />
        </div>
        <div className="col-6 p-5 mt-5 ">
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          {(tryDemo || learnMore) && (
            <div>
              <a href={tryDemo} style={{ textDecoration: "none" }}>
                Try Demo →
              </a>
              <a
                href={learnMore}
                style={{ marginLeft: "50px", textDecoration: "none" }}
              >
                Learn more →
              </a>
            </div>
          )}
          <div className="mt-3">
            <a href={googlePlay}>
              <img
                src="/media/images/googlePlayBadge.svg"
                style={{ width: "150px" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="/media/images/appstoreBadge.svg"
                style={{ width: "150px", marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
