import { useReducer } from "react";

export const actions = {
  INCREMENT_COUNTER: "INCREMENT_COUNTER",
  DECREMENT_COUNTER: "DECREMENT_COUNT"
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter + 1
      };
    }
    case actions.DECREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter - 1
      };
    }
    default: {
      return state;
    }
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, { counter: 10});
 

  const handleChange = (type) => {
    const action = {
      type
    };
    dispatch(action);
  };

  return (
    <div>
      <h2>Counter</h2>
      <h2>{state.counter}</h2>
      <button onClick={() => handleChange(actions.INCREMENT_COUNTER)}>increment</button>
    <button onClick={() => handleChange(actions.DECREMENT_COUNTER)}>decrement</button>
    </div>
  );
}

export {Counter};
