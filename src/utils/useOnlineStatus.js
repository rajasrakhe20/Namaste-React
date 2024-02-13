import { useEffect, useState } from "react";

const useOnlineStatus = () =>{

    //Local state variable onlineStatus
    // Defualt value is true(Online status)

    const [onlineStatus , setOnlineStatus] = useState(true);

    //Event listener will call only once hence we used useEffect with empty array
    useEffect(()=>{

        // If internet is offline pass false value
        window.addEventListener("offline",()=>{

            setOnlineStatus(false);

        });
        // If internet is online pass true value
        window.addEventListener("online",()=>{

            setOnlineStatus(true);
        });

    },[]);


    //Status of internet user is online or offline
    return onlineStatus;

};

export default useOnlineStatus;