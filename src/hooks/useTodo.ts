import React, { useState, useContext, ChangeEvent, useEffect } from 'react';

//* Context
import { ModalContext, TodoContext } from 'context';
import { ToDo } from '../interfaces/Todo';

export const useTodo = () => {
  const { handleTodo, handleEditTodo, list } = useContext(TodoContext);
  const { handleModal, handleModalData, show, data } = useContext(ModalContext);

  const [form, setForm] = useState({
    data: '',
  } as { data: string });

  useEffect(() => {
    if (data) setForm({ data: data.data });
  }, [show]);

  const addToDo = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleTodo(form.data);
    handleModal();
    reset();
  };

  const editToDo = (e: ChangeEvent<HTMLFormElement>, todo: ToDo) => {
    e.preventDefault();
    handleEditTodo(todo);
    handleModal();
    reset();
  };

  const reset = () => {
    setForm({ data: '' });
    handleModalData({ id: '', data: '' });
    handleModal();
  };

  const handleEdit = (todo: ToDo) => {
    const item = list.filter((element) => element.id === todo.id)[0];
    handleModalData(item);
  };

  return { reset, addToDo, editToDo, setForm, handleEdit, form };
};
