import './index.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Blog from './components/blog';
import ArticlePage from './components/article-page';
import ProgramPage from './pages/program-page';
import Error from './pages/Error';

function App() {
  
  return (
    
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/article/:id" element={<ArticlePage />} />
          <Route path="/programs/:id" element={<ProgramPage />} />
          <Route path='/*' element={<Error />}></Route>
        </Routes>
      </Router>
  )
}

export default App
