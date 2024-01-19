import { Link } from 'react-router-dom';
import './main.scss';

export const MainPage = () => {
  return (
    <div className='container'>
      <h1>Data Structure Visualization</h1>
      <nav>
        <ul className='links'>
            <Link className='link' to="/array">ArrayPage</Link>
        </ul>
      </nav>
    </div>
  );
};
