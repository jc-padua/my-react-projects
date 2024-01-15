import { useReducer, useState } from 'react';

/*
    Initializing state and dispatch using useReducer
      const [state, dispatch] = useReducer();

    'state' serves as the holder for the current value/object/array.
    'dispatch' is a function that holds the reducer function.

    useReducer requires two arguments:
    - First argument is the reducer function.
    - Second argument is the initial state, which can be an object or an array.

    Create a reducer function with two parameters: (state, action)
    - This function contains the logic for updating the state based on the provided action.
    - The 'action' parameter triggers specific behavior depending on its type.

    Example dispatch usage:
      dispatch({ type: 'action' });
      
    This is used to trigger an action. The 'type' property specifies the action to be performed.

*/

const ACTION_TYPE = {
  ADD_TASK: 'add-task',
  TOGGLE_TASK: 'toggle-task',
  DELETE_TASK: 'delete-task',
};

const reducer = (task, action) => {
  if (action.type == 'add-task')
    return [
      ...task,
      { id: Date.now(), name: action.payload, completed: false },
    ];
  if (action.type == 'toggle-task') {
    return task.map(task =>
      task.id === action.payload
        ? { ...task, completed: !task.completed }
        : task
    );
  }
  if (action.type == 'delete-task') {
    const indexToDelete = task.findIndex(task => task.id === action.payload);
    if (indexToDelete !== -1) {
      const updatedTasks = [...task];
      updatedTasks.splice(indexToDelete, 1);
      return updatedTasks;
    }
    return task;
  }
};

function Task() {
  const [task, dispatch] = useReducer(reducer, []);
  const [taskName, setTaskName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!taskName) {
      return alert('Please provide task');
    }

    dispatch({ type: ACTION_TYPE.ADD_TASK, payload: taskName });
    setTaskName('');
  };

  console.log(task);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border-2 p-4">
        <h1 className="mb-4 text-2xl">Task List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="border-2 p-2 rounded-md"
            placeholder="Task"
            value={taskName}
            onChange={e => setTaskName(e.target.value)}
          />
          <button
            type="submit"
            className="border-2 p-2 rounded-md ml-4 hover:bg-slate-600 hover:text-white transition-all"
          >
            Submit
          </button>
        </form>
        <div className="mt-4">
          <ul className="flex flex-col gap-2">
            {task ? (
              task.map(item => {
                return (
                  <li key={item.id} className="flex justify-between p-2">
                    <p
                      className={`text-xl ${
                        item.completed ? 'text-green-400' : 'text-black'
                      }`}
                    >
                      {item.name}
                    </p>
                    <div className="">
                      <button
                        className="border-2 rounded-md p-2"
                        onClick={() =>
                          dispatch({
                            type: ACTION_TYPE.TOGGLE_TASK,
                            payload: item.id,
                          })
                        }
                      >
                        Complete
                      </button>
                      <button
                        className="border-2 rounded-md p-2"
                        onClick={() =>
                          dispatch({
                            type: ACTION_TYPE.DELETE_TASK,
                            payload: item.id,
                          })
                        }
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                );
              })
            ) : (
              <p>Empty task</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Task;
