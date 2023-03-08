import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkPermission } from 'api/auth';
import { getTodos, createTodos, patchTodo, deleteTodo } from 'api/todos';
import { Footer, Header, TodoCollection, TodoInput } from 'components';

const TodoPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  let navigate = useNavigate();

  const handleChange = (value) => {
    setInputValue(value);
  };

  const handleAddTodo = async () => {
    if (inputValue.length === 0) {
      return;
    }

    try {
      const data = await createTodos({
        title: inputValue,
        isDone: false,
      });
      setTodos((prevTodo) => {
        return [
          ...prevTodo,
          {
            id: data.id,
            title: data.title,
            isDone: data.isDone,
            isEdit: false,
          },
        ];
      });
      setInputValue('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyDown = async () => {
    if (inputValue.length === 0) {
      return;
    }

    try {
      const data = await createTodos({
        title: inputValue,
        isDone: false,
      });
      setTodos((prevTodo) => {
        return [
          ...prevTodo,
          {
            id: data.id,
            title: data.title,
            isDone: data.isDone,
            isEdit: false,
          },
        ];
      });
      setInputValue('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleDown = async (id) => {
    try {
      const currentTodo = todos.find((todo) => {
        return todo.id === id;
      });

      const data = await patchTodo({
        id,
        isDone: !currentTodo.isDone,
      });

      setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              isDone: data.isDone,
            };
          }
          return todo;
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeMode = ({ id, isEdit }) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isEdit,
          };
        }
        return { ...todo, isEdit: false };
      });
    });
  };

  const handleSave = async ({ id, title }) => {
    try {
      const data = await patchTodo({
        id,
        title,
      });

      setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              title,
              isEdit: false,
            };
          }
          return todo;
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const data = await deleteTodo(id);
      setTodos((prevTodos) => {
        return prevTodos.filter((todo) => {
          return todo.id !== id;
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getTodosAsync = async () => {
      try {
        const todos = await getTodos();
        setTodos(
          todos.map((todo) => {
            return {
              ...todo,
              isEdit: false,
            };
          }),
        );
      } catch (error) {
        console.error(error);
      }
    };
    getTodosAsync();
  }, []);

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        navigate('/login');
        return;
      }
      const result = await checkPermission(authToken);

      if (!result) {
        navigate('/login');
      }
    };

    checkTokenIsValid();
  }, [navigate]);

  return (
    <div>
      TodoPage
      <Header />
      <TodoInput
        inputValue={inputValue}
        onChange={handleChange}
        onAddTodo={handleAddTodo}
        onKeyDown={handleKeyDown}
      />
      <TodoCollection
        todos={todos}
        onToggleDone={handleToggleDown}
        onChangeMode={handleChangeMode}
        onSave={handleSave}
        onDelete={handleDelete}
      />
      <Footer todoCount={todos.length} />
    </div>
  );
};

export default TodoPage;
