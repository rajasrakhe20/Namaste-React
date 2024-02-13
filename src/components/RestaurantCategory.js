import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory =({data, showItems, setShowIndex}) =>{
    console.log(data);

    //Create state variable store the result where menu is clicked or not
    //If clicked then only show itemList otherwise do not show itemList

    //const [showItems, setShowItems] = useState(false);

    const handleClick = ()=>{
        //setShowItems(!showItems);
        setShowIndex();
        
    }

    return (

        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div 
                className="flex justify-between cursor-pointer"
                onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>

                {/* Accordion Body */}
            {showItems && <ItemList items={data.itemCards}/>}
                
            </div>
            
        </div>

    );
};

export default RestaurantCategory;
