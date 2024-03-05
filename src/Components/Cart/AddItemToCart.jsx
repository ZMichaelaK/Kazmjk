import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

function AddItemToCart() {
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const params = useParams();

    const handleClick = () => {
        axios.post("http://localhost:8085/item/create", {itemName, price, quantity, cart:{id: params.id}})

        .then(response => {
            setItemName("");
            setQuantity("");
            setPrice("");
        })
        .catch(err => console.error(err))
    }
    return ( 
        <div>
            <button style={{marginLeft: "10px", maxWidth: "100%"}} className="btn btn-success" onClick={handleClick} type="submit">Add to Cart</button>
        </div>
     );
}

export default AddItemToCart;