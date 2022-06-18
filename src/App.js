import './App.css';
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import { Routes, Route } from "react-router-dom";
import Tasks from './components/Tasks';
import Presentation from './components/Presentation';
import Statistics from './components/Statistics';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="" element={<Presentation />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </div>
  );
}

export default App;
