import React from "react";

function Hero() {
  return (
    <div className="container-fluid bg-light pt-5">
      <div className="container p-5">
        <div className="row">
          <div className="col-8">
            <h1>Support Portal</h1>
          </div>

          <div className="col-4 text-end">
            <button className="btn btn-primary my-ticket-btn">
              My tickets
            </button>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <input
              type="text"
              className="form-control p-3"
              placeholder="Eg: How do I open my account, How do I activate F&O..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
