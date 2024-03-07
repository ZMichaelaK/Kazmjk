import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CartStructure(props) {
  const [quantity, setQuantity] = useState(0);



  const params = useParams();
    return ( 
      <div className="card-body" style={{textAlign: "center", backgroundColor: "lightblue", borderRadius: "10px", padding: "10px", fontWeight: "bold"}}>
        <p className="card-title">{props.itemName}</p>
        <p className="card-title">£{props.price}</p>
        <p className="card-title">Quantity x{props.quantity}</p>
        <button  style={{marginTop: "5px"}}  className="btn btn-success">Quantity +1</button>
        <button  style={{marginLeft: "10px", marginTop: "5px"}} className="btn btn-danger ">Quantity -1</button>
      </div>
     );
    }


export default CartStructure;