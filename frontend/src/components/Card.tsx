import React from 'react'
import "./Card.css"


interface rating{
  stars:number,
  comment:string
}
type cardata=
{
  name:string,
  brand:string,
  seats:number,
  fuel:string,
  milage:number,
  location:string,
  priceBuy:number | null,
  priceRent:number | null,
  carNo:string,
  YearOfManufacture:number,
  description:string,
  owner:string,
  isRented:boolean,
  image:string[],
  Rating:rating
}







const Card = (props:cardata) => {
  return (
    <div id='cardBody'>
      <div id="cardImg"><img src={props.image[0]} alt={props.name} /></div>
      <div id="nameCar">{props.name}</div>
      <div id="description">
        <div id="rating">
          <div>{'⭐'.repeat(props.Rating.stars)}</div>
          <div>{props.Rating.comment}</div>
        </div>
        <div id="carLocation">{props.location}</div>
        <div id="CardSpecification">{props.description}</div>
        {props.priceBuy === null ? (
          <div id="cardRentPrice">{`Rent: ${props.priceRent}`}</div>
        ) : (
          <div id="cardBuyPrice">{`Buy: ${props.priceBuy}`}</div>
        )}
        <div id="learnMore">Learn More</div>
      </div>
    </div>
  )
}

export default Card