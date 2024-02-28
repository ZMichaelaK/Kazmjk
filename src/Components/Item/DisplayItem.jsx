import { useEffect, useState } from "react";
import DisplayItem from "./DisplayItem";
import CreateItem from "./CreateItem";

function DisplayItems(props) {
  const itemArray = [];
  for (const item of props.items) {
    itemArray.push(
      <CreateItem
        key={item.id}
        itemName={item.name}
        itemDescription={item.description}
        itemPrice={item.price}
        itemQuantity={item.quantity}
        imageUrl={item.imageUrl}
      />
    );
  }

  return (
    <div>
      <h2> A list of items </h2>
      <br />
      <br />
      <div className="container-fluid">
        <div className="row">{itemArray}</div>
      </div>
    </div>
  );
}

export default DisplayItems;
