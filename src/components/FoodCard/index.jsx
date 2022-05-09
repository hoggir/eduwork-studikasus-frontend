import './index.css';

function FoodCard({ food }) {
  //console.log(food);

  function convertToRupiah(angka) {
    var rupiah = "";
    var angkarev = angka.toString().split("").reverse().join("");
    for (var i = 0; i < angkarev.length; i++)
      if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
    return (
      "Rp. " +
      rupiah
        .split("", rupiah.length - 1)
        .reverse()
        .join("")
    );
  }

  return (
    <div className="col-md-4">
      <div className="card">
        <img
          className="news-img"
          src={`http://localhost:3000/images/products/${food.image_url}`}
          alt=""
        />
        <div className="card-body">
          <h4 className="card-title">{food.name}</h4>
          <p className="card-text">{food.description}</p>
          <div className="tags-wrapper">
          <div className="tags">
            {food.tags.map((value, index) => {
              return <div key={index} className='card-text-tags'><i className="fa fa-tags"></i>{" " + value.name + " "}</div>
            })}
          </div>
          </div>
          <p className="card-text">{convertToRupiah(food.price)}</p>
          <button className="btn btn-primary"><i className="fa fa-cart-plus"></i></button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
