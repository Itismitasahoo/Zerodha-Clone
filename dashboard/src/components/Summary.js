import React, { useEffect, useState } from "react";
import api from "../Axios";

const Summary = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await api.get("/me");
        setUsername(response.data.user.username);
      } catch (error) {
        console.log("Error fetching user:", error);
        setError("Unable to load your account information.");
      }
    };

    getUser();
  }, []);
  return (
    <>
      <div className="username">
        <h6>Hi, {username || "User"}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      {error && (
        <div className="error-overlay">
          <div className="error-popup">
            <div className="error-icon">✕</div>

            <h2>Authentication Unsuccessful</h2>

            <p>{error}</p>

            <button onClick={() => window.location.reload()}>Try Again</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Summary;
