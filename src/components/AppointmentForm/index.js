import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import capitalize from './helper';
import style from './style.module.css';

/* eslint-disable camelcase */
const AppointmentForm = ({ props }) => {
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');

  const [billionaire_id, setBillionaire_id] = useState(props.currentBillionaireId || '');
  const [result, setResult] = useState({
    response: null,
    data: null,
  });

  const navigate = useNavigate();

  const createAppointment = async (e) => {
    e.preventDefault();

    let status = null;

    const appointment = {
      city, date, billionaire_id, user_id: props.currentUser.id,
    };

    await fetch('http://localhost:3000/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${props.currentUser.access_token}`,
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
          {props.billionaires.map(({ id, name }) => (
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

AppointmentForm.defaultProps = {
  currentBillionaireId: null,
  currentUser: null,
  billionaires: [],
};

AppointmentForm.propTypes = {
  props: PropTypes.instanceOf(Object).isRequired,
  billionaires: PropTypes.arrayOf(PropTypes.shape(PropTypes.object)), // Later will be .isRequired
  currentBillionaireId: PropTypes.number,
  currentUser: PropTypes.instanceOf(Object),
};

export default AppointmentForm;
