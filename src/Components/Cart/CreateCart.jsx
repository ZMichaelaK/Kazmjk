import axios from "axios";
import { useEffect, useState } from "react";
import CartStructure from "./CartStructure";

function CreateCart() {
    const cartList = [];
    const [carts, setCarts] = useState([]);

    function getCarts(){
        axios.get("http://localhost:8085/cart/get")
        .then((response) => {
            setCarts(response.data)
        })
        .catch(console.log())
    }
    useEffect(() => {getCarts()}, [])

    for (let cart of carts){
        cartList.push(
            <CartStructure
            id={cart.id}
            item={cart.itemId}
            />
        )
    }

    const handleClick = () => {
        axios.post("http://localhost:8085/cart/create")
        .then(response => {getCarts() })
        .catch(err => {console.error(err)})

    }
    return ( 

        <div>
        <div>
            <button onClick={handleClick}>Create New Cart</button>
        </div>

        <div>
            {cartList}
        </div>
        </div>
     );
}

export default CreateCart;