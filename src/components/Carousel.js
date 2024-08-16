import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "content !important" }}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success text-white bg-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src="https://media.istockphoto.com/id/1363407092/photo/two-big-homemade-delicious-cheeseburger-with-onion-grilled-bacon-fresh-tomatoes-cheese-and.jpg?s=2048x2048&w=is&k=20&c=RdZiwv9jW2jLrKxoq14M_8c-v98hBp1ebvqAKjQrve4="
              className="d-block w-100"
              style={{ filter: "brightness(30%" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/157472912/photo/ice-cream-composition-on-a-bowl.jpg?s=2048x2048&w=is&k=20&c=Trm8Wksa3ozWfxSltDFy2DNcFNWTDEqZcRRpPUc5Paw="
              className="d-block w-100 h-60"
              style={{ filter: "brightness(30%" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/2156049876/photo/four-large-pizzas-three-pepperoni-and-one-chicken-on-a-black-table.jpg?s=1024x1024&w=is&k=20&c=hG8wGSahWErUIsjcjcvdsTXIT3K8uBMGJW9aJLmP1T4="
              className="d-block w-100"
              style={{ filter: "brightness(30%" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
