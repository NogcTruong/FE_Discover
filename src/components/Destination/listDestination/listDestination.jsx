import "./listDestination.css";
import mountain from "../../../assets/img/mountain.jpg";
// import beach from "../../../assets/img/beach.jpg";
// import city from "../../../assets/img/CityAdventure.jpg";
import { useLocation, useNavigate } from "react-router-dom";

const ListDestination = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const planData = location.state?.planData;

  const handleLearnMore = (destination, index) => {
    if (destination) {
      const dayIndex = Math.floor(index / 3);
      navigate("/detailDestination", {
        state: {
          currentDestination: destination,
          allDestinations: planData.selectedTrips,
          currentIndex: index,
          selectedDay: dayIndex + 1,
        },
      });
    } else {
      console.log("No destination data available");
    }
  };

  return (
    <div className="list-destination-container">
      <div className="container">
        <h2 className="card-title">Khám phá kế hoạch du lịch của chúng tôi</h2>
        <div className="card">
          {planData?.selectedTrips?.map((destination, index) => (
            <div className="card-item" key={destination._id}>
              <figure className="card-item-figure">
                <img
                  className="card-item-img"
                  src={destination.image || mountain}
                  alt={destination.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{destination.name}</h2>
                <div className="card-body-item">
                  <span>Loại: </span>
                  <span>{destination.category}</span>
                </div>
                <div className="card-body-item">
                  <span>Địa điểm: </span>
                  <span>{destination.address}</span>
                </div>
                <div className="card-body-item">
                  <span>Giá: </span>
                  <span>{destination.price.toLocaleString()} VNĐ</span>
                </div>
                <button
                  className="btn btn-plan-list"
                  type="submit"
                  onClick={() => handleLearnMore(destination, index)}
                >
                  Tìm hiểu thêm
                </button>
              </div>
            </div>
          ))}
          {/* <div className="card-item">
            <figure className="card-item-figure">
              <img className="card-item-img" src={beach} alt="Travel Image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Explore Our Travel Plans</h2>
              <div className="card-body-item">
                <span>Loại: </span>
                <span>Du lịch</span>
              </div>
              <div className="card-body-item">
                <span>Địa điểm: </span>
                <span>Hòa Vang, Đà Nẵng</span>
              </div>
              <div className="card-body-item">
                <span>Giá: </span>
                <span>1,000,000 VNĐ</span>
              </div>
              <button className="btn btn-plan-list">Tìm hiểu thêm</button>
            </div>
          </div>
          <div className="card-item">
            <figure className="card-item-figure">
              <img className="card-item-img" src={city} alt="Travel Image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Explore Our Travel Plans</h2>
              <div className="card-body-item">
                <span>Loại: </span>
                <span>Du lịch</span>
              </div>
              <div className="card-body-item">
                <span>Địa điểm: </span>
                <span>Hòa Vang, Đà Nẵng</span>
              </div>
              <div className="card-body-item">
                <span>Giá: </span>
                <span>1,000,000 VNĐ</span>
              </div>
              <button className="btn btn-plan-list">Tìm hiểu thêm</button>
            </div>
          </div>
          <div className="card-item">
            <figure className="card-item-figure">
              <img
                className="card-item-img"
                src={mountain}
                alt="Travel Image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Explore Our Travel Plans</h2>
              <div className="card-body-item">
                <span>Loại: </span>
                <span>Du lịch</span>
              </div>
              <div className="card-body-item">
                <span>Địa điểm: </span>
                <span>Hòa Vang, Đà Nẵng</span>
              </div>
              <div className="card-body-item">
                <span>Giá: </span>
                <span>1,000,000 VNĐ</span>
              </div>
              <button className="btn btn-plan-list">Tìm hiểu thêm</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ListDestination;
