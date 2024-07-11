import { useState } from 'react';
import { createArticle } from '../../api/articles';
import { useNavigate } from 'react-router-dom';
import './CreateArticle.scss';

function CreateArticle() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    
    const id = Date.now();

    
    const article = {
      id,
      title,
      author,
      content,
      timestamp: new Date().toISOString(),
      tags: tags.split(',').map(tag => tag.trim()), 
    };

    try {
      
      const response = await createArticle(article);
      console.log('Article submitted:', response.data);
      setMessage('Article submitted successfully!');
      
      setTitle('');
      setAuthor('');
      setContent('');
      setTags('');

      setTimeout(() => {
        navigate('/'); 
      }, 2000);
    } catch (error) {
      console.error('Error submitting article:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="create-article">
      <h2>Create a New Article</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags (comma-separated):</label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateArticle;