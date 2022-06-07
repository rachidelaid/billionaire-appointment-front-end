import AppointmentForm from '../../components/AppointmentForm';
import style from './style.module.css';

const Appointment = () => (
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
    </div>
    <AppointmentForm />
  </div>
);

export default Appointment;
