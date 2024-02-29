import { useNavigate } from 'react-router-dom';

function ItemStructure(props) {

    const navigate = useNavigate();

    const handleEdit = () =>{
        navigate("/update/" + props.id)

    }

    return ( 
        <div>
               <div style={{marginLeft: "20px"}} className='col'>
            <div className='card'>
            <img src={props.imageUrl} className='card-img-top' alt="house" />
                <div style={{fontWeight: "bold", textAlign: "center"}} className='card-body'>
                    <h5 className='card-title'>{props.itemName}</h5>
                    <div className='card-text'>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>{props.itemDescription}</li>
                            <li className='list-group-item'>£{props.price}</li>
                            <li className='list-group-item'>Quantity: {props.quantity}</li>
                        </ul>
                       
                     <button className='btn btn-primary ' onClick={handleEdit}>Edit Item</button> 
                    </div>
                </div>
            </div>
        </div>
        </div>
     );
}

export default ItemStructure;