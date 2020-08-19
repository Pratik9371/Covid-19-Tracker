import React from "react";
import "./Cards.css";
import CountUp from "react-countup";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        {/* Cards */}

        <div className="col-md-3">
          <div className="card text-left p-3 card-infected ">
            <div className="card-text text-secondary">Infected</div>
            <div className="card-text">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </div>
            <div className="card-text text-secondary">
              {new Date(lastUpdate).toDateString()}
            </div>
            <div className="card-text">
              Number of active cases from COVID-19.
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-left p-3 card-recovered">
            <div className="card-text text-secondary">Recoverd</div>
            <div className="card-text">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </div>
            <div className="card-text text-secondary">
              {new Date(lastUpdate).toDateString()}
            </div>
            <div className="card-text">
              Number of recoveries cases from COVID-19.
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-left p-3 card-death">
            <div className="card-text text-secondary">Deaths</div>
            <div className="card-text">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </div>
            <div className="card-text text-secondary">
              {new Date(lastUpdate).toDateString()}
            </div>
            <div className="card-text">
              Number of deaths cases from COVID-19.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
