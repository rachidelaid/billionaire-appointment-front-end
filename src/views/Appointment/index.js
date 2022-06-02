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
      <form className={style.form}>
        <input className={style['form-child']} type="text" placeholder="London" required />
        <select className={style['form-child']} required>
          <option value="" selected disabled>Billionaires List</option>
          <option value="ariel-camus">Ariel Camus</option>
          <option value="bill-gates">Bill Gates</option>
          <option value="francoise-meyers">Francoise Meyers</option>
          <option value="jack-ma">Jack Ma</option>
        </select>
        <input type="date" className={style['form-child']} required />
        <button className={style.btn} type="submit">Book Now</button>
      </form>
    </div>
  </div>

);

export default Appointment;
