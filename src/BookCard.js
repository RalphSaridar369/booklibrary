import React, { Component } from 'react';
import download from './img/download.png';

const BookCard = (props) => {

    const Down =()=>{
      return(
        <div className="img-container"><a href={props.link}><img src={download} /></a></div>
      )
    }
    
    return (

      <div className="card-container">
        <img src={props.image} alt=""/>
        <div className="desc">
            <h2>{props.title}</h2>
            <h3>{props.authors}</h3>
            <p>{props.published}</p>
            {props.link? <Down />:''}
        </div>
      </div>
      
    );
}

export default BookCard;
