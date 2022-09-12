import './App.css';
import FetchComponent from './components/FetchComponent';

function App() {

  return (
    <div className="App">
      <FetchComponent url = {"http://localhost:7070/data"} method = {{method:"POST"}}/>
      <FetchComponent url = {"http://localhost:7070/error"} method = {{method:"POST"}}/>
      <FetchComponent url = {"http://localhost:7070/loading"} method = {{method:"POST"}}/>
    </div>
  );
}

export default App;
