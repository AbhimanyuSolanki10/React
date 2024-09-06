export let initialState =0;

 export function reducerFunc(state,action){
    console.log(state,action);
    switch(action.type){
        case "increment":
            return state + 1 ;
        case "decrement":
            return state - 1 ;
        case "reset":
            return state =0 ;
    }
}