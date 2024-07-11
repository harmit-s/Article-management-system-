import { useEffect, useState } from 'react';
import { getArticles, deleteArticle } from '../../api/articles'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEdit } from '@fortawesome/free-solid-svg-icons';
import avatar from '../../assets/images/avatar.jpg';
import './ArticleList.scss';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await getArticles();
        setArticles(response.data);
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const openDeleteModal = (id) => {
    setArticleToDelete(id);
    setShowModal(true);
  };

  const closeDeleteModal = () => {
    setArticleToDelete(null);
    setShowModal(false);
  };

  const handleDelete = async () => {
    if (articleToDelete) {
      try {
        await deleteArticle(articleToDelete);
        setArticles(prevArticles => prevArticles.filter(article => article.id !== articleToDelete));
      } catch (error) {
        console.error('Failed to delete article:', error);
      } finally {
        closeDeleteModal(); // Close modal after delete action
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='articles'>
      <h1 className='articles__title'>Articles</h1>
      <ul className='articles__list'>
        {articles.map(article => (
          <li className='articles__card' key={article.id}>
            <div className='articles__card-layout'>
              <img src={avatar} alt='avatar logo' className='articles__avatar' />
              <h3 className='articles__author'>Author: {article.author}</h3>
              <Link className='articles__edit' to={`/edit/${article.id}`}>
                <FontAwesomeIcon icon={faEdit} color="#4d4d4e" />
              </Link>
              <button className='articles__delete' onClick={() => openDeleteModal(article.id)}>
                <FontAwesomeIcon icon={faClose} color="#4d4d4e" />
              </button>
            </div>
            <h2 className='articles__subtitle'>{article.title}</h2>
            <p className='articles__content'>{article.content}</p>
            <p className='articles__tag'>Tags: {article.tags.join(', ')}</p>
            <p className='articles__date'>{new Date(article.timestamp).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>

      {/* Modal and Overlay */}
      {showModal && (
        <div className="articles__overlay" onClick={closeDeleteModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <h2>Delete Article</h2>
              <p>Are you sure you want to delete this article?</p>
              <div>
                <button onClick={handleDelete} className="button">Delete</button>
                <button onClick={closeDeleteModal} className="button">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleList;