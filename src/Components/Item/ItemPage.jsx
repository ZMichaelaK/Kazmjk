import CreateItem from "./CreateItem";
import CartPage from "../Cart/CartPage";

function ItemPage() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <CreateItem />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column-reverse" }}>
        <CartPage />
      </div>
    </div>
  );
}

export default ItemPage;
