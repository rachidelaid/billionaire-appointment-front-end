import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './style.module.css';

const DetailsText = ({ item }) => (
  <section className={style.details}>
    <header>
      <h2 className={style.name}>{item.name}</h2>
      <h3 className={style.title}>{item.title}</h3>
    </header>
    <div className={style.tile}>
      <span>price</span>
      <span>{item.price}</span>
    </div>
    <div className={style.bio}>
      <h3>Bio</h3>
      <p>{item.description}</p>
    </div>
    <div className={style['reserve-div']}>
      <Link to="/new-appointment" className={style.reserve}>
        <span>Reserve</span>
        <span>
          <i className="bi bi-emoji-smile-fill" />
        </span>
      </Link>
    </div>
  </section>
);
DetailsText.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default DetailsText;
