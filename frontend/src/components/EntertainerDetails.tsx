import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getEntertainerById, deleteEntertainer } from '../api/entertainerApi';

const EntertainerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [entertainer, setEntertainer] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEntertainerById(Number(id));
      setEntertainer(data);
    };
    fetchData();
  }, [id]);

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this entertainer?')) {
      await deleteEntertainer(Number(id));
      navigate('/entertainers');
    }
  };

  if (!entertainer) return <p>Loading...</p>;

  return (
    <div>
      <h2>{entertainer.entStageName}</h2>
      <p>
        <strong>Email:</strong> {entertainer.entEMailAddress}
      </p>
      <p>
        <strong>Phone:</strong> {entertainer.entPhoneNumber}
      </p>
      <p>
        <strong>City:</strong> {entertainer.entCity}, {entertainer.entState}
      </p>

      <div className="mt-3">
        <Link
          to={`/entertainers/edit/${entertainer.entertainerID}`}
          className="btn btn-primary me-2"
        >
          Edit
        </Link>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default EntertainerDetails;
