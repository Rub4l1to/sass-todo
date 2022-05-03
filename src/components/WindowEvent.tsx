import { ModalContext } from 'context';
import React, { useContext } from 'react';

// Icons
import { FaPlus } from 'react-icons/fa';

const WindowEvent = () => {
  const { handleModal } = useContext(ModalContext);

  return (
    <div className="window-event">
      <figure className="window-event__icon window-event__icon--plus" onClick={() => handleModal()}>
        <FaPlus />
      </figure>
    </div>
  );
};

export default WindowEvent;
