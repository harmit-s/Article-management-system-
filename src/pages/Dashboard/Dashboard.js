
import ArticleList from '../../components/ArticleList/ArticleList'

import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard">
      
        <form className='dashboard__search'>
          <p className='dashboard__subtitle'>Filter By:</p>
          <input type="text" id="tag" placeholder="tagname..." className='dashboard__input'></input>
          <input type="text" id="author" placeholder="author..." className='dashboard__input'></input>
          <button type="button" className="dashboard__button">Apply Filter</button>
          <button type="button" className="dashboard__button">Clear Filter</button>
        </form>
      
      <ArticleList />
    </div>
  );
};

export default Dashboard;
