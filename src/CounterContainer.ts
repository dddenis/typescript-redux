import { connect } from 'react-redux';
import { getCount, getActiveUser } from './reducers/counter';
import { addOne, subtractOne, setUserAsActive } from './actions/counter';

import CounterView from './Counter';
import { RootState } from './reducers';

const mapStateToProps = (state: RootState) => ({
  count: getCount(state.counter),
  activeUser: getActiveUser(state.counter),
});

const mapDispatchToProps = {
  addOne,
  subtractOne,
  setUserAsActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterView);

