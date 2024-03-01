import CreateItem from "./CreateItem";
import CartPage from "../Cart/CartPage";

function ItemPage() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <CreateItem />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", marginRight: "30px", maxWidth: "600px", border: "3px solid black", padding: "10px" }}>
        <CartPage />
      </div>
    </div>
  );
}

export default ItemPage;
