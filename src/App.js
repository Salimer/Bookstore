import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './routes/Home';
import Categories from './routes/Categories';
import './App.css';
import Navbar from './components/Navbar';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Provider>
  );
}

export default App;
