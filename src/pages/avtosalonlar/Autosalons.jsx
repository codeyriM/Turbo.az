import { useEffect } from 'react'
import Autosalon from '../avtosalonlar/Autosalon.jsx'
import './Autosalons.scss'
import { useState } from 'react'
import {autosalonsData} from '../../data/autosalonsData.js'
export default function Autosalons() {
    const [autosalons, setAutosalons] = useState([])
   useEffect(() => {
    function getAutosalons() {
        setAutosalons(autosalonsData)
    }
    getAutosalons()
   }, [])

    return (
        <div>
              <div className="avtosalonsContainer container">
                {autosalons.map((autosalon, index) => {
                    return <Autosalon key={index} autosalon={autosalon} />

                })}
            </div>
        </div>
    )
}