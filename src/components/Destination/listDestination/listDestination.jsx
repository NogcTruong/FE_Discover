import "./listDestination.css";
import mountain from "../../../assets/img/mountain.jpg";
// import beach from "../../../assets/img/beach.jpg";
// import city from "../../../assets/img/CityAdventure.jpg";
import { useLocation, useNavigate } from "react-router-dom";

const ListDestination = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const planData = location.state?.planData;

  const handleLearnMore = (destination, index, dayIndex) => {
    if (destination) {
      navigate("/detailDestination", {
        state: {
          currentDestination: destination,
          allDestinations: planData.selectedTrips,
          currentIndex: index,
          selectedDay: dayIndex + 1, // Sử dụng dayIndex được truyền vào
        },
      });
    } else {
      console.log("No destination data available");
    }
  };

  const groupDestinationsByDay = (destinations) => {
    const groups = [];
    if (destinations) {
      for (let i = 0; i < destinations.length; i += 3) {
        groups.push(destinations.slice(i, i + 3));
      }
    }
    return groups;
  };

  const groupedDestinations = groupDestinationsByDay(planData?.selectedTrips);


  return (
    <div className="list-destination-container">
      <div className="container">
        <h1 className="card-title">Khám phá kế hoạch du lịch của chúng tôi</h1>
        {groupedDestinations.map((group, dayIndex) => (
          <div key={dayIndex} className="day-group">
            <h2 className="day-title">Ngày {dayIndex + 1}</h2>
            <div className="card">
              {group.map((destination, index) => (
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
                  onClick={() => handleLearnMore(destination, index, dayIndex)}
                >
                  Tìm hiểu thêm
                </button>
              </div>
            </div>
          ))}
        </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListDestination;
