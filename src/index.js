import store from './store';
import { bugAdded, bugResolve } from './actions';

// const unsubscribe = store.subscribe(() => {
//     console.log("Store Change!", store.getState());
// });

// store.dispatch({
//     type: "bugAdded",
//     payload: {
//         description: "Bug1"
//     }
// });

// unsubscribe();

// store.dispatch({
//     type: "bugRemoved",
//     payload: {
//         id: 1
//     }
// });

// console.log(store.getState());

// state = reducer(state, action);
// notify the subscribers

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolve(1));

console.log(store.getState());
