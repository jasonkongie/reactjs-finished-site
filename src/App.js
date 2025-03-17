import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Connect from './pages/Connect'
import Crud from './pages/Crud'
import Donate from './pages/Donate'
import Downloads from './pages/Downloads'
import Research from './pages/Research'

function App() {
  return (<Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    <Route path="/connect" element={<Connect />} />
        <Route path="/crud" element={<Crud />} />
    <Route path="/donate" element={<Donate />} />
      <Route path="/downloads" element={<Downloads />} />
      <Route path="/research" element={<Research />} />
      </Routes>
    </Router>
  );
}

export default App
