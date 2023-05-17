import "./ListItems.css"
import {useSelector} from "react-redux"

const ListItems = () => {
    const storeItems = useSelector (state=>state.items)
  return (
    <div className="ListItems">
        <div>ListItems</div>
        <div>{storeItems.map((testArrElement , id) => {
            return (
                <div key={id}>
                    name is {testArrElement.name} N-{testArrElement.number}, text - {testArrElement.text} and color <span className={`${testArrElement.color}Option`}>{testArrElement.color}</span>
                </div>
            )
        })}</div>
        </div>
  )
}

export default ListItems