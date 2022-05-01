import React from 'react';

//* Components
import { Card } from 'components';

const TodoList = () => {
  const list: any = [];

  return (
    <section className="section-list u-padding-grid">
      {list.map((el: any, index: React.Key) => (
        <Card key={index} {...{ el, index }} />
      ))}
    </section>
  );
};

export default TodoList;
