import './App.css';
import './styles.css';


import Main from './components/Main';
import Navbar from './components/Navbar';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
