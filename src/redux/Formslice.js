import React from 'react'

import { createSlice } from '@reduxjs/toolkit';

const initialState ={

    studentdata:{
    rollno:"",
    enroll:"",
    stdname:"",
    fname:"",
    course:"",
    examheld:"",
    institute:"",
    year:"",
    markst:"",
    marksp:"",
    maxmarkst:"",
    maxmarksp:"",
    subject:"",
    
    
 },addstddata:[] 
};


 export const formdataslice= createSlice({

    name:"formdata",
    initialState,
    reducers:{
        setstddata:(state,action)=>{
            state.studentdata[action.payload.name]=action.payload.value
        },
        adddformdata:(state,action)=>{

            console.log(state);
            console.log(action);
            

           state.addstddata.push(action.payload);
    
        }
    }
 })


 

 export const {setstddata,adddformdata } =  formdataslice.actions;
 export default formdataslice.reducer;
 console.log(adddformdata)




