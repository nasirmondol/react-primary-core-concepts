import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComments></LoadComments>
     {/* <ExternalUsers></ExternalUsers> */}
    </div>
  )
};

function ExternalUsers(){
  const [users, setUsers] = useState([])
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
        <h3>Users: {users.length}</h3>
        {
          users.map(user => <User name={user.name} email={user.email}></User>)
        }
    </div>
  )
}

function User(props){
  return(
    <div style={{border: '2px solid grey', margin: '20px'}}>
      <h3>{props.name}</h3>
      <p>{props.email}</p>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(0)
  const handleIncrease = () => setCount(count +  1);
  const handleDecrease = () => setCount(count -  1);
  return(
    <div>
      <h4>Count: {count}</h4>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

function LoadComments (){
  const [comments, setCommets] = useState([]);
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setCommets(data))
  },[])
  return(
    <div>
      <h1>comments: {comments.length}</h1>
      {
        comments.map(comment => <Comment email={comment.email} body={comment.body}></Comment>)
      }
    </div>
  )
}

function Comment(props){
  return(
    <div>
      <h4>Email: {props.email}</h4>
      <p>{props.body}</p>
    </div>
  )
}

export default App;
