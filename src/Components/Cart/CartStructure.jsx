function CartStructure(props) {
    return ( 
      <div>
        <p>{props.itemName}</p>
        <p>{props.price}</p>
        <p>{props.quantity}</p>
      </div>
     );
}

export default CartStructure;