import { useState } from "react";
import "./findDestination.css";
import beach from "../../../assets/img/beach.jpg";
import mountain from "../../../assets/img/mountain.jpg";
import city from "../../../assets/img/CityAdventure.jpg";
import { useNavigate } from "react-router-dom";

const FindDestination = () => {
  const [morning, setMorning] = useState("");
  const [afternoon, setAfternoon] = useState("");
  const [evening, setEvening] = useState("");
  const [budget, setBudget] = useState("");
  const [totalDays, setTotalDays] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ morning, afternoon, evening, budget, totalDays });
    navigate("/listDestination");
  };

  const handleMorningChange = (event) => {
    setMorning(event.target.value);
  };

  const handleAfternoonChange = (event) => {
    setAfternoon(event.target.value);
  };

  const handleEveningChange = (event) => {
    setEvening(event.target.value);
  };

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleTotalDaysChange = (event) => {
    setTotalDays(event.target.value);
  };

  return (
    <div className="find-destination">
      <div className="container">
        <form className="search-form" onSubmit={handleSubmit}>
          <section className="destination-search">
            <h2>Find Your Perfect Destination</h2>
            <div className="time-selection">
              <span>Category</span>
              <div className="time-selection-category">
                <div className="time-selection-item">
                  <label>Morning</label>
                  <select value={morning} onChange={handleMorningChange}>
                    <option>Núi</option>
                  </select>
                </div>
                <div className="time-selection-item">
                  <label>Afternoon</label>
                  <select value={afternoon} onChange={handleAfternoonChange}>
                    <option>Biển</option>
                  </select>
                </div>
                <div className="time-selection-item">
                  <label>Evening</label>
                  <select value={evening} onChange={handleEveningChange}>
                    <option>Khu du lịch</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="budget-days">
              <div className="input-info">
                <label>Budget</label>
                <input
                  type="number"
                  placeholder="Enter your budget"
                  value={budget}
                  onChange={handleBudgetChange}
                />
              </div>
              <div className="input-info">
                <label>Total Days</label>
                <input
                  type="number"
                  placeholder="Enter your total days"
                  value={totalDays}
                  onChange={handleTotalDaysChange}
                />
              </div>
            </div>
            <button className="search-button" type="submit">
              Search Destinations
            </button>
          </section>
        </form>
        <div className="recommendations">
          <h2>Recommended Destinations</h2>
          <div className="recommendation fade-in">
            <figure className="recommendation-figure">
              <img src={beach} alt="beach" className="recommendation-img" />
            </figure>
            <div className="recommendation-info">
              <h3>Beautiful Beach</h3>
              <p>Experience the sun and sand at this beautiful beach.</p>
            </div>
          </div>
          <div className="recommendation fade-in">
            <figure className="recommendation-figure">
              <img
                src={mountain}
                alt="mountain"
                className="recommendation-img"
              />
            </figure>
            <div className="recommendation-info">
              <h3>Mountain Retreat</h3>
              <p>Enjoy a peaceful retreat in the mountains.</p>
            </div>
          </div>
          <div className="recommendation fade-in">
            <figure className="recommendation-figure">
              <img src={city} alt="city" className="recommendation-img" />
            </figure>
            <div className="recommendation-info">
              <h3>City Adventure</h3>
              <p>Explore the vibrant life of the city.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindDestination;
