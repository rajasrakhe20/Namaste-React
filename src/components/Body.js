import RestaurantCard ,{withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


//Body Component
const Body = () =>{

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant , setfilteredRestaurant] = useState([]);
    const [searchText , setsearchText] = useState("");

    const {loggedInUser , setUserName}=useContext(UserContext);

    console.log("Body Rendered", listOfRestaurant);
    console.log()

    //calling the higher-order component that returns RestaurantCard with promoted label:
     const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {

        const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D18.5204303%26lng%3D73.8567437%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");

        const json = await data.json();

        console.log(json);

        // setListOfRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        // Do Optional Chaining
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus ===false){
        return(
            <h1>You are Offline . Please Check your Connection!!</h1>
        );
    }


    //Conditional Rendering -  rendering based on the condition
    if(listOfRestaurant.length === 0){
        return <Shimmer/>
    }

   

    return(
        <div className="body">
            <div className="filter flex">
                <div className="search p-4 m-4">
                    <input 
                    type="text" 
                    className="search-box border border-solid border-black" 
                    value = {searchText}
                    onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}
                    />
                    <button 
                    className="search-btn px-4 py-2 bg-green-100 m-4 rounded-lg "
                    onClick={()=>{

                        // Implement the filter restaurants cards and update the UI
                        //Search the Text
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurant.filter((res) => 
                        res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        // setListOfRestaurant(filteredRestaurant);
                        setfilteredRestaurant(filteredRestaurant);
                    
                    }}
                    >Search</button>
                </div>

                <div className="search p-4 m-4 flex items-center">
                    <button 
                        className="filter-btn px-4 py-2 bg-gray-100 rounded-lg "
                        onClick = {() => {
                        const filteredList = listOfRestaurant.filter((res) => (
                                res.info.avgRatingString > 4.2
                            ));
                            setListOfRestaurant(filteredList);
                            console.log(filteredList);
                        }}
                        >
                        Top Rated Restaurants
                    </button>

                </div>

                <div className="search p-4 m-4 flex items-center">
                   <label className="m-2">Username</label>
                   <input className="p-2 border border-black"
                   value={loggedInUser}
                   onChange={(e)=>setUserName(e.target.value)}
                   />

                </div>

            </div>

            <div className="res-container flex flex-wrap">

                {/* Passing props to a component = passing argument to a function */}
                {/* <RestaurantCard
                    resData={resObj}
                /> */}
                {/* <RestaurantCard
                resName="KFC Foods"
                cuisine="Pizza , Karve Nagar Road "
                star="3.9"
                minutes="20 Min"
                /> */}
                {
                    filteredRestaurant.map((restaurant) =>
                    <Link key={restaurant.info.id}  to={"/restaurants/"+restaurant.info.id}>
                       {restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant}/> :<RestaurantCard resData={restaurant} />}
                    </Link>)
                }
                
            </div>

        </div>
    )
};

export default Body;