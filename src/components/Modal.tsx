import React, { useContext, ChangeEvent } from 'react';

//* Icons
import { FaTimes } from 'react-icons/fa';

//* Context
import { ModalContext, TodoContext } from 'context';

//* Hooks
import { useTodo } from 'hooks/useTodo';

const Modal = () => {
  const { handleChange, form, addToDo } = useTodo();
  const { show, handleModal, data } = useContext(ModalContext);

  return (
    <div className={`modal ${!show && 'modal--hide'} ${show && 'fadeInEffect'}`}>
      <div className="modal__content">
        <figure className="modal__icon" onClick={() => handleModal()}>
          <FaTimes />
        </figure>
        <h3 className="heading heading--secondary">New homework</h3>
        <form onSubmit={(e: ChangeEvent<HTMLFormElement>) => addToDo(e)}>
          <textarea value={form.data} placeholder="Write whatever you want..." onChange={handleChange} className="modal__text" minLength={10} required />
          <input type="submit" className=" heading btn btn--primary" value={data ? 'Edit homework' : 'Add homework'} />
        </form>
      </div>
    </div>
  );
};

export default Modal;
