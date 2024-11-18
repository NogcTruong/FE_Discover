import "./listDestination.css";
import mountain from "../../../assets/img/mountain.jpg";
import beach from "../../../assets/img/beach.jpg";
import city from "../../../assets/img/CityAdventure.jpg";
import { useNavigate } from "react-router-dom";

const ListDestination = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/detailDestination");
  };

  return (
    <div className="list-destination-container">
      <div className="container">
        <h2 className="card-title">Khám phá kế hoạch du lịch của chúng tôi</h2>
        <div className="card">
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
              <button
                className="btn btn-plan-list"
                type="submit"
                onClick={handleLearnMore}
              >
                Tìm hiểu thêm
              </button>
            </div>
          </div>
          <div className="card-item">
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
              <button className="btn btn-plan-list">Learn More</button>
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
              <button className="btn btn-plan-list">Learn More</button>
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
              <button className="btn btn-plan-list">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListDestination;
