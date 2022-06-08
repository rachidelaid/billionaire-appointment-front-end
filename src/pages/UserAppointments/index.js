import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import style from './style.module.css';
import { fetchAppointments } from '../../redux/appointments';

const UserAppointments = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

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
    </>
  );
};

export default UserAppointments;
