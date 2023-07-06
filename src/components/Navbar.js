import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => (
  <Nav>
    <h1 className="title">Bookstore CMS</h1>
    <ul className="navigation">
      <li>
        <Link className="link" to="/">BOOKS</Link>
      </li>
      <li>
        <Link className="link" to="/categories">Categories</Link>
      </li>
    </ul>
    <div className="profile">
      <CgProfile className="icon" />
    </div>
  </Nav>
);

export default Navbar;

const Nav = styled.nav`
display: flex;
align-items: center;
height: 5.938rem;
padding: 0 6.25rem;
background-color: #fff;
margin-bottom: 3.125rem;
border-bottom: 1px solid #e8e8e8;

    .title {
        width: 15rem;
        height: 2.313rem;
        margin: 0.375rem 2.938rem 0.125rem 0;
        font-family: Montserrat;
        font-size: 1.875rem;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #0090ff;
    }
    .navigation {
        display: flex;
        gap: 2.5rem;

        .link {
            width: 3.688rem;
            height: 1rem;
            margin: 1.125rem 2.563rem 0.688rem 0;
            font-family: Montserrat;
            font-size: 0.813rem;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: 1.9px;
            color: #121212;
        }
    }
    .profile {
        margin-left: auto;
        
        .icon {
            width: auto;
            height: 2.313rem;
            color: #0090ff;
        }
    }
    @media (max-width: 1000px) {
      .navigation {
        display: none;
      }
    }

    @media (max-width: 540px) {
      padding: 0 1.5rem;

      .title {
        font-size: 1.5rem;
      }
    }
`;
