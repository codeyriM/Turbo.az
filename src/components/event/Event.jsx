import { useState } from "react"



export default function Event() {
    const [number, setNumber] = useState(0);
    function increaseNumber() {
        setNumber((prev) => prev + 1)
    }
    function sayHello() {
        alert('say hello')
    }
    function saySomething(text) {
        alert(text)
    }
    return (
        <div>
            <button onClick={sayHello}>Click</button>
            <button onClick={() => saySomething('react')}>Click2</button><br />
            {number}
            <button onClick={increaseNumber}>Number</button>
            {number > 10 ? <div>More Than 10 </div> : <div>Less Than 10</div> }
            </div>
    )
}