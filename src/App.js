import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import CreateArticle from './pages/CreateArticle/CreateArticle';
import EditArticle from './pages/SelectedArticle/EditArticle';

import './styles/partials/globals.scss';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/edit/:articleId" element={<EditArticle />} />
          <Route path="/create" element={<CreateArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
