import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserLoginType} from "../../types/userLoginType.ts";
import {User} from "../../types/userType.ts";

interface UserState{
    loggedIn:boolean,
    user:User
}
const initialState:UserState={
    loggedIn:false,
    user:{
        email:"",
        age:0,
        name:"",
        password:""
    }
}

const userSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        login:(state:UserState, action:PayloadAction<UserLoginType>)=>{
            state.user.name=action.payload.name;
            state.user.email=action.payload.email;
            state.loggedIn=true
        },
        logout:(state:UserState)=>{
            state.loggedIn = false
        },
    }
});

export const {login,logout} = userSlice.actions;
export const userReducer = userSlice.reducer;