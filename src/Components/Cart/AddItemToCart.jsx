import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

function AddItemToCart() {

  const params = useParams();

  const handleClick = () => {
    //id used to additem to cart should be the sa,e id as the one from creae cart button
    axios
      .patch("http://localhost:8085/item/update/" + params.itemId, {
        //item details
        cart: {id: params.id}
      })

      .then((response) => {
        console.log(response)
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <button
        style={{ marginLeft: "10px", maxWidth: "100%" }}
        className="btn btn-success"
        onClick={handleClick}
        type="submit"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default AddItemToCart;
