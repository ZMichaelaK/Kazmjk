import CartStructure from "./CartStructure";
import CreateCart from "./CreateCart";
import {useState, useEffect} from "react";
import axios from "axios";
import Cart from "./Cart";

function CartPage() {

  return (
    <div
    >
      <div>
      <div style={{display: "flex", alignItems: "center"}}>
      <h1 style={{textAlign: "center", marginLeft: "250px"}}>Cart</h1>
      <div style={{marginLeft: "50px"}}>
        <br />
      <CreateCart/>
      <br />
      </div>
      </div>
      <div>
      </div>
      <div>
      
      </div>
      <div>
        
      </div>
    </div>
    <div>
      <br />
      <Cart/>
    </div>
    </div>
  );
}

export default CartPage;
