
import React from 'react';
import {addOne, setUserAsActive, subtractOne, User} from "./actions/counter";

export type CounterProps = {
    count: number;
    activeUser: User,
    addOne: typeof addOne,
    subtractOne: typeof subtractOne,
    setUserAsActive: typeof setUserAsActive
};

const CounterView: React.FC<CounterProps> = ({ count, activeUser, addOne, subtractOne, setUserAsActive }) => {
    console.log('count', count);
    console.log('activeuser', activeUser);
    return(
        <>
            <> Counter: {count} </>
            <> Active user name: {activeUser.name} </>
            <button onClick={()=>addOne(1)} >Add one</button>
            <button onClick={()=>subtractOne(1)} >Subtract one</button>
            <button onClick={()=>setUserAsActive({id: 'id', name: 'tomas'})} >Set user as active</button>
        </>
    )

};


export default CounterView;