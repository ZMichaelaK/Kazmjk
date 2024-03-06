import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CartStructure(props) {

  const params = useParams();
    return ( 
      <div className="card-body" style={{textAlign: "center"}}>
        <p className="card-title">{props.itemName}</p>
        <p className="card-title">£{props.price}</p>
        <p className="card-title">{props.quantity}</p>
        <button>Quantity +1</button>
        <button>Quantity -1</button>
      </div>
     );
    }


export default CartStructure;