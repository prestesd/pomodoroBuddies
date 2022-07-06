import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import Tasks from './components/Tasks';
import Presentation from './components/Presentation';
import Statistics from './components/Statistics';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/pomodoroBuddies/counter" element={<Counter />} />
        <Route path="/pomodoroBuddies/tasks" element={<Tasks />} />
        <Route path="/pomodoroBuddies" element={<Presentation />} />
        <Route path="/pomodoroBuddies/statistics" element={<Statistics />} />
      </Routes>
    </div>
  );
}

export default App;
