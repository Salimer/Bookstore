import styled from 'styled-components';

const Book = () => (
  <Section>
    <article>
      <div className="book-details">
        <p>Book.Genre</p>
        <p>Book.Title</p>
        <p>Book.Author</p>
      </div>
      <div className="interactions">
        <button>Comments</button>
        <button>Remove</button>
        <button>Edit</button>
      </div>
    </article>
    <article>
        <div>circle</div>
        <div className="progress-text">
            <p>Book.prgress</p>
            <p>Completed</p>
        </div>
    </article>
    <article>
        <div>
            <p>CURRENT CHAPTER</p>
            <p>Book.chapter</p>
        </div>
        <button>UPDATE PROGRESS</button>
    </article>
  </Section>
);

const Section = styled.section`

`

export default Book;
