import React, { Component } from 'react';
import BookList from './BookList';
import SearchBox from './SearchBox';
import axios from 'axios';

class Books extends Component {

    constructor(props){
        super(props)
        this.state = {
            books: [],
            searchField: '',
            sort: ''
        }
    }
    

    handleSubmit = (e) => {
        e.preventDefault();
        const result= "https://www.googleapis.com/books/v1/volumes?q=" +this.state.searchField+"";
        axios.get(result).then((res)=>{
            const cleanedData = this.cleanData(res);
            this.setState({
                books : [...res.data.items]
            })
            console.log(this.state.books)
        
        });
        
            }

    handleSort=(e)=>{
        this.setState({
            sort : e.target.value
        })
    }

    handleChange = (e) => {
        this.setState({ searchField: e.target.value })
    }

    handleSort = (e) => {
        this.setState({ sort: e.target.value});
    }
    
    cleanData = (data) =>{
        const cleanedData = data.data.items.map((book)=>{
            if(book.volumeInfo.hasOwnProperty('publishedDate') === false){
                book.volumeInfo["publishedDate"] = "0000";
            }
            else if(book.volumeInfo.hasOwnProperty('imageLinks') === false){
                book.volumeInfo["imageLinks"] = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3ANo_image_available.svg&psig=AOvVaw0L1QcvsehUzJeSx6TMwFr3&ust=1611321148790000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDs15uNre4CFQAAAAAdAAAAABAS";
            }
            
            return book;
        })

        return cleanedData;
    }

    render() {
        const sortedBooks = this.state.books.sort((a,b)=>{
            if(this.state.sort ==="Newest"){
                return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))
            }
            
            else if(this.state.sort ==="Oldest"){
                return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))
            }
        })

        return (
            <div className="wrapper">
                <SearchBox change={this.handleChange} result={this.handleSubmit} sort={this.handleSort}/>
                <BookList books={sortedBooks}/>
            </div>
        );
    }
}

export default Books;
