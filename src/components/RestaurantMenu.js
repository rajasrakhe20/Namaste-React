import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";



const RestaurantMenu = () => {

    const {resId} = useParams();

    const [showIndex, setShowIndex] = useState(0);

    const resInfo = useRestaurantMenu(resId);

    console.log(resInfo);


    //Create shimmer UI for restaurant menu 
     if (resInfo === null) return (<Shimmer/>);

     // Destucturing the variables name , cusinies , cost for Two

     const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info; 
     
     const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
     console.log("print items");
     console.log(itemCards);

     console.log( resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

     const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
     //console.log(categories);

  return (
    <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <h3 className="font-bold text-lg">{cuisines.join(",")}</h3>
        <h3>{costForTwoMessage}</h3>
        {/* <h2>Menu</h2> */}
      
        {/* <ul>
        {itemCards.map(item => <li key={item.card.info.id}>
                    {item.card.info.name} -{"Rs. "}  {item.card.info.price/100 || item.card.info.defaultPrice/100}
                </li>)}
        </ul> */}
         <ul>
          {/* Controlled component RestaurantCategory */}
            {categories.map((category, index)=>(
            <RestaurantCategory key={category?.card?.card.title} 
            data={category?.card?.card} 
            showItems={index === showIndex ? true : false}
            setShowIndex={()=>setShowIndex(index)}
            />
          ))}
         </ul>
        
    </div>
  );
};

export default RestaurantMenu;