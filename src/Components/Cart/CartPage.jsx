import CartStructure from "./CartStructure";
import CreateCart from "./CreateCart";

function CartPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "3px solid black",
        padding: "10px",
      }}
    >
      <div>
      <h1>Cart</h1>
  
      </div>
      <div>
      <CreateCart/>
      </div>
    </div>
  );
}

export default CartPage;
