// Restaurant Card Component
// const {resName , cuisine , star , minutes}=props  This is know as de-structing the props
// const RestaurantCard = ({resName , cuisine , star , minutes})

import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    // const {resName , cuisine , star , minutes}=props;
    const { resData } = props;
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,areaName} = resData?.info;

    return(
        <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-50  hover:bg-gray-100">
            <img
            className="res-logo rounded-lg" 
            src={CDN_URL+cloudinaryImageId}/>
            {/* <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.star}</h4>
            <h4>{props.minutes}</h4> */}
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}stars</h4>
            <h4>{areaName}</h4>
        </div>
    );
};

//Here we have created higher order component that take input component
//as a RestuarantCard component and enhance it with promoted feature and return it

export const withPromotedLabel = (RestaurantCard) =>{
    return (props) =>{

        return(
            <div>
                <label className="absolute bg bg-slate-900 text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {... props}/>
            </div>
            
        )

    }
};


export default RestaurantCard;