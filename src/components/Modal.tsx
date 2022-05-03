import { ModalContext } from 'context';
import React, { useContext } from 'react';

//* Icons
import { FaTimes } from 'react-icons/fa';

const Modal = () => {
  const { show, handleModal } = useContext(ModalContext);

  return (
    <div className={`modal ${show ? 'fadeInEffect' : 'fadeOutEffect'}`}>
      <div className="modal__content">
        <figure className="modal__icon" onClick={() => handleModal()}>
          <FaTimes />
        </figure>
        <h3 className="heading heading--secondary">New homework</h3>
        <form>
          <textarea placeholder="Write whatever you want..." className="modal__text" minLength={10} required></textarea>
          <input type="submit" className=" heading btn btn--primary" value="Add homework" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
