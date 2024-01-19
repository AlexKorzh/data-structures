import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { MainPage } from './pages';
import { ArrayPage } from './pages';

export const App = () => {
  return (
    <Router basename='/data-structures'>
      <div className="App">
        <Routes>
          <Route path="/array" element={<ArrayPage />} />
          <Route path="/" element={<MainPage/>} />
        </Routes>
      </div>
    </Router>
  );
};


