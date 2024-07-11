import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Header from './components/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import CreateArticle from './pages/CreateArticle/CreateArticle';
import EditArticle from './pages/SelectedArticle/EditArticle';
import Profile from './pages/Profile/Profile';

import './styles/partials/globals.scss';
import './App.scss';

function App() {
  return (
    
    <Router>
      <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<CreateArticle />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit/:articleId" element={<EditArticle />} />
          <Route path="/logout" element={<Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;