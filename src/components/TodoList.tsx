import React, { useContext } from 'react';

//* Interfaces
import { ToDo } from 'interfaces/Todo';

//* Components
import { Card } from 'components';

//* Context
import { TodoContext } from 'context/Todo/TodoContext';

const TodoList = () => {
  const { list } = useContext(TodoContext);

  return (
    <section className="section-list u-padding-grid">
      {list.map((el: ToDo, index: number) => (
        <Card key={index} {...{ todo: el, index }} />
      ))}
    </section>
  );
};

export default TodoList;
