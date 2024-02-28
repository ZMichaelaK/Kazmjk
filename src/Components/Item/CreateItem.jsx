import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayItem from "./DisplayItem";

function CreateItem(props) {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [items, setItems] = useState([]);

  function getItems() {
    axios
      .get("http://localhost:3000/Items/get")
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getItems();
  }, []);

  function createItem() {
    axios
      .post("http://localhost:8082/Items/create", {
        itemName,
        itemDescription,
        itemPrice,
        itemQuantity,
        items,
      })
      .then((response) => {
        console.log(response);
        setItemName("");
        setItemDescription("");
        setItemPrice("");
        setItemQuantity("");
        getItems();
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <h1>Items &nbsp;</h1>
      <form onSubmit={createItem}>
        <label htmlFor="itemName">Item Name: </label>
        <input
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          id="itemName"
          type="text"
          className="form-control"
        />
        <label htmlFor="itemDescription">Item Description: </label>
        <input
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
          id="itemDescription"
          type="text"
          className="form-control"
        />
        <label htmlFor="itemPrice">Item Price: </label>
        <input
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
          id="itemPrice"
          type="text"
          className="form-control"
        />
        <label htmlFor="itemQuantity">Item Quantity: </label>
        <input
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
          id="itemQuantity"
          type="text"
          className="form-control"
        />
        <br />
        <button type="submit" className="btn btn-success btn-md">
          Submit
        </button>
      </form>
      <br />
      <br />
      <createItem items={items} />
    </div>
  );
}

export default CreateItem;
