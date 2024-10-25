import './App.css';
import AboutPage from './Children. Роутинг в React/AboutPage';
import HomePage from './Children. Роутинг в React/HomePage';
import DegreeСonversion from './Virtual DOM. Подключение библиотеки UI-компонентов/DegreeСonversion';
import TodoList from './Virtual DOM. Подключение библиотеки UI-компонентов/List';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <DegreeСonversion />
      <TodoList />
      <Router>
        <nav className='nav'>
          <Link className='nav' to="/">Главная</Link> | <Link className='nav' to="/about">О нас</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;