import logo from './logo.svg';
import './App.css';
import UserList from './UserList';

function App() {
  let users = [{id: "uniq1", name:"Paul"}, {id: "uniq2", name:"Mary"}, {id: "uniq3", name:"Viktor"}, {id: "uniq4", name:"Suzanna"}, {id: "uniq5", name:"Peter"}, {id: "uniq6", name:"Vladislav"}, {id: "uniq7", name:"Anna"}];
  return (
    <div className="App">
      <header className="App-header">
        <UserList>{users}</UserList>
      </header>
    </div>
  );
}

export default App;
