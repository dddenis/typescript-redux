import { connect } from 'react-redux';
import { getCount, getActiveUser } from './reducers/counter';
import { addOneInit, subtractOne, setUserAsActive } from './actions/counter';

import CounterView from './Counter';
import { RootState } from './reducers';

const mapStateToProps = (state: RootState) =>{
   return {
       count: getCount(state.counter),
       activeUser: getActiveUser(state.counter),
   }
};

const mapDispatchToProps = {
  addOneInit,
  subtractOne,
  setUserAsActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterView);

