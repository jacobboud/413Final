import { Link } from 'react-router-dom';

type Entertainer = {
  entertainerID: number;
  entStageName: string;
  bookingCount: number;
  lastBookingDate: string | null;
};

type Props = {
  entertainers: Entertainer[];
};

const EntertainerList = ({ entertainers }: Props) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Stage Name</th>
          <th>Times Booked</th>
          <th>Last Booking Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {entertainers.map((ent) => (
          <tr key={ent.entertainerID}>
            <td>{ent.entStageName}</td>
            <td>{ent.bookingCount}</td>
            <td>{ent.lastBookingDate ?? 'N/A'}</td>
            <td>
              <Link
                to={`/entertainers/${ent.entertainerID}`}
                className="btn btn-sm btn-info"
              >
                Details
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EntertainerList;
