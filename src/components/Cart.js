import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=> {

    // Another way to subscrive store

    // const store =  useSelector((store)=>store);
    // const cardItems = store.cart.items;

    const cardItems = useSelector((store)=>store.cart.items);

    const dispatch =useDispatch();

    const handleClearCart=()=>{

        dispatch(clearCart());
    }

    return( 
        <div className="text-center m-4 p-4">
            <h1 className=" text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-lg"
                onClick={handleClearCart}
                >Clear Cart</button>
                {cardItems.length===0 && <h1>Card is empty. Please add items to your cart!!</h1>}
                <ItemList items={cardItems}/>
            </div>
        </div>

    );
    
};

export default Cart;