import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getEntertainersWithStats } from '../api/entertainerApi';
import EntertainerList from '../components/EntertainerList';

type Entertainer = {
  entertainerID: number;
  entStageName: string;
  bookingCount: number;
  lastBookingDate: string | null;
};

const Entertainers = () => {
  const [entertainers, setEntertainers] = useState<Entertainer[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEntertainersWithStats();
      setEntertainers(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Entertainers</h2>
      <EntertainerList entertainers={entertainers} />
      <Link to="/entertainers/new" className="btn btn-success">
        Add Entertainer
      </Link>
    </div>
  );
};

export default Entertainers;
