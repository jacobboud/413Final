import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Entertainers from './pages/Entertainers';
import EntertainerDetails from './components/EntertainerDetails';
import EntertainerForm from './components/EntertainerForm';

const App = () => {
  return (
    <div className="container py-4">
      <nav className="mb-4">
        <Link to="/" className="btn btn-primary me-2">
          Home
        </Link>
        <Link to="/entertainers" className="btn btn-secondary">
          Entertainers
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entertainers" element={<Entertainers />} />
        <Route path="/entertainers/:id" element={<EntertainerDetails />} />
        <Route path="/entertainers/new" element={<EntertainerForm />} />
        <Route path="/entertainers/edit/:id" element={<EntertainerForm />} />
      </Routes>
    </div>
  );
};

export default App;
