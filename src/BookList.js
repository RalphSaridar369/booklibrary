import React, { Component } from 'react';
import BookCard from './BookCard';

const BookList = (props) => {
    return (
      <div className="list">
        {
          props.books.map((book, i) => {

              return <BookCard 
                key={i}
                book={book}
                image={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                published={book.volumeInfo.publishedDate} 
                authors={book.volumeInfo.authors}
                link={book.accessInfo.pdf.acsTokenLink}
                change={props.change} />
                
              
          })
        }
      </div>
    );
}

export default BookList;
