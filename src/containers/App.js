import React from "react"
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from "../components/ErrorBoundary";

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
    const {robots,searchChange} = this.state
    const filteredRobots = robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    }
    )
    if (!(robots.length)){
      return <h1>Loading...</h1>
    }else{
      return(
        <div className="tc">
          <h1 className="f1 white">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots}/>
            </ErrorBoundary>
          </Scroll>
        </div>
      )
    }
    
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
      res.json().then((data)=>{ this.setState({ robots: data}) })
    })
  }
}
export default App