import React, { useState } from "react";


const StarRating = () => {
    const [rating,setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const starStyle = ({
        
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            cursor: 'pointer'
          }
          .on = {
            color: 'black',
          }
          .off = {
            color: 'red',
          }
    )
    return (

      <div className="stars">
        {[...Array(5)].map((stars,index) => {        
          index += 1;
          return (       
            <button style={starStyle} type="button" key={index} className={ index<= hover || rating ? "on" : "off"}
            onClick={()=> setRating(index)} index
            onMouseEnter= {() => setHover(index)}
            onMouseLeave = {() => setHover(rating)}
 >
            <span className="star">&#9733;</span>        
            </button> 
          );
        })}
      </div>
    );
  };

  export default StarRating;