import './CreateArticle.scss';

const CreateArticle = () => {
  return (
    <div>
      <h1>Create Article</h1>
      <form>
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" required />
      </form>
    </div>
  );
};

export default CreateArticle;
