import React, { useState } from "react";

function CreateTicket() {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const categories = [
    {
      name: "Account Opening",
      icon: "fa-user-plus",
      links: [
        "Resident individual",
        "Minor ",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      name: "Your Zerodha Account",
      icon: "fa-user",
      links: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "nomination",
        "Transfer and conversion of security",
      ],
    },
    {
      name: "Kite",
      icon: "fa-chart-line",
      links: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      name: "Funds",
      icon: "fa-wallet",
      links: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    },
    {
      name: "Console",
      icon: "fa-chart-pie",
      links: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "segments",
      ],
    },
    {
      name: "Coin",
      icon: "fa-coins",
      links: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Fixed Deposit (FD)",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {/* LEFT SIDE */}
        <div className="col-8">
          {categories.map((category, index) => (
            <div key={category.name}>
              {/* DROPDOWN BOX */}
              <div
                className="support-category d-flex align-items-center justify-content-between"
                onClick={() => toggle(index)}
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <i
                    className={`fa-solid ${category.icon} text-muted me-4 fs-5`}
                  ></i>

                  <span className="fs-5 text-muted">{category.name}</span>
                </div>

                <i
                  className={`fa-solid ${
                    open === index ? "fa-chevron-up" : "fa-chevron-down"
                  } text-muted`}
                ></i>
              </div>

              {/* DROPDOWN LINKS */}
              {open === index && (
                <div className="support-dropdown-links">
                  <ul className="mb-3">
                    {category.links.map((link) => (
                      <li key={link} className="mb-2">
                        <a href="#" className="support-link">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="col-4">
          {/* IMPORTANT UPDATES */}
          <div
            className="p-4 mb-4"
            style={{
              backgroundColor: "#fff4e5",
              borderLeft: "5px solid orange",
            }}
          >
            <ul className="mb-0">
              <li className="mb-3">
                <a href="#" className="support-link">
                  Update on Market timings for Securities Lending and Borrowing
                  Scheme (SLBS)
                </a>
              </li>

              <li>
                <a href="#" className="support-link">
                  Surveillance measure on scrips - September 2026
                </a>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="border">
            <div className="bg-light p-3">
              <h5 className="mb-0 text-muted fs-6">Quick links</h5>
            </div>

            <ol className="list-group list-group-flush">
              <li className="list-group-item p-3">
                <a href="#" className="support-link">
                  Track account opening
                </a>
              </li>

              <li className="list-group-item p-3">
                <a href="#" className="support-link">
                  Track segment activation
                </a>
              </li>

              <li className="list-group-item p-3">
                <a href="#" className="support-link">
                  Intraday margins
                </a>
              </li>

              <li className="list-group-item p-3">
                <a href="#" className="support-link">
                  Kite user manual
                </a>
              </li>

              <li className="list-group-item p-3">
                <a href="#" className="support-link">
                  Learn how to create a ticket
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
