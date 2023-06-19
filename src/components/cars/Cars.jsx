import Car from "./car/Car"
import './Cars.scss'
import Filter from '../filter/Filter.jsx'
import { carsData } from '../../data/carsData.js'
import { useEffect, useState } from "react"


export default function Cars() {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        const getCarsData = () => {
            setCars(carsData)
        };
        getCarsData()
    }, [])

    return (
        <div className="container">
            <Filter cars={cars} />
            <div className="cars">
                {cars.map((car, index) => {
                    return <Car key={index} car={car} />
                })}
            </div>
        </div>

    )
}