import {configureStore} from "@reduxjs/toolkit"
import firstSlice from "./firstSlice"

const store = configureStore({
    reducer:{
        items: firstSlice
    }
})

export default store