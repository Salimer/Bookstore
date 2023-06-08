import styled from 'styled-components';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBookClick }) => {
  const handleRemove = () => {
    console.log(book.id);
    handleRemoveBookClick(book.id);
  };
  return (
    <Section>
      <article className="left">
        <div className="book-details">
          <p className="genre">{book.genre}</p>
          <p className="title">{book.title}</p>
          <p className="author">{book.author}</p>
        </div>
        <div className="interactions">
          <button type="button" className="comments">Comments</button>
          <button
            type="button"
            className="remove"
            onClick={handleRemove}
          >
            Remove
          </button>
          <button type="button" className="edit">Edit</button>
        </div>
      </article>
      <article className="middle">
        <div className="circle" />
        <div className="progress-text">
          <p className="percentage">{book.completed}</p>
          <p className="completed">Completed</p>
        </div>
      </article>
      <article className="right">
        <div className="current-chapter-container">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="book-chapter">{book.chapter}</p>
        </div>
        <button type="button" className="update-progress">UPDATE PROGRESS</button>
      </article>
    </Section>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    completed: PropTypes.string.isRequired,
    chapter: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBookClick: PropTypes.func.isRequired,
};

export default Book;

const Section = styled.section`
display: flex;
background-color: #fff;

 .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .book-details {
        .genre {
            width: 3.063rem;
            height: 1.125rem;
            margin: 0 2.438rem 0 0;
            opacity: 0.5;
            font-size: 0.875rem;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #121212;
        }
        .title {
            width: 12.313rem;
            height: 1.813rem;
            margin: 0.188rem 20.188rem 0 0;
            font-size: 1.375rem;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.2px;
            color: #121212;
        }
        .author {
            width: 6.688rem;
            height: 1.188rem;
            margin: 0.25rem 0 0;
            font-size: 0.875rem;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #4386bf;
        }
    }
    .interactions {
        padding: 1rem 0;

        .comments {
            margin: 0.188rem 0.938rem 0.125rem 0;
            
            font-size: 0.875rem;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #4386bf;
            background-color: #fff;
            border: none;
        }
        .remove {
            width: 4.563rem;
            height: 1.188rem;
            margin: 0.188rem 0.938rem 0.125rem 0;
            font-size: 0.875rem;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #4386bf;
            background-color: #fff;
            border-right: 1px solid #e8e8e8;
            border-left: 1px solid #e8e8e8;
            border-top: none;
            border-bottom: none;
        }
        .edit {
            width: 4.563rem;
            height: 1.188rem;
            margin: 0.188rem 0.938rem 0.125rem 0;
            font-size: 0.875rem;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #4386bf;
            background-color: #fff;
            border: none;
        }
    }
 }

 .middle {
    display: flex;
    align-items: center;

    .circle {
        width: 4.25rem;
        height: 4.25rem;
        border-style: solid;
        border-width: 5px;
        border-image-source: linear-gradient(to bottom, var(--medium-blue), #379cf6);
        border-image-slice: 1;
    }
    .progress-text {
        border-right: 1px solid #e8e8e8;
        
        .percentage {
            width: 4.25rem;
            height: 2.438rem;
            margin: 0.063rem 5.75rem 0 0.688rem;
            font-size: 2rem;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #121212;
        }
        .completed {
            width: 5rem;
            height: 1.125rem;
            margin: 0.438rem 4.938rem 0.75rem 0.75rem;
            opacity: 0.5;
            font-size: 0.875rem;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #121212;
        }
    }
}
.right {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .current-chapter-container {
        .current-chapter {
            width: 7.875rem;
            height: 1.125rem;
            margin: 0.063rem 3.625rem 0 3.688rem;
            opacity: 0.5;
            font-size: 0.813rem;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #121212;
        }
        .book-chapter {
            width: 4.688rem;
            height: 1.313rem;
            margin: 0.438rem 6.813rem 0.25rem 3.688rem;
            font-size: 1rem;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.4px;
            color: #121212;
        }
    }
    .update-progress {
        width: 11.5rem;
        height: 2.063rem;
        margin: 0.75rem 0 0.563rem 3.688rem;
        padding: 0.438rem 1.188rem 0.5rem 1.375rem;
        border-radius: 3px;
        background-color: #2e90f0;
        color: #c3daf0;
    }
}

`;
