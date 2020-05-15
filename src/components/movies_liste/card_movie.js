import React from 'react'
import Description  from '../description'


function CardMovie(props) {
 let x = props.el
    
return (

<div className="card bg-dark  list-content">
            <img src={props.el.img}  className="card-img img-movie" alt ={props.el.name}/>
            <div className="card-img-overlay product-info  ">
              <h5 className="card-title " >{props.el.name} ({props.el.year})</h5>
              <Description movieEl = {props.el} />
              <div>
              <p> {"🌟".repeat(props.el.star)}</p>
             
              
              </div>
              
            </div>
</div>

) ;

}

export default CardMovie