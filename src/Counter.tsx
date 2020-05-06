import React from 'react';
import * as actions from './actions';
import { User } from './reducers/counter';

export type CounterProps = {
  count: number;
  activeUser: User;
  addOne: typeof actions.addOne;
  subtractOne: typeof actions.subtractOne;
  setUserAsActive: typeof actions.setUserAsActive;
};

const CounterView: React.FC<CounterProps> = ({
  count,
  activeUser,
  addOne,
  subtractOne,
  setUserAsActive,
}) => {
  console.log('count', count);
  console.log('activeuser', activeUser);
  return (
    <>
      <> Counter: {count} </>
      <> Active user name: {activeUser.name} </>
      <button onClick={() => addOne(1)}>Add one</button>
      <button onClick={() => subtractOne(1)}>Subtract one</button>
      <button onClick={() => setUserAsActive({ id: 'id', name: 'tomas' })}>
        Set user as active
      </button>
    </>
  );
};

export default CounterView;

