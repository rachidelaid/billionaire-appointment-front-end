import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import style from './style.module.css';
import { deleteBillionaire } from '../../redux/billionaires';

const BillionaireDeleteList = ({ billionaires }) => {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(null);

  const handleDeleteBillionaire = async (id) => {
    const result = await dispatch(deleteBillionaire(id));
    if (result.payload) {
      setAlert(['Billionaire successfully deleted']);
      toast.success('Billionaire successfully deleted');
    }
  };

  const renderBillionaire = (b) => (
    <div key={b.id} className={`${style['billionaire-ctn']} ${style['d-flex']} ${style.col}`}>
      {
        b.image.includes('http')
          ? (
            <img src={b.image} alt={`${b.name} profile pic`} className={style.img} />
          ) : (
            <img src="https://usercontent.one/wp/www.jmventures.no/wp-content/uploads/2019/09/no_avatar.jpg" alt={`${b.name} profile pic`} className={style.img} />
          )
      }
      <h3>{b.name}</h3>
      <button
        type="button"
        className={`${style.click}`}
        onClick={() => handleDeleteBillionaire(b.id)}
      >
        DELETE
      </button>
    </div>
  );

  const renderBillionaires = (billionaires) => {
    if (billionaires.length > 0) {
      return (
        <TransitionGroup className={`${style['billionaires-ctn']} ${style['d-flex']}`}>
          {
            billionaires.map((billionaire) => (
              <CSSTransition key={billionaire.id} timeout={500} classNames="fade">
                {renderBillionaire(billionaire)}
              </CSSTransition>
            ))
          }
        </TransitionGroup>
      );
    }
    return (
      <div>There are no billionaires!</div>
    );
  };

  return (
    <div className={`${style['delete-list-component-ctn']} ${style['d-flex']} ${style.col}`}>
      {alert && <p>{alert}</p>}
      {renderBillionaires(billionaires)}
    </div>
  );
};

BillionaireDeleteList.propTypes = {
  billionaires: PropTypes.instanceOf(Object).isRequired,
};

export default BillionaireDeleteList;
