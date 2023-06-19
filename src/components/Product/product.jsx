import { useState } from "react"
import './product.scss'

export default function Product({ id, product }) {
    const [numbers, setNumbers] = useState(0);
    function increase() {
        setNumbers((prev) => prev + 1 )
    }
    function decrease() {
        setNumbers((prev) => prev - 1 )
    }



    return <div className='product' key={id}>
        <div>title: {product.title}</div>
        <div>price: {product.price}</div>
    <div>
        <button onClick={increase}>+</button>
       {numbers < 0 ? <span>Number is negativ</span> : numbers}
        <button onClick={decrease}>-</button>

    </div>

    </div>
}