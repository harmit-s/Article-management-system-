import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getArticleById, updateArticle } from '../../api/articles';

import './EditArticle.scss';

const EditArticle = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    tags: []
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await getArticleById(Number(articleId));
        if (response.data) {
          setArticle(response.data);
          setFormData({
            title: response.data.title || '',
            author: response.data.author || '',
            content: response.data.content || '',
            tags: response.data.tags || []
          });
        } else {
          console.error('Article not found');
        }
      } catch (error) {
        console.error('Failed to fetch article:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleTagChange = (e) => {
    const { value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      tags: value.split(',')
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedArticle = { ...formData, id: Number(articleId), timestamp: Date.now() };
      await updateArticle(updatedArticle);
      setShowSuccessModal(true); 
      setTimeout(() => {
        setShowSuccessModal(false);
        navigate('/dashboard'); 
      }, 3000); 
    } catch (error) {
      console.error('Failed to update article:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="edit">
      <h1 className="edit__title">Edit Article</h1>
      <form onSubmit={handleSubmit}>
        <div className="edit__form">
          <label htmlFor="title" className="edit__subtitle">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className='edit__input'
            required
          />
        </div>
        <div className="edit__form">
          <label htmlFor="author" className="edit__subtitle">Author:</label>
          <input
            id="author"
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className='edit__input'
            required
          />
        </div>
        <div className="edit__form">
          <label htmlFor="content" className="edit__subtitle">Content:</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className='edit__textarea'
            required
          />
        </div>
        <div className="edit__form">
          <label htmlFor="tags" className='edit__subtitle'>Tags (comma-separated):</label>
          <input
            id="tags"
            type="text"
            name="tags"
            value={formData.tags.join(',')}
            onChange={handleTagChange}
            className='edit__input'
          />
        </div>
        <button className='edit__button' type="submit">Update Article</button>
      </form>

      {showSuccessModal && (
        <div className="overlay" onClick={() => setShowSuccessModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <h2>Success</h2>
              <p>Article updated successfully!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditArticle;