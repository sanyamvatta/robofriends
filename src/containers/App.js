import React,{useState,useEffect} from "react"
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from "../components/ErrorBoundary";




function App() {

  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchField] = useState('');

  const onSearchChange=(e)=>{
    setSearchField(e.target.value);
  }

  const filteredRobots = robots.filter(robot=>{
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  }
  )

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
      res.json().then((data)=>{ setRobots(data) })
    })
  },[])

  return !robots.length ? <h1>Loading...</h1> : (
        <div className="tc">
          <h1 className="f1 white">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots}/>
            </ErrorBoundary>
          </Scroll>
        </div>
      )
}
    


export default App