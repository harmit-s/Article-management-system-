import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainArticle from './pages/MainArticle/MainArticle';
import CreateArticle from './pages/CreateArticle/CreateArticle';

import './styles/partials/globals.scss';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainArticle />} />
          <Route path="/articles/:articleId" element={<MainArticle />} />
          <Route path="/create" element={<CreateArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
