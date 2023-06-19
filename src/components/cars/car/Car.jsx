import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './Car.scss'
import InfoCars from '../carGallery/InfoCars'
import { Link } from "react-router-dom";


const Car = ({ car }) => {
  const [favourite, setFavourite] = useState(false);
  function toggleFavourite() {
    if (favourite == false) {
      let favouriteCars = JSON.parse(localStorage.getItem('favouriteCars'))
      if(!favouriteCars){
         favouriteCars = [];
      }
      favouriteCars.push(car)
      localStorage.setItem('favouriteCars', JSON.stringify(favouriteCars)
      )
    }

    setFavourite((prev) => !prev)
  }

  return (
     <Link to='/infocars' >   <div className="car">
      <div className="imgBox">
        <img src={car.images[0]} alt="" />
        {favourite ? <AiFillHeart className="fillHeart/ icon" onClick={toggleFavourite} /> : <AiOutlineHeart className="icon" onClick={toggleFavourite} />}

      </div>
      <b> <p className="price">{car.price}$</p></b>
      <p className="sameFont">{car.marka}{car.model}</p>
      <p className="sameFont">{car.year} {car.engine} {car.mileAge}</p>
      <p>{car.city}</p>



    </div></Link> 
  );
};

export default Car;
