import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        //Create state variable in class based component
        // In case of functional component we use Hook like useState to create local state variable
        //Here we will use this.state which is a big object which stores all state variable
        this.state = {
            userInfo : {
                name:'Dummy',
                location:'Default',
            }
        };

        console.log(props);

        console.log("Chiild Constructor");
    }

   async componentDidMount(){
        console.log("child component mounted");

        const data = await fetch(" https://api.github.com/users/rajasrakhe20");
        const json = await data.json();

        this.setState({
            userInfo:json,
        })
        console.log(json);
    }

    render() {

        //const {name , location} = this.props;

        //Destrcute the state variables

        //const {count, count2} = this.state;

        const {name, location,avatar_url} = this.state.userInfo;

        console.log("Child Render");

        return(
            <div className="user-card">
                <img src={avatar_url} />
                <h1>{name}</h1>
                <h2>{location}</h2>
                <h4>Contact: rajasrakhe@gmail.com</h4>


                {/* <h1>Count:{count}</h1>
                <button onClick={()=>{
                    {
                        this.setState({
                            count: this.state.count+1
                        });
                    }
                }}>Count Increase</button> */}
                               
        </div>
        );
    }
}

export default UserClass;