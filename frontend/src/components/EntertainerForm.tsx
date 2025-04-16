import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  addEntertainer,
  getEntertainerById,
  updateEntertainer,
} from '../api/entertainerApi';

const EntertainerForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [entertainer, setEntertainer] = useState({
    entStageName: '',
    entEMailAddress: '',
    entPhoneNumber: '',
    entCity: '',
    entState: '',
  });

  useEffect(() => {
    if (isEditing) {
      getEntertainerById(Number(id)).then((data) => setEntertainer(data));
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEntertainer((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      await updateEntertainer(Number(id), entertainer);
    } else {
      await addEntertainer(entertainer);
    }
    navigate('/entertainers');
  };

  return (
    <div>
      <h2>{isEditing ? 'Edit' : 'Add'} Entertainer</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Stage Name</label>
          <input
            name="entStageName"
            value={entertainer.entStageName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            name="entEMailAddress"
            value={entertainer.entEMailAddress}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label>Phone</label>
          <input
            name="entPhoneNumber"
            value={entertainer.entPhoneNumber}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label>City</label>
          <input
            name="entCity"
            value={entertainer.entCity}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label>State</label>
          <input
            name="entState"
            value={entertainer.entState}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-success">
          {isEditing ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
};

export default EntertainerForm;
