import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './style.module.css';
import handleErrors from './helper';

const Appointment = () => {
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [billionaire_id, setBillionaire_id] = useState('');
  const navigate = useNavigate();

  const createAppointment = (e) => {
    e.preventDefault();

    const appointment = {
      city, date, billionaire_id, user_id: 1,
    };

    fetch('http://localhost:3000/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ appointment }),
    }).then(handleErrors)
      .then(() => navigate('/'))
      .catch((error) => console.log(error));
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
            <option value="1">
              Ariel Camus
            </option>
            <option value="2">
              Bill Gates
            </option>
            <option value="3">
              Francoise Meyers
            </option>
            <option value="4">
              Jack Ma
            </option>
          </select>
          <input
            className={style['form-child']}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
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

export default Appointment;
