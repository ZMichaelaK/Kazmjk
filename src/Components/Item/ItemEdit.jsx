import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
function ItemEdit() {
    const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [items, setItems] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [submittedItem, setSubmittedItem] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8085/item/get/" + params.itemId)
    .then((res) => {
        console.log(res);
        setImageUrl(res.data.imageUrl);
        setItemName(res.data.itemName);
        setItemDescription(res.data.itemDescription);
        setPrice(res.data.price);
        setQuantity(res.data.quantity);
    }).catch(err => console.error(err))
}, []);

  function updateItem (){
    axios.put("http://localhost:8085/item/update/" + params.itemId, {
        itemName,
        itemDescription,
        price,
        quantity,
        items,
        imageUrl
    })
    .then(response => 
        navigate(-1))
    .catch(err => console.error(err))
    }
    return ( 
        <div>
            <h1 style={{textAlign: "center"}}>Items &nbsp;</h1>
      <form style={{margin: "auto", maxWidth: "30%", fontSize: "20px", backgroundColor: "lightBlue", padding: "30px", borderRadius: "10%"}} onSubmit={e => {
        e.preventDefault();
        updateItem();
      }}>
        <label htmlFor="itemName">Item Name: </label>
        <input
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          id="itemName"
          type="text"
          className="form-control"
        />
        <br />
        <label htmlFor="itemDescription">Item Description: </label>
        <input
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
          id="itemDescription"
          type="text"
          className="form-control"
        />
        <br />
        <label htmlFor="itemPrice">Item Price: </label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          id="itemPrice"
          type="text"
          className="form-control"
        />
        <br />
        <label htmlFor="itemQuantity">Item Quantity: </label>
        <input
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          id="itemQuantity"
          type="text"
          className="form-control"
        />
        <br />
        <label htmlFor="imageUrl">Image URL: </label>
        <input
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          id="imageUrl"
          type="text"
          className="form-control"
        />
        <br />
        <button style={{marginLeft: "43%"}} type="submit" className="btn btn-success btn-lg">
          Submit
        </button>
      </form>
      <br />
      <br />

    </div>
     );
}

export default ItemEdit;