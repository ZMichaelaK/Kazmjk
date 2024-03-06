import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardBody } from "react-bootstrap";
import DisplayItem from "./DisplayItem";
import ItemStructure from "./ItemStructure";
import { useReward } from "react-rewards";

function CreateItem(props) {
  const {reward: balloonsReward, isAnimating: isBalloonsAnimating} = useReward('balloonsReward', 'balloons');
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [items, setItems] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [submittedItem, setSubmittedItem] = useState([]);

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

  function createItem() {
    axios
      .post("http://localhost:8085/item/create", {
        itemName,
        itemDescription,
        price,
        quantity,
        items,
        imageUrl,
      })
      .then((response) => {
        console.log(response);
        setSubmittedItem(response.data); // Store submitted item for display
        setItemName("");
        setItemDescription("");
        setPrice("");
        setQuantity("");
        setImageUrl("");
        getItems();
        balloonsReward();
      })
      .catch((err) => console.error(err));
  }

  const newItems = [];
  for (let item of items) {
    newItems.push(
      <ItemStructure
        key={item.itemName + "" + item.price}
        itemId={item.itemId}
        imageUrl={item.imageUrl}
        itemName={item.itemName}
        itemDescription={item.itemDescription}
        price={item.price}
        quantity={item.quantity}
        getItems={getItems}
      />
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", justifyContent: "center" }}>
        Items &nbsp;
      </h1>
      <form
        style={{
          margin: "auto",
          fontSize: "20px",
          backgroundColor: "lightBlue",
          padding: "30px",
          borderRadius: "10%",
          maxWidth: "600px",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          createItem();
        }}
      >
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
        <button
          style={{ marginLeft: "43%" }}
          type="submit"
          className="btn btn-success btn-lg"
          disabled={isBalloonsAnimating}
        >
          Submit
        </button>
        <span id="balloonsReward" />
      </form>
      <br />
      <br />
      <div className="row row-cols-4 g-4 mt-1">{newItems}</div>
    </div>
  );
}

export default CreateItem;
