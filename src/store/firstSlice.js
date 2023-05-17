import {createSlice} from "@reduxjs/toolkit"
const testPost = {
    name:"name",
    number : 42,
    text:"some text",
    color:"color"
}
const firstSlice = createSlice({
    name: "firstSlice",
    initialState:[testPost,testPost,testPost],
    reducers:{
        createItem(state, action){
            state.push(action.payload.data)
            console.log(action.payload)
        }
    }
})

export const {createItem} = firstSlice.actions

export default firstSlice.reducer