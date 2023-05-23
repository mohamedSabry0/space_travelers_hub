import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/header';
import Missions from './Components/Missions';
import Rockets from './Components/Rockets';
import Profile from './Components/Profile';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
