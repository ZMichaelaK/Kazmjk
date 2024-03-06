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
      <div>
      <h1>Cart</h1>
  
      </div>
      <div>
      <CreateCart/>
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
