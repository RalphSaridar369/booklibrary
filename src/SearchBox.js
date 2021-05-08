import React, { Component } from 'react';


const SearchBox = (props) => {

    return (
        <div className="search-area">
        <form onSubmit={props.result}>
            <input onChange={props.change} placeholder="Search books" type="text"/>
            <button type="submit">Search</button>
            <select defaultValue="sort" onChange={props.sort}>
                <option value="sort" disabled selected>Sort</option>
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
            </select>
        </form>
        </div>
      
    );
}

export default SearchBox;
