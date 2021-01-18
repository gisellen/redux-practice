const counterReducer = (state = 0, action) => {
    switch(action.type){
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1
        case "RESET":
            return state = 0
        case "INCREMENTBY":
            return action.num + state
        default:
            return state;
    }
}
export default counterReducer;