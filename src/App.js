import React, { Suspense, lazy, useEffect, useState } from "react"
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter ,  RouterProvider , Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";

// const heading = React.createElement(
    
//     "h1",
//     {id:"heading"},          
//     "Hello World using React JS"

// ); 

// Here heading is an object

//const root= ReactDOM.createRoot(document.getElementById("root"));

// render method thake an heading object and convert it to html tag that browser undetstand and ddump it into the root.
//root.render(heading);

// JSX is HTML liked syntax not a HTML/XML
//const heading=<h1 className="head">Namste React Js using JSX</h1>;

// For multplie lines JSX put it into the ();
// const heading = (
// <h1 className="head" id="heading">
// Namaste React JS using JSX
// </h1>
// );

// console.log(heading);


//Create react functional component

// const Title = ()=>(
//     <h1 id="heading">Namaste React JS Using JSX</h1>
// );


// const HeadingComponent = () =>(
//     <div className="container">
//         {/* How to use one commponent into another component */}
//         <Title/>
//         <h2 id="head">React functional component is a normal JS Function that return JSX/react element</h2>
//     </div>
// );


const Grocery = lazy(()=>import("./components/Grocery"));

// Create Applayout
const Applayout = () =>{

    const [userName , setUserName] =useState();


    useEffect(()=>{

      //authentication we have done after logging taking data of user like user name

      const data= {
        name:"Rajas Rakhe",
      };

      setUserName(data.name);
    },[]);

    return (

      // Here Provider takes store as prop with appStore as a prop

      <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
          
          <div className="app">
              <Header/>
              <Outlet/>
          </div>

        </UserContext.Provider>

      </Provider>
    
    )
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Applayout />,

    children : [
      {
        path: "/",
        element : <Body/>,

      },

      {
        path: "/about",
        element : <About/>,
    
      },
    
      {
        path: "/contact",
        element : <Contact/>,
    
      },

      {
        path: "/grocery",
        element : <Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>,
    
      },

      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>,

      },

      {
        path: "/cart",
        element: <Cart/>
      },
    

    ],
    errorElement : <Error />

  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

// To render react component into the roor

//Here we have render RouterProvider which provide routing routing configuration to our app
// root.render(<Applayout/>);
root.render(<RouterProvider router = {appRouter}/>)

