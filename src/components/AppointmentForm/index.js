import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import capitalize from './helper';
import style from './style.module.css';

/* eslint-disable camelcase */
const AppointmentForm = () => {
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const allBillionaires = useSelector((state) => state.billionaires.all);
  const currentBillionaireId = useSelector((state) => state.billionaires.current.id);
  const [billionaire_id, setBillionaire_id] = useState(currentBillionaireId || '');
  const [result, setResult] = useState({
    response: null,
    data: null,
  });

  const navigate = useNavigate();
  const { id: currentUserId, access_token } = useSelector((state) => (state.users.user
    || { id: null, access_token: null }));

  const createAppointment = async (e) => {
    e.preventDefault();

    let status = null;

    const appointment = {
      city, date, billionaire_id, user_id: currentUserId,
    };

    await fetch('http://localhost:3000/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({ appointment }),
    })
      .then((resp) => {
        status = resp.ok;
        if (status) {
          navigate('/');
        }
        return resp.json();
      })
      .then((data) => {
        setResult({
          response: status,
          data,
        });
        return data;
      });
  };

  return (
    <>
      {result.data && (
      <div className={style.errors}>
        {result.data && Object.entries(result.data).map((error) => (
          <p key={error[0]}>
            {capitalize(error[0])}
            {' '}
            {error[1]}
          </p>
        ))}
      </div>
      )}
      <form className={style.form} onSubmit={(e) => createAppointment(e)}>
        <input
          className={style['form-child']}
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <select
          className={style['form-child']}
          value={billionaire_id}
          onChange={(e) => setBillionaire_id(e.target.value)}
          required
        >
          <option value="" disabled>
            Billionaires List
          </option>
          {allBillionaires.map(({ id, name }) => (
            <option
              key={id}
              value={id}
            >
              {name}
            </option>
          ))}
        </select>
        <input
          className={style['form-child']}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          placeholder="Select date"
        />
        <button
          className={style.btn}
          type="submit"
        >
          Book Now
        </button>
      </form>
    </>
  );
};
/* eslint-enable camelcase */

export default AppointmentForm;
