import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AddBook = ({ handleAddBookClick }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddBookClick(title, author);
    setTitle('');
    setAuthor('');
  };

  return (
    <Section>
      <h1 className="title">Add Book</h1>
      <form className="form">
        <input className="book-title" type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="book-author" type="text" placeholder="Book Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button className="add-book" type="submit" onClick={handleSubmit}>Add Book</button>
      </form>
    </Section>
  );
};

AddBook.propTypes = {
  handleAddBookClick: PropTypes.func.isRequired,
};

export default AddBook;

const Section = styled.section`
border-top: 1px solid #e8e8e8;
margin: 2rem 6.25rem;
    .title {
        // : 10.875rem;
        height: 1.5rem;
        margin: 1.813rem 32.75rem 1.188rem 0;
        font-size: 1.25rem;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.18px;
        color: #888;
    }
    .form {
        display: flex;
        justify-content: space-between;

        .book-title {
            height: 2.813rem;
            border-radius: 4px;
            border: solid 1px var(--white);
            background-color: #fff;
            padding-left: 1rem;
            width: 55.15%;
        }
        .book-author {
            height: 2.813rem;
            border-radius: 4px;
            border: solid 1px var(--white);
            background-color: #fff;
            padding-left: 1rem;
            width: 23.67%;
        }
        .add-book {
            height: 2.813rem;
            border-radius: 3px;
            color: #fff;
            background-color: #2e90f0;
            width: 15.28%;
        }
    }

`;
