import React, { useState, useContext, ChangeEvent } from 'react';
import { v4 as uuid } from 'uuid';

//* Context
import { ModalContext, TodoContext } from 'context';

export const useTodo = () => {
  const { handleTodo } = useContext(TodoContext);
  const { handleModal } = useContext(ModalContext);

  const [form, setForm] = useState({
    data: '',
  } as { data: string });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ data: e.target.value });
  };

  const addToDo = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id: string = uuid();
    handleTodo({ id, ...form });
    setForm({ data: '' });
    handleModal();
  };

  const handleEdit = (id: string) => {
    console.log(id);
  };

  return { addToDo, handleChange, handleEdit, form };
};
