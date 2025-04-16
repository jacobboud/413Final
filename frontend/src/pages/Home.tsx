import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="mb-4">🎭 Welcome to the Entertainment Agency</h1>
      <p className="lead">
        Browse and manage a list of entertainers, view details, and keep your
        roster up to date.
      </p>
      <Link to="/entertainers" className="btn btn-primary btn-lg mt-3">
        View Entertainers
      </Link>
    </div>
  );
};

export default Home;
