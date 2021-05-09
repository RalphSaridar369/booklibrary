import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './Header';
import Books from './Books';
import Detailed from './Detailed';
import './App.css';

class App extends Component {

    constructor(props){
      super(props);
      this.state={
        data:{
          title:"",
          image:"",
          published:"",
          authors:"",
          subtitle:"",
          description:"",  
          preview:""
        }
      }
    }

    changeData=(title,image,published,authors,subtitle,description,preview)=>{
      this.setState({
        data:{
          title:title,
          image:image,
          published:published,
          authors:authors,
          subtitle:subtitle,
          description:description,
          preview:preview
      }
    })
  }

  render() {
    return (
      <Router>
      <div className="App">
          <Header />
          <Switch>
            <Route exact path="/booklibrary">
              <Books change={this.changeData}/>
            </Route>
            <Route path="/booklibrary/book/:id">
              <Detailed data={this.state.data} />  
            </Route>
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
