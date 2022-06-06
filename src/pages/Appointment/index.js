import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './style.module.css';
import billionaires, { capitalize } from './helper';

/* eslint-disable camelcase */
const Appointment = () => {
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const currentBillionaireId = useSelector((state) => state.billionaires.current.id);
  const [billionaire_id, setBillionaire_id] = useState(currentBillionaireId || '');
  const [result, setResult] = useState({
    response: null,
    data: null,
  });

  const navigate = useNavigate();
  const currentUserId = useSelector((state) => (state.users.user ? state.users.user.id : 1));

  const createAppointment = async (e) => {
    e.preventDefault();

    let status = null;

    const appointment = {
      city, date, billionaire_id, user_id: currentUserId,
    };

    await fetch('http://localhost:3000/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
    <div className={`${style.container} ${style['flex-center']}`}>
      <div className={`${style.information} ${style['flex-center']}`}>
        <h1 className={style.heading}>BOOK A BILLIONAIRE</h1>
        <hr className={style.line} />
        <p className={style.description}>
          Ever wanted to spend a day with a billionaire genius who can give you advice
          on how to run a business?
          Maybe you just wanted a coffee-chat with him to see the personality behind
          the money. Well, in Billionaire Appointment this is possible. If you wish
          to book YOUR billionaire, please use the selector below.
        </p>
        <div className={style.errors}>
          {result.data && Object.entries(result.data).map((error) => (
            <p key={error[0]}>
              {capitalize(error[0])}
              {' '}
              {error[1]}
            </p>
          ))}
        </div>
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
            {billionaires.map(({ id, name }) => (
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
      </div>
    </div>
  );
};
/* eslint-enable camelcase */

export default Appointment;
