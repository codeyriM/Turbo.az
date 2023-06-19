import { useState } from "react";

export default function Clock(props) {
    function showEvent() {
        alert('showEvent')
    }
    function showEventArgument(text) {
        alert(text)
    }
    const [number, setNumber] = useState(1)
    function increase (){
     setNumber(number + 1)

        console.log(number)
    }
    return (

        <div>
            <button onClick={showEvent} >Event</button>
            <button onClick={() => showEventArgument('Argument')}>Event with argument</button>

            <div>
        number: {number}
        <button onClick={increase}>Increase number</button>
            </div>
            {props.time}
        </div>
    )
}