
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Crimea from './pages/Crimea';
import Donbass from './pages/Donbass';
import Euromaidan from './pages/Euromaidan';
import Heroes from './pages/Heroes';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import VideoLessons from './pages/VideoLessons';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/crimea" element={<Crimea />} />
        <Route path="/donbass" element={<Donbass />} />
        <Route path="/euromaidan" element={<Euromaidan />} />
        <Route path="/video-lessons" element={<VideoLessons />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
