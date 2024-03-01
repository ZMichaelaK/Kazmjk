import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function ItemStructure(props) {

    const navigate = useNavigate();

     const handleEdit = () =>{
         navigate("/update/" + props.id)

     }

    function deleteItem (){
        axios.delete("http://localhost:8085/item/delete/" + props.id)
        .then(response => {props.getItems()})
        .catch(err => console.error(err))
        }

    return ( 
        <div>
               <div style={{marginLeft: "20px", }} className='col'>
            <div className='card'>
            <img src={props.imageUrl} className='card-img-top' alt="house" />
                <div style={{fontWeight: "bold", textAlign: "center", fontSize: "20px"}} className='card-body'>
                    <h5 className='card-title'>{props.itemName}</h5>
                    <div className='card-text'>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>{props.itemDescription}</li>
                            <li className='list-group-item'>£{props.price}</li>
                            <li className='list-group-item'>Quantity: {props.quantity}</li>
                        </ul>
                        <br />
                        <button className='btn btn-success '>Add to Cart</button> 
                     <button style={{marginLeft: "10px"}} className='btn btn-primary ' onClick={handleEdit}>Edit Item</button> 
                     <button style={{marginLeft: "10px"}} className='btn btn-danger ' onClick={deleteItem}>Delete Item</button> 
                    </div>
                </div>
            </div>
        </div>
        </div>
     );
}

export default ItemStructure;