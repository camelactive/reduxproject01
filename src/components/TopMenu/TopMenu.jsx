import {NavLink} from "react-router-dom"
import "./TopMenu.css"
const TopMenu = () => {
  return (
    <div className="TopMenu">
        <h2>TopMenu</h2>
        <div className="TopMenu__links">
            <NavLink to=".">Main</NavLink>
            <NavLink to="/create_item">CreateItem</NavLink>
            <NavLink to="/list_items">ListItems</NavLink>
        </div>
    </div>
  )
}

export default TopMenu