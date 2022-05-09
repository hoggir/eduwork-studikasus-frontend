import axios from "axios";
import { useEffect, useState } from "react";

function Tagsc() {
  const TAGS_API = "http://localhost:3000/api/categories/";
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getTags(TAGS_API);
  }, []);

  const getTags = async (API) => {
    await axios.get(API).then((res) => {
      const tag = res.data;
      setTags(tag);
      console.log(tag);
    });
  };

  return (
    <div className="container">
      {tags.map((value) => {
        return (
          <div className="card-text-tags">
            {value.name}
          </div>
        );
      })}
    </div>
  );
}

export default Tagsc;
