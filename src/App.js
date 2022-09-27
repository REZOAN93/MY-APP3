import { Route, Routes } from 'react-router-dom';
import './App.css';
import Countries from './Components/Countries/Countries';
import Country from './Components/Country/Country';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="about" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
