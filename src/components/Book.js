import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { deleteBook } from '../redux/books/thunks';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const handleDeleteBook = async () => {
    try {
      await dispatch(deleteBook(book.id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Section>
      <article className="left">
        <div className="book-details">
          <p className="genre">{book.category}</p>
          <p className="title">{book.title}</p>
          <p className="author">{book.author}</p>
        </div>
        <div className="interactions">
          <Button className="comments">Comments</Button>
          <Button
            className="remove"
            onClick={() => {
              handleDeleteBook();
            }}
          >
            Remove
          </Button>
          <Button className="edit">Edit</Button>
        </div>
      </article>
      <article className="middle">
        <div className="circle">
          <CircularProgressbar value={60} />
        </div>
        <div className="progress-text">
          <p className="percentage">60%</p>
          <p className="completed">Completed</p>
        </div>
      </article>
      <article className="right">
        <div className="current-chapter-container">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="book-chapter">Chapter 13</p>
        </div>
        <Button className="update-progress">UPDATE PROGRESS</Button>
      </article>
    </Section>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;

const Section = styled.section`
border: solid 1px #f0f0f0;
display: flex;
justify-content: space-between;
background-color: #fff;
margin: 1rem 6.25rem;
padding: 2rem 1.5rem;

 .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    .book-details {
        .genre {
            height: 1.125rem;
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
            height: 1.813rem;
            font-size: 1.375rem;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.2px;
            color: #121212;
        }
        .author {
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
        padding-top: 1rem;
        margin: 0.188rem 0.938rem 0.125rem 0;

        .comments {
            margin: 0.188rem 0 0.125rem 0;
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
            height: 1.188rem;
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
            padding: 0 0.938rem;
            margin: 0 0.938rem;
        }
        .edit {
            height: 1.188rem;
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
      max-width: 6.25rem;
    }
    .progress-text {
        border-right: 1px solid #e8e8e8;
        
        .percentage {
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
            height: 1.125rem;
            // margin: 0.063rem 3.625rem 0 3.688rem;
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
            height: 1.313rem;
            margin: 0.438rem 0 0.25rem 0;
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
        margin: 0.75rem 0 0.563rem 0;
        padding: 0.438rem 1.188rem 0.5rem 1.375rem;
        border-radius: 3px;
        background-color: #2e90f0;
        color: #c3daf0;
    }
}

@media (max-width: 1000px) {
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;

    .left {
      width: 100%;
      align-items: start;
      order: 1;
      padding-bottom: 3rem;
      border-bottom: 1px solid rgb(232, 232, 232);
    }

    .middle {
      width: 100%;
      flex-direction: column;
      align-items: start;
      order: 2;
      padding-bottom: 3rem;
      border-bottom: 1px solid rgb(232, 232, 232);
      padding-top: 3rem;
      display: flex;

      .circle {
        display: none;
      }

      .progress-text {
        border-right: none;

        .percentage {
          margin-left: 0;
        }
        .completed {
          margin-left: 0;
        }
      }
    }

    .right {
      width: 100%;
      align-items: start;
      order: 3;
      padding-top: 3rem;
    }
}

@media (max-width: 540px) {
  margin: 3rem 0;
}
`;
