// import axios from "axios";
// import { useEffect, useState } from "react";
// import "./index.css";
// import FoodCard from "../../components/FoodCard";
// import { useDispatch } from "react-redux";

// function Home() {
//   const FOOD_API = "http://localhost:3000/api/products/";
//   const TAGS_API = "http://localhost:3000/api/tags/";
//   const CATEGORIES_API = "http://localhost:3000/api/categories/";
//   const [foods, setFoods] = useState([]);
//   const [tags, setTags] = useState([]);
//   const [categories, setCategories] = useState([]);

//   const [searchTerm, setSearchTerm] = useState([]);
//   const [searchtag, setSearchtag] = useState("");
//   const [searchCategory, setSearchCategory] = useState([]);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     //panggil action get product
//     getFoods(FOOD_API);
//     getTags(TAGS_API);
//     getCagetories(CATEGORIES_API);
//   }, []);

//   const getFoods = async (API) => {
//     await axios.get(API).then((res) => {
//       const food = res.data;
//       setFoods(food.data);
//       //console.log(food.data);
//     });
//   };

//   const getTags = async (API) => {
//     await axios.get(API).then((res) => {
//       const tag = res.data;
//       setTags(tag);
//       //console.log(tag);
//     });
//   };

//   const getCagetories = async (API) => {
//     await axios.get(API).then((res) => {
//       const cat = res.data;
//       setCategories(cat);
//       //console.log(cat);
//     });
//   };

//   const handleOnchange = (e) => {
//     setSearchTerm(e.target.value);
//     //console.log(e.target.value)
//   };

//   const handleonSubmit = (e) => {
//     e.preventDefault();

//     if (searchTerm) {
//       getFoods(`http://localhost:3000/api/products?q=${searchTerm}`);

//       setSearchTerm("");
//     } else {
//       getFoods(FOOD_API);
//     }
//   };

//   const handleInput = (e) => {
//     setSearchtag(e.target.value);
//     //console.log(searchtag);
//     //console.log(e.target.value);
//     // if (e.target.value == "semua") {
//     //   getFoods(`http://localhost:3000/api/products`);
//     // } else {
//     //   getFoods(`http://localhost:3000/api/products?tags[]=${e.target.value}`);
//     // }
//     if (searchtag == e.target.value) {
//       getFoods(FOOD_API);
//     } else {
//       getFoods(`http://localhost:3000/api/products?tags[]=${e.target.value}`);
//     }
//   };

//   const handleInputCategory = (e) => {
//     setSearchCategory(e.target.value);
//     console.log(e.target.value);
//     //console.log(searchCategory);

//     if (searchCategory == e.target.value) {
//       getFoods(FOOD_API);
//     } else {
//       getFoods(`http://localhost:3000/api/products?category=${e.target.value}`);
//     }
//   };

//   return (
//     <div className="container">
//       <div>
//         <form onSubmit={handleonSubmit} className="searchForm">
//           <input
//             className="form-control"
//             type="search"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={handleOnchange}
//           />
//           <button className="btn btn-primary">Submit</button>
//         </form>
//       </div>

//       <div className="tags-wrapper">
//         <div className="tags">
//           <div className="tags-title">Tags :</div>
//           {/* <button
//             onClick={handleInput}
//             value="semua"
//             className="card-text-tags"
//           >
//             <i className="fa fa-tags"></i>
//             Semua
//           </button> */}
//           {tags.map((data, index) => {
//             return (
//               <button
//                 onClick={handleInput}
//                 value={data.name}
//                 key={index}
//                 className="card-text-tags"
//               >
//                 <i className="fa fa-tags"></i>
//                 {data.name}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       <div className="tags-wrapper">
//         <div className="tags">
//           <div className="tags-title">Category :</div>
//           {categories.map((data, index) => {
//             return (
//               <button
//                 onClick={handleInputCategory}
//                 value={data.name}
//                 key={index}
//                 className="card-text-tags"
//               >
//                 {data.name}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       <div className="row all-food">
//         {foods.map((food) => (
//           <FoodCard key={food._id} food={food} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;
