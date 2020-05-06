import { connect } from 'react-redux';
import { CounterState, getCount, getActiveUser } from './reducers/counter'
import { addOne, subtractOne, setUserAsActive } from "./actions/counter";

import  CounterView  from './Counter';

const mapStateToProps = (state: CounterState) => {
    console.log('count', getCount(state));
    return {
        count: getCount(state),
        activeUser: getActiveUser(state)
    };
};

const mapDispatchToProps = {
    addOne,
    subtractOne,
    setUserAsActive
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterView);