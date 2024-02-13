import { createSlice } from "@reduxjs/toolkit";



// createSlice is function which take input for configuration

const cartSlice= createSlice({
    name: 'cart',

    initialState:{
        items:[]
    },

    //What is action and what is reducer according it will work
    // actions like apis to communicate with redux store
    //It will modify state based on action hence take two parameters (addItem)
    reducers: {
        addItem :(state, action)=>{

            state.items.push(action.payload);

        },
        
        removeItem:(state)=>{
            state.items.pop();
        },

        clearCart:(state)=>{

            state.items.length = 0;
        },

    },

});

// {
//     actions:{
//         addItem
//     },
//     reducer:{

//     }
// }

// We will export two things action and reducers

//What actions that we have to export that we have put inside {}
export const {addItem, removeItem , clearCart} =cartSlice.actions;

export default cartSlice.reducer;