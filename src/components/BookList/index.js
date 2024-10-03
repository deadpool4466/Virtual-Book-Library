import { Link } from 'react-router-dom';
import './index.css';

const BookList = ({ bookDetailsList, addBookToLibrary }) => {
  const { id, title, author, genre, rating } = bookDetailsList;

  const handleAddClick = () => {
    addBookToLibrary(bookDetailsList); 
  };

  return (
    
     
    <Link to={`/bookdetails/${id}`} className="link-names">
      <li className="bookList-container">
        <div className="list-container">
          <img className="bookicon" src="./image/book.png" alt="bookImg" />
          <div className="booklistDetails-container">
            <h1 className="title">{title}</h1>
            <p className="author">{author}</p>
            <p className="genre">{genre}</p>
            <div className="rating-container">
              <img className="ratingImg" src="./image/star (2).png" alt="star" />
              <p className="rating">{rating}</p>
            </div>
            <button className="add-btn" onClick={handleAddClick}>Add</button>
          </div>
        </div>
      </li>
    </Link>
    
  );
};

export default BookList;
