import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import style from './style.module.css';
import { fetchAppointments } from '../../redux/appointments';
import billionaires, { readableTime } from './billionairesMock';

const UserAppointments = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const appointments = useSelector((state) => state.appointments.all);
  // const billionaires = useSelector((state) => state.billionaires.all);

  useEffect(() => {
    if (user) {
      dispatch(fetchAppointments(user));
    }
  }, [user]);

  return (
    <>
      <header className={style.header}>
        <h1>Your Appointments</h1>
      </header>
      <div>
        {appointments.map((appointment) => (
          <div key={appointment.id}>
            <img src={billionaires[appointment.billionaire_id - 1].image} alt={`${billionaires[appointment.billionaire_id - 1].name} logo`} />
            <p>{appointment.city}</p>
            <p>{readableTime(appointment.created_at)}</p>
            <button type="button">Cancel</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserAppointments;
