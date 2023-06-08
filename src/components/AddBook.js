import styled from "styled-components";

const AddBook = () => {
    return (
        <Section>
            <h1 className="title">Add Book</h1>
                <form className="form">
                    <input className="book-title" type="text" placeholder="Book Title" />
                    <input className="book-author" type="text" placeholder="Book Author" />
                    <button className="add-book" type="submit">Add Book</button>
                </form>
        </Section>
    );
}

export default AddBook;

const Section = styled.section`
    .title {
        width: 10.875rem;
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

        .book-title {
            width: 41.5rem;
            height: 2.813rem;
            margin: 1.188rem 2.125rem 0 0;
            padding: 0.813rem 35.688rem 0.813rem 1.063rem;
            border-radius: 4px;
            border: solid 1px var(--white);
            background-color: #fff;
        }
        .book-author {
            width: 17.813rem;
            height: 2.813rem;
            margin: 1.188rem 2.125rem 0;
            padding: 0.375rem 0.938rem 0.563rem 1rem;
            border-radius: 4px;
            border: solid 1px var(--white);
            background-color: #fff;
        }
        .add-book {
            width: 11.5rem;
            height: 2.813rem;
            margin: 1.188rem 0 0 2.125rem;
            padding: 0.801rem 1.188rem 0.886rem 1.375rem;
            border-radius: 3px;
            color: #fff;
            background-color: #2e90f0;
        }
    }

`