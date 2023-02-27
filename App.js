import React,{useState} from "react";
import {robots} from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css'


const state ={
  robots: robots ,
  searchfield : ''
}

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield : ''
    }
  }

  onSearchChange=(e)=>{
    this.setState({searchfield: e.target.value})
  }

  render(){
    const filteredRobots = this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    }
    )
    return(
      <div className="tc">
        <h1 className="f1 white">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    )
  }

  componentDidMount(){
    this.setState({robots : robots})
  }
}
export default App