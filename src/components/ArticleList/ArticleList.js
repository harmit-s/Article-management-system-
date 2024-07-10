import { useEffect, useState } from 'react';
import { getArticles } from '../api/articles';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>Author: {article.author}</p>
            <p>{article.content}</p>
            <p>Tags: {article.tags.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;