import { useSelector } from 'react-redux';
import AppointmentForm from '../../components/AppointmentForm';
import style from './style.module.css';

/* eslint-disable camelcase */
const Appointment = () => {
  const allBillionaires = useSelector((state) => state.billionaires.all);
  const currentBillionaireId = useSelector((state) => state.billionaires.current.id);
  const { id: currentUserId, access_token } = useSelector((state) => (state.users.user
    || { id: null, access_token: null }));

  const props = {
    billionaires: allBillionaires,
    currentBillionaireId,
    currentUser: {
      id: currentUserId,
      access_token,
    },
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
      </div>
      {currentUserId ? <AppointmentForm props={props} />
        : (
          <div className={style['login-required']}>
            <hr className={style.line} />
            You need to login in order to make an appointment.
          </div>
        )}
    </div>
  );
};
/* eslint-enable camelcase */

export default Appointment;
