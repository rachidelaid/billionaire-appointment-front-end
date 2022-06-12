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
    } else if (!item.id || item.id !== id) {
      dispatch(fetchCurrentBillionaire(id));
    }
  }, [item]);

  return (
    <div className={style.page}>
      {item.id && (
        <div className={style.container}>
          <section className={style['image-section']}>
            {
              item.image.includes('http')
                ? (
                  <img src={item.image} alt={item.id} className={style.image} />
                ) : (
                  <img src="https://usercontent.one/wp/www.jmventures.no/wp-content/uploads/2019/09/no_avatar.jpg" alt={item.id} className={style.image} />
                )
            }
          </section>
          <DetailsText item={item} />
          <Link to="/" className={style.back}>
            <i className={`bi bi-caret-left ${style.icon}`} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Details;
