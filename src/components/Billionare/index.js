import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './style.module.css';

const Billionare = ({ item }) => (
  <Link to={`/details/${item.id}`} className={style.container}>
    {
      item.image.includes('http') ? (
        <img src={item.image} alt={item.name} className={style.image} />
      ) : (
        <img src="https://usercontent.one/wp/www.jmventures.no/wp-content/uploads/2019/09/no_avatar.jpg" alt={item.name} className={style.image} />
      )
    }
    <h3 className={style.name}>{item.name}</h3>
    <h4 className={style.title}>{item.title}</h4>
  </Link>
);

Billionare.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default Billionare;
