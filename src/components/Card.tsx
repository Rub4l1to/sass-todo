import React, { Key, useContext } from 'react';

// Icons
import { FaEdit } from 'react-icons/fa';

//* Interfaces
import { ToDo } from 'interfaces/Todo';

//* Hooks
import { useTodo } from '../hooks/useTodo';

interface Props {
  todo: ToDo;
  index: number;
}

const Card = ({ todo, index }: Props) => {
  const { handleEdit } = useTodo();

  return (
    <div className="card hover line">
      <p className="card__text">{todo.data}</p>
      <span className="heading card__number">{index + 1}</span>
      <FaEdit className="card__icon" onClick={() => handleEdit(todo.id)} />
    </div>
  );
};

export default Card;
