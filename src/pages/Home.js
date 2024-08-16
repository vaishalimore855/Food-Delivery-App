import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuCard from "../components/MenuCard";

const Home = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);
  const [search, setSearch] = useState("");

  const fetchFoodData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      setFoodItems(response[0]);
      setFoodCategories(response[1]);
    } catch (error) {
      console.error("Error fetching food data:", error);
    }
  };

  useEffect(() => {
    fetchFoodData();
  }, []);

  return (
    <div>
      <Navbar />

      {/* Carousel */}
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "content !important" }}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="btn btn-outline-success text-white bg-success"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="https://media.istockphoto.com/id/1363407092/photo/two-big-homemade-delicious-cheeseburger-with-onion-grilled-bacon-fresh-tomatoes-cheese-and.jpg?s=2048x2048&w=is&k=20&c=RdZiwv9jW2jLrKxoq14M_8c-v98hBp1ebvqAKjQrve4="
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/157472912/photo/ice-cream-composition-on-a-bowl.jpg?s=2048x2048&w=is&k=20&c=Trm8Wksa3ozWfxSltDFy2DNcFNWTDEqZcRRpPUc5Paw="
              className="d-block w-100 h-60"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/2156049876/photo/four-large-pizzas-three-pepperoni-and-one-chicken-on-a-black-table.jpg?s=1024x1024&w=is&k=20&c=hG8wGSahWErUIsjcjcvdsTXIT3K8uBMGJW9aJLmP1T4="
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
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

      <div className="container">
        {foodCategories.length > 0 ? (
          foodCategories.map((category) => (
            <div key={category._id} className="row mb-3">
              <div className="fs-3 m-3">{category.CategoryName}</div>
              <hr />
              {foodItems.length > 0 ? (
                foodItems
                  .filter(
                    (item) =>
                      item.CategoryName === category.CategoryName &&
                      item.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((filteredItem) => (
                    <div
                      key={filteredItem._id}
                      className="col-12 col-md-6 col-lg-3"
                    >
                      <MenuCard
                        foodItems={filteredItem}
                        options={filteredItem.options[0]}
                        img={filteredItem.img}
                        description={filteredItem.description}
                      />
                    </div>
                  ))
              ) : (
                <div>No such data found</div>
              )}
            </div>
          ))
        ) : (
          <div>No categories found</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
