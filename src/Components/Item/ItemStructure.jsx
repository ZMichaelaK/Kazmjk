import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import CartStructure from "../Cart/CartStructure";
import AddItemToCart from "../Cart/AddItemToCart";

function ItemStructure(props) {
  const [isInCart, setIsInCart] = useState("");
  const [carts, setCarts] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  const handleEdit = () => {
    navigate("/update/" + props.itemId);
  };

  function deleteItem() {
    axios
      .delete("http://localhost:8085/item/delete/" + props.itemId)
      .then((response) => {
        props.getItems();
      })
      .catch((err) => console.error(err));
  }

  function addToCart() {
    // axios.post("http://localhost:8085/cart/create",{
    // isInCart,
    // id:{id: params.id}
    // })
    // .then((response) => {
    //     console.log(response);
    //     setIsInCart("");
    // })
    // .catch((err) => console.error(err));
  }

  const newCart = [];
  for (let cart of carts) {
    newCart.push(
      <CartStructure
        key={cart.isInCart}
        id={cart.id}
        isInCart={cart.isInCart}
        itemName={cart.itemName}
        quantity={cart.quantity}
        price={cart.price}
      />
    );
  }

  return (
    <div>
      <div style={{ marginLeft: "20px", maxWidth: "100%" }} className="col">
        <div className="card">
          <img src={props.imageUrl} className="card-img-top" alt="house" />
          <div
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "20px",
            }}
            className="card-body"
          >
            <h5 className="card-title">{props.itemName}</h5>
            <div className="card-text">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{props.itemDescription}</li>
                <li className="list-group-item">£{props.price}</li>
                <li className="list-group-item">Quantity: {props.quantity}</li>
              </ul>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <AddItemToCart />
                </li>
                <li className="list-group-item">
                  <button
                    style={{ marginLeft: "10px", maxWidth: "100%" }}
                    className="btn btn-primary "
                    onClick={handleEdit}
                  >
                    Edit Item
                  </button>
                </li>
                <li className="list-group-item">
                  <button
                    style={{ marginLeft: "10px", maxWidth: "100%" }}
                    className="btn btn-danger "
                    onClick={deleteItem}
                  >
                    Delete Item
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>{newCart}</div>
    </div>
  );
}

export default ItemStructure;
