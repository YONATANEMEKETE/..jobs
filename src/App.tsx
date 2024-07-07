import Home from './Pages/Home';
import MyJobs from './Pages/MyJobs';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myjobs" element={<MyJobs />} />
    </Routes>
  );
}

export default App;
