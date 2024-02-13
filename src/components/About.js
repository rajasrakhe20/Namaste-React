import User from "./User";
import UserClass from "./UserClass";
import React, { Component } from "react";
import UserContext from "../utils/UserContext";
//Class based component (about) is created
class About extends Component{

    constructor(props){

        super(props);
        console.log("Parent Constructor");

    }

    componentDidMount(){
        console.log("Parent component mounted");
    }

    render(){

        console.log("Parent Render");
        return(
            <div>
                <h1>This Namste React About Page</h1>
                {/* <User/> */}
    
                <UserClass name="Rajas Rakhe (Class component)" location="Pune"/>
                <div>
                    LoggerUser:
                    <UserContext.Consumer>
                        
                        {({loggedInUser})=>(
                        <h1 className="text-lg font-bold">{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
            </div>
        );
    }
}



// const About = () =>{
//     return(
//         <div>
//             <h1>This Namste React About Page</h1>
//             <User/>

//             <UserClass name="Rajas Rakhe (Class component)" location="Pune"/>
//         </div>
//     );
// };

export default About;