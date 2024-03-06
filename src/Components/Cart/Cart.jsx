import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartStructure from "./CartStructure";

function Cart() {
    const [carts, setCarts] = useState([]);
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [items, setItems] = useState([]);
    const params = useParams();

    function getCarts(){
        axios.get("http://localhost:8085/cart/get")
        .then((response) => {
          setCarts(response.data);
        })
        .catch((err) => console.error(err));
      }
    
      useEffect(() => {
        getCarts();
      }, []);

      function getItems() {
        axios
          .get("http://localhost:8085/item/get")
          .then((response) => {
            setItems(response.data);
          })
          .catch((err) => console.error(err));
      }
    
      useEffect(() => {
        getItems();
      }, []);
      
      const newCart = [];
  for (let cart of carts) {
    for (let item of items){
    newCart.push(
      <CartStructure
        key={item.id}
        itemName={item.itemName}
        price={item.price}
        quantity={item.quantity}
        getCarts={getCarts}
        getItems={getItems}
      />
    );
    }
  }

    return ( 
        <div>
            {newCart}
        </div>
     );
}

export default Cart;