import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import DetailsText from '../../components/DetailsText';
import { fetchCurrentBillionaire } from '../../redux/billionaires';
import style from './style.module.css';

const Details = () => {
  const { id } = useParams();
  const item = useSelector((state) => state.billionaires.current);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (item === 'Not Found') {
      navigate('/404');
    }
    dispatch(fetchCurrentBillionaire(id));
  }, [item]);

  return (
    <div className={style.page}>
      <div className={style.container}>
        <section className={style['image-section']}>
          <img src={item.image} alt={item.id} className={style.image} />
        </section>
        <DetailsText item={item} />
        <Link to="/" className={style.back}>
          <i className={`bi bi-caret-left ${style.icon}`} />
        </Link>
      </div>
    </div>
  );
};

export default Details;
