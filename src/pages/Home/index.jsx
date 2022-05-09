import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";
import FoodCard from "../../components/FoodCard";
import Tagsc from "../../components/Tagsc";

function Home() {
  const FOOD_API = "http://localhost:3000/api/products/";
  const TAGS_API = "http://localhost:3000/api/tags/";
  const [foods, setFoods] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getFoods(FOOD_API);
    getTags(TAGS_API);
  }, []);

  const getFoods = async (API) => {
    await axios.get(API).then((res) => {
      const food = res.data;
      setFoods(food.data);
      //console.log(food.data)
    });
  };

  const getTags = async (API) => {
    await axios.get(API).then((res) => {
      const tag = res.data;
      setTags(tag);
      console.log(tag);
    });
  };

  return (
    <div className="container">
      <div className="tags-wrapper">
        <div className="tags">
          <div>Tags : </div>
          {tags.map((value, index) => {
            return (
              <span key={index} className="card-text-tags">
                <i className="fa fa-tags"></i>
                {" " + value.name + " "}
              </span>
            );
          })}
        </div>
      </div>
      <div className="row all-food">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
}

export default Home;
