import NavComponent from './Components/NavComponent';
import { BlogProvider } from './Components/BlogContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AllCategory from './Components/AllCategory';
import Home from './Components/Home';
import Article from './Components/Article';
import './style.css'

function App() {
  return (
    <BlogProvider>
      <div className="App">
        <Router>
        <NavComponent />
          <Routes>
            <Route path='/' element={ <Navigate to='/home'/>  } />
            <Route path="/home" element={<Home />} />
            <Route path="/category/:cat" element={<AllCategory />} />
            <Route path="/article/:cat/:Id" element={<Article />} />
          </Routes>
        </Router>
      </div>
    </BlogProvider>
  );
}

export default App;