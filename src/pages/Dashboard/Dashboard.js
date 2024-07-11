import { useState } from 'react';
import ArticleList from '../../components/ArticleList/ArticleList'

import './Dashboard.scss';

const Dashboard = () => {
  const [filters, setFilters] = useState({ tag: '', author: '' });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [id]: value,
    }));
  };

  const applyFilter = () => {
    setFilters({ ...filters });
  };

  const clearFilter = () => {
    setFilters({ tag: '', author: '' });
  };

  return (
    <div className="dashboard">
      <form className="dashboard__search">
        <p className="dashboard__subtitle">Filter By:</p>
        <input
          type="text"
          id="tag"
          placeholder="tagname..."
          className="dashboard__input"
          value={filters.tag}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="author"
          placeholder="author..."
          className="dashboard__input"
          value={filters.author}
          onChange={handleInputChange}
        />
        <button type="button" className="dashboard__button" onClick={applyFilter}>
          Apply Filter
        </button>
        <button type="button" className="dashboard__button" onClick={clearFilter}>
          Clear Filter
        </button>
      </form>

      <ArticleList filters={filters} />
    </div>
  );
};

export default Dashboard;