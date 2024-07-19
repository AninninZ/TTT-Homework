import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { Homepage
} from './view/Route'

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/home' element={<Homepage/>}></Route>
        <Route path='/test' element="Test"></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
