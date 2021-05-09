import React from 'react';
import {Link} from 'react-router-dom';
import download from './img/download.png';

const BookCard = (props) => {

    const Down =()=>{
      return(
        <div className="img-container"><a href={props.link}><img src={download} /></a></div>
      )
    }

    const changing =async()=>{
      await props.change(props.title,props.image,props.published,props.authors,props.book.volumeInfo.subtitle,props.book.volumeInfo.description,props.book.volumeInfo.previewLink);
    }
    
    return (

      <div className="card-container">
        <Link onClick={()=>changing()} to={`booklibrary/book/${props.title}`}><img src={props.image} alt=""/></Link>
        <div className="desc">
            <Link onClick={()=>changing()} style={{textDecoration:'none',color:'black', fontSize:'1.5em'}}  to={`booklibrary/book/${props.title}`}>
              <h2>{props.title}</h2>
            </Link>
            <h3>{props.authors}</h3>
            <p>{props.published}</p>
            {props.link? <Down />:''}
        </div>
      </div>
      
    );
}

export default BookCard;
