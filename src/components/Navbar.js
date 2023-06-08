import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => (
  <Nav>
    <h1 className="title">Bookstore CMS</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </Nav>
);

export default Navbar;

const Nav = styled.nav`
height: 5.938rem;

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
`;
