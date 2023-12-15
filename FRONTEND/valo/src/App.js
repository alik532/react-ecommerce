import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArsenalGuide from './pages/ArsenalGuide';
import MapsGuide from './pages/MapsGuide';
import AgentsGuide from './pages/AgentsGuide'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/arsenal' element={<ArsenalGuide/>}/>
          <Route path='/maps' element={<MapsGuide/>}/>
          <Route exact path='/agents' element={<AgentsGuide/>}/>  
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
