import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { publicRoutes } from './routes';

function App() {
  return (
    <div className='app'>
      <Routes>
        {publicRoutes.map((route, index) => {
          // const Layout = route.layout || Fragment;
          const Page = route.component;

          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
        {publicRoutes.map((route) => (
          <li key={route.name}>
            <Link to={`${route.path}`} style={{ textDecoration: 'none', color: 'black' }}>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
