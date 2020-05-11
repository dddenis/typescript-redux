import React from 'react';
import * as actions from './actions';
import { User } from './reducers/counter';

export type CounterProps = {
  count: number;
  activeUser: User;
  addOneInit: typeof actions.addOneInit;
  subtractOne: typeof actions.subtractOne;
  setUserAsActive: typeof actions.setUserAsActive;
};

const CounterView: React.FC<CounterProps> = ({
  count,
  activeUser,
  addOneInit,
  subtractOne,
  setUserAsActive,
}) => {
  return (
    <>
      <> Counter: {count} </>
      <> Active user name: {activeUser.name} </>
      <button onClick={() => addOneInit(1)}>Add one</button>
      <button onClick={() => subtractOne(1)}>Subtract one</button>
      <button onClick={() => setUserAsActive({ id: 'id', name: 'tomas' })}>
        Set user as active
      </button>
    </>
  );
};

export default CounterView;

