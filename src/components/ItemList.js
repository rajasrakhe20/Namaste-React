import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items})=>{
    //console.log(items);

const dispatch = useDispatch();  //It is a fucntion

const handleAddItem = (item)=>{

    //Didpatch an action on click
    //Create payload object as pass it to the app store reducer
    // {
    //     payload: "pizza",
    // }

    dispatch(addItem(item));

};


    return(
        <div>
            {items.map((item) =>(
                <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">

                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.price? item.card.info.price/100: item.card.info.defaultPrice/100}</span>
                        </div>

                        <p className="text-xs">{item.card.info.description}</p>
                    </div>

                    <div className="w-3/12 p-4">
                        
                        <div className="absolute">
                            <button className="bg-black text-white rounded-lg p-2  shadow-lg" 
                            //onClick={handleAddIntem}
                            //onClick={handleAddIntem(item)}// CALLING A Function straight away wrong writing
                            onClick={()=> handleAddItem(item)}  // I want to use calll back functio hence used this
                            >ADD +</button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} className="w-full"/>
                    </div>
                    

                </div>
            ))}
        </div>
    )
}

export default ItemList;