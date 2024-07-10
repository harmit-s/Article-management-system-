import axiosInstance from './index';
import articlesData from '../data/articles.json';

export const getArticles = async () => {
  return new Promise((resolve) => {
    resolve({ data: articlesData });
  });
};

export const getArticleById = async (id) => {
  return new Promise((resolve) => {
    const article = articlesData.find(article => article.id === id);
    resolve({ data: article });
  });
};

export const createArticle = async (newArticle) => {
  articlesData.push(newArticle);
  return new Promise((resolve) => {
    resolve({ data: newArticle });
  });
};

export const updateArticle = async (updatedArticle) => {
  const index = articlesData.findIndex(article => article.id === updatedArticle.id);
  articlesData[index] = updatedArticle;
  return new Promise((resolve) => {
    resolve({ data: updatedArticle });
  });
};

export const deleteArticle = async (id) => {
  const index = articlesData.findIndex(article => article.id === id);
  articlesData.splice(index, 1);
  return new Promise((resolve) => {
    resolve({ data: id });
  });
};