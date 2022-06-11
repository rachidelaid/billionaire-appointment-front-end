import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import style from './style.module.css';
import { fetchAppointments, deleteAppointment } from '../../redux/appointments';
import ternaryFunction from './helper';

const UserAppointments = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const appointments = useSelector((state) => state.appointments.all);
  const billionaires = useSelector((state) => state.billionaires.all);

  useEffect(() => {
    if (user) {
      dispatch(fetchAppointments(user));
    }
  }, [user]);

  const handleDeleteAppointment = (id) => {
    const params = {
      id,
      user,
    };
    dispatch(deleteAppointment(params));
    toast.success('Appointment successfully deleted');
  };

  const appointmentCard = (appointment) => {
    const currentAppointment = billionaires.find((b) => b.id === appointment.billionaire_id);
    return (
      <div className={style.appointment}>
        <h2 className={style['billionaire-name']}>{currentAppointment.name}</h2>
        <img src={currentAppointment.image} alt={`${currentAppointment.name} logo`} className={style.img} />
        <p>
          Location:&#160;
          {appointment.city}
        </p>
        <p>
          Date:&#160;
          {appointment.date}
        </p>
        <button type="button" className={style.cancel} onClick={() => handleDeleteAppointment(appointment.id)}>Cancel</button>
      </div>
    );
  };

  return (
    <div className={style.container}>
      <header className={style.header}>
        <h1 className={style.title}>
          {user ? (user.name).toUpperCase() : 'NO'}
          {' '}
          APPOINTMENTS
        </h1>
      </header>
      <TransitionGroup className={style.appointments}>
        {!user ? <p className={style.message}>You need to login in order to access this page.</p>
          : ternaryFunction(appointments.length, appointments.map((appointment) => (
            <CSSTransition key={appointment.id} timeout={500} classNames="fade">
              {appointmentCard(appointment)}
            </CSSTransition>
          )), <h3 className={style.message}>No appointments yet.</h3>)}

      </TransitionGroup>
    </div>
  );
};

export default UserAppointments;
