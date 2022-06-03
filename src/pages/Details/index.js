import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import style from './style.module.css';

const Details = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.billionaires.current);
  const item = data.find((data) => data.id.toString() === id);

  return (
    <div className={style.page}>
      <div className={style.container}>

        <section className={style['image-section']}>
          <img src={item.image} alt={item.id} className={style.image} />
        </section>
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
        </section>
        <Link to="/" className={style.back}>
          <i className={`bi bi-caret-left ${style.icon}`} />
        </Link>
      </div>
    </div>
  );
};

export default Details;
