
import './App.css';
import Header from "./My_components/Header";
import Todos from "./My_components/Todos";
import Footer from "./My_components/Footer";


function App() {
  let todos = [
    {
      sno: 1,
      title: "Go for shopping",
      desc: "You need to go for shopping."
    },
    {
      sno: 2,
      title: "Go for walking",
      desc: "You need to go for walking for your good health."
    },
    {
      sno: 3,
      title: "Meet friends",
      desc: "You need to go to meet your friends."
    }
  ]
  
  return (
    <>
    <Header title="My Todos List" searchbar={true}/>
    <Todos todos={todos}/>
    <Footer/>
    </>
  );
}

export default App;










/* <div class="App">
      <header class="App-header">
        <div>{myVariable}</div>
        <img src={logo} class="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          class="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/