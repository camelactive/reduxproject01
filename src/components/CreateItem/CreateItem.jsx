import "./CreateItem.css"
import {useDispatch} from "react-redux"

import {createItem} from "../../store/firstSlice"
import { useState } from "react"

const CreateItem = () => {
const dispatch = useDispatch()
const [createItemData,setCreateItemData] = useState({name:"",number:"",text:"",color:""})
const createItemFunc = () => {
    if (createItemData.color === "default" || createItemData.color === "") {
        alert("Chose your color")
        
    }
    else {
        dispatch(createItem({data:createItemData}))
    }
  
}

  return (
    <div className="CreateItem"> 
        <div>CreateItem</div>
        <form action="submit" className="CreateItem__form"> 
        <label className="CreateItem__form_label" value={createItemData.name} onChange={(e)=>{setCreateItemData({...createItemData,name:e.target.value})}}> Name
            <input type="text"/>
        </label>
        <label className="CreateItem__form_label" value={createItemData.number} onChange={(e)=>{setCreateItemData({...createItemData,number:e.target.value})}}> number
            <input type="number"/>
        </label>
        <label className="CreateItem__form_label"value={createItemData.text} onChange={(e)=>{setCreateItemData({...createItemData,text:e.target.value})}}> textarea
            <textarea/>
        </label>
        <label className="CreateItem__form_label" value={createItemData.color} onChange={(e)=>{setCreateItemData({...createItemData,color:e.target.value})}}> color
            <select name="select">
                <option value="default">choose color</option>
                <option value="red" className="redOption">red</option>
                <option value="green" className="greenOption">green</option>
                <option value="blue" className="blueOption">blue</option>
            </select>
        </label>
        </form>
        <button className="readyBtn" onClick={createItemFunc}>ready</button>
    </div>
  
  )
}

export default CreateItem