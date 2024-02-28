import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardBody } from "react-bootstrap";
import DisplayItem from "./DisplayItem";

function CreateItem(props) {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [items, setItems] = useState([]);
  const [submittedItem, setSubmittedItem] = useState(null);

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
      .post("http://localhost:3000/Items/create", {
        itemName,
        itemDescription,
        itemPrice,
        itemQuantity,
        items,
      })
      .then((response) => {
        console.log(response);
        setSubmittedItem(response.data); // Store submitted item for display
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
      {submittedItem && (
        <Card className="col-sm-6 col-md-4 col-lg-3 m-4">
          <CardBody className="card-body card-text">
            <h4 className="card-title">{submittedItem.itemName}</h4>
            <p className="card-text">{submittedItem.itemDescription}</p>
            <p className="card-text">Price: £{submittedItem.itemPrice}</p>
            <p className="card-text">Quantity: {submittedItem.itemQuantity}</p>
          </CardBody>
        </Card>
      )}
    </div>
  );
}

export default CreateItem;
