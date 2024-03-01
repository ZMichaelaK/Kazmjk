import React from "react";
import CreateItem from "./CreateItem";
import CartPage from "../Cart/CartPage";

function ItemPage() {
  return (
    <div style={{ display: "flex",  }}>
      <CreateItem />
      <CartPage />
    </div>
  );
}

export default ItemPage;
