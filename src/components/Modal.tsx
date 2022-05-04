import React, { useContext, ChangeEvent, useEffect } from 'react';

//* Icons
import { FaTimes } from 'react-icons/fa';

//* Context
import { ModalContext } from 'context';

//* Hooks
import { useTodo } from 'hooks/useTodo';

const Modal = () => {
  const { setForm, form, addToDo, editToDo } = useTodo();
  const { show, handleModal, data } = useContext(ModalContext);

  return (
    <div className={`modal ${!show && 'modal--hide'} ${show && 'fadeInEffect'}`}>
      <div className="modal__content">
        <figure className="modal__icon" onClick={() => handleModal()}>
          <FaTimes />
        </figure>
        <h3 className="heading heading--secondary">{data?.id ? 'Edit homework' : 'New homework'}</h3>
        <form onSubmit={(e: ChangeEvent<HTMLFormElement>) => (data?.id ? editToDo(e, { id: data.id, data: form.data }) : addToDo(e))}>
          <textarea
            value={form.data}
            placeholder="Write whatever you want..."
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setForm({ data: e.target.value })}
            className="modal__text"
            minLength={10}
            required
          ></textarea>
          <input type="submit" className=" heading btn btn--primary" value={data?.id ? 'Edit homework' : 'Add homework'} />
        </form>
      </div>
    </div>
  );
};

export default Modal;
