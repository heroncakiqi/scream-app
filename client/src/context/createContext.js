import React , {useReducer} from 'react';

export default (reducer, actions, defaultValue) => {
  const Context = React.createContext();

  const Provider = (props) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    let actionBound = {}
    for (let key in actions) {
      actionBound[key] = actions[key](dispatch)
    }

    return (
      <Context.Provider value={{ state, ...actionBound}}>
        {props.children}
      </Context.Provider>
    )
  }

  return {Provider, Context}
}